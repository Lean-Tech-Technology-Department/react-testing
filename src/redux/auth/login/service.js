export const login = (payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { token: 'abc123', name: 'My User' } })
    }, 2000)
  })
}
