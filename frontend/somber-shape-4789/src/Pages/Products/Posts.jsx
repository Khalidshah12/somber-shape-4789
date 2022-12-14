import React from 'react'

const  Posts = ({posts, loading})  =>{

    if(loading) {
        return <h2>
            Loading....
        </h2>
    }
  return (
    <div>
        {
            posts.map(post => (
                <li key={post.id} className="list-group">{post.type}</li>
            ))
        }
    </div>
  )
}

export default Posts;
