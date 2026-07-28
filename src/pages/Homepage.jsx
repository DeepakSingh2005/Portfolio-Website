import React, { useRef } from 'react';
import Navbar from '../components/Nevbar.jsx';
import Hero from '../components/Hero.jsx';
import Project from './project.jsx';
import Contact from './Contact.jsx';
import Skills from '../pages/Skills.jsx';
import {delay, motion,useScroll} from 'framer-motion'



export default function Homepage() {
  const projectref = useRef(null);
  const contactref = useRef(null);
  const skillsref = useRef(null);
const  {scrollYProgress}  = useScroll()
console.log(scrollYProgress)
const Scrolltocontact = () => {
  contactref.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
  const handleScroll = () => {
   
    projectref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    }); 
  };
    const Scrolltoskills = () => {
   
    skillsref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    }); 
  };

  return (
    
    <div >

<motion.div style={{scaleX: scrollYProgress}}  className=' h-[9px] fixed origin-left border border-cyan-400   z-10 w-screen bg-gradient-to-r from-blue-500 to-purple-600'>
  
</motion.div>
      <div className="min-h-screen  bg-[#fafafa] overflow-hidden">
        
        <Navbar scroll={handleScroll} scrollto={Scrolltocontact} scrolltoskills={Scrolltoskills} />
        <Hero scroll={handleScroll}  />
      
       <section ref={skillsref}  className=" relative   bg-black h-[160vh]    text-white">
        <Skills/>
      </section>
      
      <section 
        ref={projectref}
        className=" relative bg-[#111111]  border-gray-600   text-white"
      >
        <Project  />
       
      </section>
      <div  ref={contactref}>
        <Contact 
         /></div >
     
      </div>
    </div>
    
  );
}
