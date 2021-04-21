import { getElement, getElementsBeginsWith } from '../general'

export const getDashboardView = () => {
  return getElement('DashboardView')
}

export const getAddPostButton = () => {
  return getElement('AddPostButton')
}

export const getPostList = () => {
  return getElement('DashboardListOfPost')
}

export const getPostCards = () => {
  return getElementsBeginsWith('DashboardListOfPost')
}

export const getAddPostModal = () => {
  return getElement('DashboardPostAddModal')
}

export const getUpdatePostModal = () => {
  return getElement('DashboardPostUpdateModal')
}

export const getPostOptionsButton = () => {
  return getElement('MoreOptionsIcon')
}

export const getPostMenuEditOption = () => {
  return getElement('PostEditOption')
}

export const getPostMenuDeleteOption = () => {
  return getElement('PostDeleteOption')
}

export const getPostModalTitleInput = () => {
  return getElement('DashboardModalInputTitle')
}

export const getPostModalBodyInput = () => {
  return getElement('DashboardModalInputBody')
}

export const getPostModalButtonOk = () => {
  return getElement('DashboardModalButtonOk')
}

export const getPostModalButtonCancel = () => {
  return getElement('DashboardModalButtonCancel')
}

export const getPostTitle = () => {
  return getElement('PostBodyTitle')
}

export const getPostBody = () => {
  return getElement('PostBodyText')
}

export const getPostID = () => {
  return getElement('PostID').contains('ID')
}
