"use client"
import FotoBruno from "../../../../public/fotoHome.svg"
import Image from "next/image";
import { FiAirplay } from "react-icons/fi";

const WelcomeSection = () => {
    return (
        <section id="intro" className="flex container items-center justify-center md:justify-between gap-10 mx-auto px-7 flex-col md:flex-row text-center h-screen pb-20">
            <div id="welcome" className="flex flex-col ml-3">
                <span className="text-white text-base">Hi, I’m Bruno Dias 👋🏻</span>
                <span className="text-7xl text-white font-black mt-3"><span className=" text-green_400">Full</span> Stack</span>
                <span className="text-7xl text-white font-black ">Developer</span>
                <span className="text-sm text-text_gray_100 mt-4 leading-7">I am a developer based in Brazil, fascinated by technology, who enjoys developing websites and web applications.</span>
                <div id="buttons" className="">
                    <a href="FotoBruno.svg" download>
                        <button className="bg-green_400 hover:brightness-75	rounded-md px-5 py-2 mt-5 text-black ">Download cv</button>
                    </a>
                    <button className="border	 rounded-md px-5 py-2 mt-5 text-white ml-5">Contact</button>
                </div>
            </div>
            <Image src={FotoBruno} height={400} width={400} alt="Logo Bruno Dias" className="md:w-1/3" />
        </section>
    )
};
export default WelcomeSection;