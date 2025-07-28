import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home/Home';
import Video from './Page/Video/Video';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes> {/* the route allows different pages */}
        <Route path='/' element={<Home/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App