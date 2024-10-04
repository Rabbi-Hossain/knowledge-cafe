/* eslint-disable react/prop-types */

import Bookmark from "../../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks, time}) => {
    return (
        <div className="w-4/12  bg-gray-300">
            <h2 className="text-2xl p-2 text-center mt-4 font-extrabold text-blue-600">Spent time on read : {time} min</h2>
            <h3 className="text-2xl font-bold text-center m-5 ">Bookmarked Blogs : {bookmarks.length}</h3>
            <div className=" ">
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}> </Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;