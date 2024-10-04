
import { useState } from 'react'
import './App.css'
import Blogs from './components/Header/Blogs/Blogs'
import Bookmarks from './components/Header/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [time, setTime] = useState(0)

  const bookmarksHandler = (blog) =>{
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks)
    
  }

  const timeHandler = times =>{
    setTime(time + times)
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>

      <div className='md:flex justify-between gap-4'>
        <Blogs timeHandler={timeHandler}
         bookmarksHandler={bookmarksHandler }></Blogs>
        <Bookmarks time={time} bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
