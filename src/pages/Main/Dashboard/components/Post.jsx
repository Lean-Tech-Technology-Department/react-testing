import React from 'react'
import { Card, CardHeader, CardContent, Typography, makeStyles } from '@material-ui/core'
import MoreOptionsMenu from '../../../../components/MoreOptionsMenu'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    marginBottom: 10
  }
}))

const menuOptions = [{
  text: 'Edit',
  callback: () => null
}, {
  text: 'Delete',
  callback: () => null
}]

const Post = ({ post }) => {
  const styles = useStyles()
  return (
    <Card className={styles.root}>
      <CardHeader
      title={post.title}
        action={
          <MoreOptionsMenu options={menuOptions}/>
        }
        titleTypographyProps={{ variant: 'body2', component: 'p' }}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Post
