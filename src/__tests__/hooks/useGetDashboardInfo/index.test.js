import { renderHook, act } from '@testing-library/react-hooks'
import { useGetDashboardInfo } from '../../../hooks/useGetDashboardInfo'
import * as service from '../../../hooks/useGetDashboardInfo/service'
import { errorMock } from '../../../utils/tests/mocks'

jest.spyOn(service, 'fetchDashboardInfo')

describe('Get Dashboard Info Hook', () => {
  const dashboardInfoMock = {
    data: [],
    title: 'Test Dashboard',
    availableTrucksAmount: 32
  }
  it('should update the info when the service responds with a resolved promise', async() => {
    service.fetchDashboardInfo.mockImplementation(() => Promise.resolve(dashboardInfoMock))
    const { result, waitForNextUpdate } = renderHook(() => useGetDashboardInfo())
    act(() => {
      result.current.getDashboardInfo()
    })
    await waitForNextUpdate()
    expect(service.fetchDashboardInfo).toBeCalled()
    expect(result.current.info).toEqual(dashboardInfoMock)
    expect(result.current.loading).toEqual(false)
    expect(result.current.error).toEqual('')
  })

  it('should update the error when the service responds with a rejected promise', async() => {
    service.fetchDashboardInfo.mockImplementation(() => Promise.reject(errorMock))
    const { result, waitForNextUpdate } = renderHook(() => useGetDashboardInfo())
    act(() => {
      result.current.getDashboardInfo()
    })
    await waitForNextUpdate()
    expect(service.fetchDashboardInfo).toBeCalled()
    expect(result.current.info).toEqual({})
    expect(result.current.loading).toEqual(false)
    expect(result.current.error).toEqual(errorMock.message)
  })
})
