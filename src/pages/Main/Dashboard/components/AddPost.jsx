import React, { useState } from 'react'
import { Button, Modal, Backdrop, Fade } from '@material-ui/core'
const AddPost = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button />
      <Modal
        open={open}
        onClose={() => null}
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
