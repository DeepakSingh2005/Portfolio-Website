import profile from "../assets/Profile2.png";
import arrow from "../assets/arrow.svg"
import { motion } from "framer-motion";
import {Fadein} from "../animation/Animation.jsx"
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Homepage from "../pages/Homepage";


export default function Hero({scroll}) {
  
  const handleDownload = () => {
  const link=document.createElement('a');
  link.href="/Deepak_Singh_CV.pdf";
  link.download=" Deepak_Resume.pdf"
  document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }
  return (
    <section className="max-w-7xl mx-auto px-8 mt-10">
<Fadein>
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div className=" antialiased">

          <p className="text-3xl mb-5">
            👋 Hello, I'm 
          </p>

          <h1 className="font-black select-none leading-none text-[120px]">
            DEEPAK  
           
            
            SINGH
          </h1>

          <h2 className="text-[90px] text-transparent   [-webkit-text-stroke:2px_#d9d9d9] select-none font-black stroke">
            DEVELOPER
          </h2>

          <p className="text-2xl mt-8 text-gray-600 max-w-lg">
            I build modern, responsive and user-friendly
            <span className="font-semibold text-black">
              {" "}
              web experiences.
            </span>
          </p>

          <div className="flex gap-5 mt-10">

            <motion.button whileHover={{ scale: 1.05   }} onClick={scroll} className="inline-flex items-center gap-4 rounded-2xl bg-zinc-950 px-6 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)]  hover:bg-zinc-800">
              View My Work ↗
            </motion.button>

            <button onClick={handleDownload} className="inline-flex items-center gap-4 rounded-2xl border border-black/10 bg-white px-6 py-4 text-base font-semibold text-zinc-950 shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-black/20">
              Download CV 
            </button>

          </div>

          <div className="flex gap-5 mt-12">

            <div className="w-14 h-14 rounded-full bg-white shadow flex justify-center items-center">
              <FaLinkedin size={22} />
            </div>

            <div className="w-14 h-14 rounded-full bg-white shadow flex justify-center items-center">
              <FaGithub size={22} />
            </div>

            <div className="w-14 h-14 rounded-full bg-white shadow flex justify-center items-center">
              <FaInstagram size={22} />
            </div>

          </div>  

        </div>

        <div className="relative w-250 rounded-xl h-200 right-55">
 <img className="h-30 w-30  object-fill relative left-20 top-23" src={arrow} alt="" />
                     

          <img
            src={profile}
            alt=""
            className="relative
             h-150 rounded-3xl object-cover"
          />

          <div className="absolute top-135 right-20 bg-white rounded-3xl shadow-xl p-6">

            <p className="text-gray-500">
              Available for
            </p>

            <h3 className="font-bold text-2xl">
              Freelance Projects
            </h3>

            <p className="text-green-500 mt-2">
              ● Available Now
            </p>

          </div>

        </div>

      </div></Fadein>
      

    </section>
  );
}
