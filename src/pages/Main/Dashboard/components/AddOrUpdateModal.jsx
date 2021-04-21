import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormLabel,
  TextField
} from '@material-ui/core'
import React from 'react'
import { InputContainer, ModalActionButtonsContainer } from './styles'

const AddOrUpdateModal = ({ open, setOpen, handleOnChange, loading, onSubmit, values, testID }) => {
  return (
    <Dialog {...{ 'data-testid': testID }}open={open} onClose={() => setOpen(false)} closeAfterTransition fullWidth maxWidth="sm" keepMounted={false}>
      <DialogTitle>Add New Post</DialogTitle>
      <DialogContent>
        <form>
          <InputContainer>
            <FormLabel>Title</FormLabel>
            <TextField {...{ 'data-testid': 'DashboardModalInputTitle' }} variant="outlined" onChange={handleOnChange} name="title" margin="normal" value={values.title} />
          </InputContainer>
          <InputContainer>
            <FormLabel>Comments</FormLabel>
            <TextField
            {...{ 'data-testid': 'DashboardModalInputBody' }}
              variant="outlined"
              onChange={handleOnChange}
              name="body"
              margin="normal"
              multiline
              rows={5}
              value={values.body}
            />
          </InputContainer>
        </form>
      </DialogContent>
      <DialogActions>
        <ModalActionButtonsContainer>
          <Button {...{ 'data-testid': 'DashboardModalButtonCancel' }} onClick={() => setOpen(false)} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button {...{ 'data-testid': 'DashboardModalButtonOk' }} onClick={onSubmit} color="primary" variant="contained">
            {loading ? <CircularProgress color="secondary" /> : 'Ok'}
          </Button>
        </ModalActionButtonsContainer>
      </DialogActions>
    </Dialog>
  )
}

export default AddOrUpdateModal
