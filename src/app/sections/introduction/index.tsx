"use client"
import FotoBruno from "../../../../public/FotoBruno.svg"
import Image from "next/image";
import { FiAirplay } from "react-icons/fi";

const WelcomeSection = () => {
    return (
        <section id="intro" className="flex items-center justify-between px-72 w-full h-custom">
            <div id="welcome" className="flex flex-col ml-3">
                {/* <span className="p-1 bg-green_400 rounded-md">Full Stack Developer</span> */}
                <span className="text-white text-base">Hi, I’m Bruno Dias 👋🏻</span>
                <span className="text-7xl text-white font-black mt-3"><span className=" text-green_400">Full</span> Stack</span>
                <span className="text-7xl text-white font-black ">Developer</span>
                <span className="text-sm text-text_gray_100 mt-4 leading-7">I am a developer based in Brazil, fascinated by technology, who enjoys developing websites and web applications.</span>
                <div id="buttons" className="">
                    <button className="bg-green_400 rounded-md px-5 py-2 mt-5 text-black font-bold">Download cv</button>
                    <button className="border	 rounded-md px-5 py-2 mt-5 text-white font-bold ml-5">Contact</button>
                </div>
                <FiAirplay />
            </div>
            <Image src={FotoBruno} height={750} width={750} alt="Logo Bruno Dias" className=" pl-10" />
        </section>
    )
};
export default WelcomeSection;