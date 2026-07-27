import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa"

import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si"

const skills = [
  {
    title: "React.js",
    type: "Frontend",
    icon: <FaReact size={40} />,
    className: "col-span-2 row-span-2",
  },
  {
    title: "JavaScript",
    type: "Language",
    icon: <SiJavascript size={35} />,
    className: "col-span-2",
  },
  
  {
    title: "Python",
    type: "Language",
    icon: <FaPython size={28} />,
    className: "",
  },
 
  
  {
    title: "Node.js",
    type: "Backend",
    icon: <FaNodeJs size={35} />,
    className: "row-span-2",
  },

  
 
  {
    title: "Tailwind",
    type: "Frontend",
    icon: <SiTailwindcss size={28} />,
  },
  {
    title: "Redux",
    type: "Frontend",
    icon: <SiRedux size={28} />,
  },
 
  {
    title: "Express",
    type: "Backend",
    icon: <SiExpress size={28} />,
  },
  {
    title: "MongoDB",
    type: "Backend",
    icon: <SiMongodb size={28} />,
    className: "col-span-2",
  },
  
  {
    title: "MySQL",
    type: "Backend",
    icon: <SiMysql size={28} />,
  },
 
  {
    title: "Git",
    type: "DevOps",
    icon: <FaGitAlt size={28} />,
  },
  {
    title: "Postman",
    type: "DevOps",
    icon: <SiPostman size={28} />,
  },
];

 function skillscomp() {
  return (
    <section className="bg-black min-h-screen flex justify-center items-center p-10">
      <div className="grid grid-cols-6  gap-4 w-full max-w-7xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`relative rounded-2xl border border-neutral-800 bg-neutral-950 p-5 overflow-hidden group hover:border-white duration-300 ${skill.className}`}
          >
            <div className="text-gray-300">{skill.icon}</div>

            <div className="mt-6">
              <h2 className="text-white font-semibold text-lg">
                {skill.title}
              </h2>

              <p className="text-xs uppercase tracking-widest text-gray-500">
                {skill.type}
              </p>
            </div>

            <div className="absolute bottom-3 right-3 text-[70px] text-white/5 group-hover:text-white/10 transition">
              {skill.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default skillscomp;