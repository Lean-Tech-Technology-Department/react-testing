import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import AddOrUpdateModal from './AddOrUpdateModal'

const AddPost = ({ loading, onPostCreation }) => {
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState({ title: '', body: '' })

  const handleOpen = (value) => {
    setOpen(value)
  }

  const onCreationError = () => alert('Post creation failed')
  const onCreate = () => {
    if (values.title && values.body) { onPostCreation({ ...values, id: 999, userId: 1 }, () => setOpen(false), onCreationError) }
  }

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Button onClick={() => handleOpen(true)} color="primary" variant="contained" {...{ 'data-testid': 'AddPostButton' }}>
        Add Post
      </Button>
      <AddOrUpdateModal
        testID={'DashboardPostAddModal'}
        values={values}
        open={open}
        handleOnChange={handleOnChange}
        onSubmit={onCreate}
        loading={loading}
        setOpen={setOpen}
      />
    </>
  )
}

export default AddPost
