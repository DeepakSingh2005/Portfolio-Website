import Homepage from "../pages/Homepage";
import {motion} from "framer-motion";
import {Glowfade} from "../animation/Animation.jsx"

export default function Navbar({scroll,scrollto,scrolltoskills}) {
  return (
    <header className="max-w-7xl sm:[15vh] mx-auto px-8 py-8">
      <nav className="flex justify-between items-center">

        <h1 className="text-5xl font-black tracking-tight">
          Deepak
          <span className="text-yellow-500">.</span>
        </h1>

        <ul className="hidden md:flex  gap-12 text-lg">

         <div className="flex font-medium text-zinc-600 cursor-pointer gap-10 justify-center">
          <motion.li whileHover={{ scale: 1.2 ,x:10 ,transition: { duration: 0.1 } }}  className=' transition'>Home</motion.li>
          
          <motion.li whileHover={{ scale: 1.2 ,x:10 ,transition: { duration: 0.1 } }}  className=' transition' onClick={scrolltoskills}>Skills</motion.li>
          <motion.li whileHover={{ scale: 1.2 ,x:10 ,transition: { duration: 0.1 } }}  className=' transition' onClick={scroll}>Projects</motion.li>
          <motion.li whileHover={{ scale: 1.2 ,x:10 ,transition: { duration: 0.1 } }}  className=' transition' onClick={scrollto}>Contact</motion.li>
         </div>

        </ul>

        <motion.button   onClick={scrollto} className="cursor-pointer inline-flex items-center gap-3 rounded-2xl bg-zinc-950 px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 sm:text-base">
          Let's Connect   
          <span className="text-lg text-[#f8bc13]">-&gt;</span>
        </motion.button>

      </nav>
    </header>
  );
}