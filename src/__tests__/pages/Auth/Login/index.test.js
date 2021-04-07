import React from 'react'
import { fireEvent, waitFor } from '@testing-library/react'
import * as loginActions from '../../../../redux/auth/login/actions'
import { renderWithProviders, TestProviders } from '../../../../utils/tests'
import Login from '../../../../pages/Auth/Login'
import { credentialsMock } from '../../../../utils/tests/mocks'

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch
}))

describe('Login component', () => {
  it('renders snapshot correctly', () => {
    const { asFragment } = renderWithProviders(<Login />)
    expect(asFragment(<Login />, { wrapper: TestProviders })).toMatchSnapshot()
  })

  it('handles the inputs validation', async() => {
    const { getByText, getByRole } = renderWithProviders(<Login />)
    const loginButton = getByText('Login')
    fireEvent.click(loginButton)
    await waitFor(() => {
      expect(getByRole('error')).toHaveTextContent('The username and the password are required')
    })
  })

  it('handles the login action', async() => {
    const { getByTestId, getByText } = renderWithProviders(<Login />)
    const usernameInput = getByTestId('loginUsernameInput')
    const passwordInput = getByTestId('loginPasswordInput')
    const loginButton = getByText('Login')
    fireEvent.change(usernameInput, { target: { value: credentialsMock.username } })
    fireEvent.change(passwordInput, { target: { value: credentialsMock.password } })
    fireEvent.click(loginButton)
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(loginActions.login(credentialsMock))
    })
  })
})
