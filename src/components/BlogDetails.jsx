import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[60px] w-[75%] mx-auto border-2 p-3 rounded-lg  shadow-md'>
      <NavLink to={`/blog/${post.id}`} >
        <span className='font-bold text-xl'>{post.title}</span>
      </NavLink>
      <p className=' font-semibold'>
        By
        <span>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span>{post.category}</span>
        </NavLink>
      </p>
      <p className='font-bold '> Posted on {post.date} </p>
      <p> {post.content}</p>
      <div className=' '>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className=' text-blue-500'>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
