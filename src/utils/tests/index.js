import React from 'react'
import { runSaga } from 'redux-saga'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store'

export async function recordSaga(saga, initialAction) {
  const dispatched = []

  await runSaga(
    {
      dispatch: (action) => dispatched.push(action)
    },
    saga,
    initialAction
  ).done

  return dispatched
}

export const TestProviders = (props) => (
  <Provider store={store}>
    <div {...props} />
  </Provider>
)

export const renderWithProviders = (ui) => render(ui, { wrapper: TestProviders })
