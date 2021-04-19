import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '../Menu'

const MoreOptionsMenu = ({ options }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <IconButton aria-label="settings" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu options={options} anchoEL={anchorEl} handleClose={handleClose}/>
    </div>
  )
}

export default MoreOptionsMenu
