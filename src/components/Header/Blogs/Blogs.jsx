/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";

const Blogs = ({bookmarksHandler,timeHandler }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])


    return (
        <div className="w-4/6 ">
            <h3>Blogs container: {blogs.length}</h3>
            {
                blogs.map(blog=><Blog key={blog.id}
                    timeHandler={timeHandler}
                     bookmarksHandler ={bookmarksHandler } blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;