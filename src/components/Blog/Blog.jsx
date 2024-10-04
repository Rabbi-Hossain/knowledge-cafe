/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, bookmarksHandler,timeHandler }) => {
    const { cover, title, author, author_img, posted_date, reading_time, hashtags } = blog
    return (
        <div className="space-y-4 mb-6">
            <img src={cover} alt="" />
            <div className="flex items-center justify-between">
                <div className="flex items-center" >
                    <img className="w-24" src={author_img} alt="" />
                    <div className="ml-4">
                        <h2>{author}</h2>
                        <h3>{posted_date}</h3>
                    </div>
                </div>


                <div>
                    <h3 className="flex items-center">{reading_time} min read <span 
                    onClick={()=>bookmarksHandler(blog)}
                    className="text-2xl ml-2 text-red-400"><FaBookmark /></span></h3>
                </div>
            </div>

            <div >
                <h3 className="text-3xl font-bold">{title}</h3>
                {
                    hashtags.map((has, idx) => <span key={idx}><a className="ml-3 text-lg" href="">#{has}</a></span>)
                }
            </div>

            <button onClick={()=>timeHandler(reading_time)} className="text-blue-800 font-bold underline">Marks as read</button>
        </div>
    );
};

export default Blog;