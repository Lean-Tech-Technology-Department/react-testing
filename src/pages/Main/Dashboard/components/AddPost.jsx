import React, { useState } from 'react'
import { Button, Modal, Backdrop } from '@material-ui/core'
const AddPost = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      ></Modal>
    </>
  )
}

export default AddPost
