import React from 'react'
import { Snackbar } from '@material-ui/core'

const Notification = ({ open, message }) => {
  if (open) { return <Snackbar message={message}/> }
  return <></>
}

export default Notification
