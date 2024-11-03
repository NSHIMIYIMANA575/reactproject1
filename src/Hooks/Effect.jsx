import React, { useEffect, useState } from 'react'

export const Effect = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/posts')
            .then((data)=>data.json())
            .then ((res)=>setPosts(res))
     
    },[])
    
  return (
    <div>
        <h1> list of posts</h1>
        <ol>
{posts.map((post)=>(
   <li key={post.id}>{post.title}</li>
))}
</ol>
    </div>
  )
}

