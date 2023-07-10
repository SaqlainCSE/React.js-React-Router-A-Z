import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from './data';

const Blogs = () => {

  const [blogs, setBlogs] = useState(blogsData);

  const trancateString = (str, num) => {
    if(str.length > num)
    {
      return str.slice(0, num) + "...";
    }
    else{
      return str;
    }
  }
  
  return (
    <div>
      <h1>This is Blogs Page...</h1>
      {blogs.map((blog) => {

        const {id, title, body} = blog;

        return <article key={id}>
              <h1>{title}</h1>
              <h6>{trancateString(body,100)}</h6>
              <Link to={title} state={{ id, title, body }}>Learn More</Link>
        </article>
      })}
    </div>
  )
}

export default Blogs