import React from 'react'
import Post from './Post'

const ListOfPosts = ({ posts, onDelete, onEdit, loading }) => {
  return (
    <div {...{ 'data-testid': 'DashboardListOfPost' }} style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
      {posts.map((item, index) => (
        <Post key={index} post={item} onDelete={onDelete} onEdit={onEdit} loading={loading} testID={`DashboardPost${index}`}/>
      ))}
    </div>
  )
}

export default ListOfPosts
