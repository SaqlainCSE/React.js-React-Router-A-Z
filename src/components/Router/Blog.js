import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Blog = () => {
    const location = useLocation();
    const {title} = useParams();
    // const [bodyData, setBodyData] = useState('');

    // useEffect(() => {
    //     const blogData = blogsData.filter((blog) => blog.title === title);
    //     setBodyData(blogData[0].body);
    // },[]);
    
  return (
    <div>
        <h1>{title} Page...</h1>
        <p>{location.state.body}</p>
    </div>
  )
}

export default Blog