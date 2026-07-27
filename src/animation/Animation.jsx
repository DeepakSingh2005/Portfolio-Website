import React from 'react'
import {motion} from 'framer-motion'
export const Fadein=({
children,
delay=0.2,
duration=0.5,
y=20,
once=true,

className='',
})=>{
    return( <motion.div  initial={{
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
  }} 
  whileInView={{
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  }}
  transition={{ duration: 0.8 }}
 viewport={{
  once: false,
  amount: 0.4,
}}>
    {children}

    </motion.div>)
}
 export const Blur=({
children,
delay=0.2,
duration=0.5,
y=20,
once=true,
className='',
})=>{
    return(
    <motion.div initial={{
  opacity: 0,
  filter: "blur(10px)",
  y: 20,
}}
whileInView={{
  opacity: 1,
  filter: "blur(0px)",
  y: 0,
}}
transition={{ duration: 0.8 }}
viewport={{
        once:false,
        amount: 0.2,
      }}

>
    {children}
        
    </motion.div>)
}
 export const Glowfade=({
children,
delay=0.2,
duration=0.5,
y=20,
once=true,
className='',
})=>{
    return(
    <motion.div animate={{
    y:[0,-8,0]
}}
transition={{
    repeat:Infinity,
    duration:0.8
}}

viewport={{
        once:false,
        amount: 0.2,
      }}

>
    {children}
        
    </motion.div>)
}


