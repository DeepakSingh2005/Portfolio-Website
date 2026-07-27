import React from 'react'
import {motion} from 'framer-motion'
import Skillscomp from '../components/Skillscomp.jsx'
import {Fadein} from '../animation/Animation.jsx'
function Skills() {
  return (
    <div className='h-full   w-full  bg-black  '>
    
      <div className='  h-[40vw] w-full  relative  bottom-0   ' > <Fadein>
      <h1 className='text-[2vh]  justify-center  border items-center flex text-white w-15 relative left-[28vw] tracking-wider top-40   font-bebas-neue '>skills</h1>
      <h1 className='text-[12vh] text-gray-600 w-15 relative left-[21vw] tracking-wider top-25    font-bebas-neue text-5xl'>02</h1>
      </Fadein>
      <div className=' h-60 text-[10vh] w-[40vw] overflow-hidden leading-20   relative left-[28vw] top-20 '>
       
        <h1 className='   w-full  font-bebas-neue text-white flex '>Technologies I Work <br/>   
With</h1>
      </div></div>
      <div className='  relative bottom-[18vw] ' >
      <Fadein><Skillscomp/></Fadein>
      </div>
        
           

    </div>
  )
}

export default Skills