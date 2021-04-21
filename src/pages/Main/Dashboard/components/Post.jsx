import React, { useState } from 'react'
import { Card, CardHeader, CardContent, Typography, makeStyles } from '@material-ui/core'
import MoreOptionsMenu from '../../../../components/MoreOptionsMenu'
import AddOrUpdateModal from './AddOrUpdateModal'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 500,
    width: '100%',
    marginBottom: 10
  }
}))

const menuOptions = (id, onEdit, onDelete) => [
  {
    text: 'Edit',
    callback: () => onEdit(),
    testID: 'PostEditOption'
  },
  {
    text: 'Delete',
    callback: () => onDelete(id),
    testID: 'PostDeleteOption'
  }
]

const Post = ({ post, onEdit, onDelete, loading, testID }) => {
  const [open, setOpen] = useState(false)
  const styles = useStyles()
  const [values, setValues] = useState(post)

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = () => {
    onEdit(values, () => setOpen(false))
  }

  return (
    <>
      <Card className={styles.root} {...{ 'data-testid': testID }}>
        <CardHeader
          title={post.title}
          action={<MoreOptionsMenu options={menuOptions(post.id, () => setOpen(true), onDelete)} />}
          titleTypographyProps={{ variant: 'body2', component: 'p' }}
          {...{ 'data-testid': 'PostTitleText' }}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" {...{ 'data-testid': 'PostBodyText' }}>
            {post.body}
          </Typography>
          <Typography {...{ 'data-testid': 'PostID' }}variant="body2" color="textSecondary" component="p" style={{ fontWeight: 500 }}>
            ID: {post.id}
          </Typography>
        </CardContent>
      </Card>
      <AddOrUpdateModal
        testID={'DashboardPostUpdateModal'}
        open={open}
        values={values}
        handleOnChange={handleOnChange}
        onSubmit={onSubmit}
        loading={loading}
        setOpen={setOpen}
      />
    </>
  )
}

export default Post
