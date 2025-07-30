import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home/Home';
import Video from './Page/Video/Video';

const App = () => {

  const [sidebar, setSidebar] = useState();

  return (
    <div>
      <Navbar setSidebar = {setSidebar}/>
      <Routes> {/* the route allows different pages */}
        <Route path='/' element={<Home sidebar = {sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App