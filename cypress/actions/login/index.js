import { getElement } from './../../pages/general'

export const getLoginUsernameInput = () => {
  return getElement('loginUsernameInput')
}

export const getLoginPasswordInput = () => {
  return getElement('loginPasswordInput')
}

export const getLoginButton = () => {
  return getElement('loginButton')
}

export const setLoginUsernameInputValue = (value) => {
  return getLoginUsernameInput().type(value)
}

export const setLoginPasswordInputValue = (value) => {
  return getLoginPasswordInput().type(value)
}
