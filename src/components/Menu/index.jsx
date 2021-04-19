import React from 'react'
import { Menu as MaterialMenu, MenuItem } from '@material-ui/core'

const Menu = ({ options, anchoEL, handleClose }) => {
  const onHandleClose = (callback) => {
    if (callback) callback()
    handleClose()
  }
  return (
    <MaterialMenu anchorEl={anchoEL} open={Boolean(anchoEL)} keepMounted={false} onClose={() => handleClose()}>
      {options.map((item, index) => (
        <MenuItem key={index} onClick={() => onHandleClose(item.callback)} {...{ 'data-testid': item.testID }}>
          {item.text}
        </MenuItem>
      ))}
    </MaterialMenu>
  )
}

export default Menu
