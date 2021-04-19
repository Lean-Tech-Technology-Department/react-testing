import React from 'react'
import Post from './Post'

const ListOfPosts = ({ posts }) => {
  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
      {posts.map((item, index) => (
        <Post key={index} post={item} />
      ))}
    </div>
  )
}

export default ListOfPosts
