import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiDotnet, SiTailwindcss, SiCsharp, SiPrisma, SiJest, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
    return (
        <section className=" w-screen bg-background_primary px-4 py-10">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h2 className="text-3xl text-center text-white font-black">My Skills</h2>
                <span className="text-white mt-2"> Technologies I’ve been working with recently</span>
                <div className="flex items-center opacity-20 mt-10 gap-4">
                    <IoLogoHtml5 size={65} color="#97979F" />
                    <IoLogoCss3 size={65} color="#97979F" />
                    <IoLogoJavascript size={65} color="#97979F" />
                    <IoLogoReact size={65} color="#97979F" />
                    <BsFillBootstrapFill size={65} color="#97979F" />
                    <SiTypescript size={65} color="#97979f" />
                    <SiCsharp size={65} color="#97979F" />
                    <SiDotnet size={65} color="#97979F" />
                    <IoLogoNodejs size={65} color="#97979F" />
                    <SiPrisma size={65} color="#97979F" />
                    <TbBrandNextjs size={65} color="#97979F" />
                    <SiTailwindcss size={65} color="#97979F" />
                    <SiJest size={65} color="#97979f" />
                    <SiJest size={65} color="#97979f" />
                    <SiJest size={65} color="#97979f" />

                </div>
            </div>
        </section>
    )
}

export default Skills;