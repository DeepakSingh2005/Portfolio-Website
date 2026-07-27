import React from 'react'
import {Routes,Route} from 'react-router-dom'

import projects from './pages/project'
import Homepage from './pages/Homepage'
import {motion,useScroll} from 'framer-motion'
function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden text-black">
      
      <Routes>
        <Route path="/" element={<Homepage />} />
          
      </Routes>
    </div>
  )
}

export default App
