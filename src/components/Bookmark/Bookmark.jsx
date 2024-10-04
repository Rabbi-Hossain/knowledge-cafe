/* eslint-disable react/prop-types */

const Bookmark = ({bookmark}) => {
    const{title} = bookmark
    return (
        <div className="text-center text-lg font-semibold p-4 mt-4 bg-gray-200 rounded-xl">
            <h3>{title}</h3>
        </div>
    );
};

export default Bookmark;