"use client"
import FotoBruno from "../../../../public/fotoHome.svg"
import Image from "next/image";
import { FiAirplay } from "react-icons/fi";

const WelcomeSection = () => {
    return (
        <section id="intro" className="flex container flex-col h-screen mx-auto text-center px-7 gap-32 ">
            <div className="flex flex-row items-center justify-center gap-32">
                <div id="welcome" className="flex flex-col ml-3 ">
                    <span className="text-white text-base">Hi, I’m Bruno Dias 👋🏻</span>
                    <span className="text-7xl text-white font-black mt-3"><span className=" text-green_400">Full</span> Stack</span>
                    <span className="text-7xl text-white font-black ">Developer</span>
                    <span className="text-sm text-text_gray_100 mt-4 leading-7">I am a developer based in Brazil, fascinated by technology, who enjoys developing websites and web applications.</span>
                    <div id="buttons" className="">
                        <a href="FotoBruno.svg" download>
                            <button className="bg-green_400 hover:brightness-75	rounded-md px-5 py-2 mt-5 text-black ">Download cv</button>
                        </a>
                        <button className="border rounded-md px-5 py-2 mt-5 text-white ml-5">Contact</button>
                    </div>
                </div>
                <Image src={FotoBruno} height={400} width={400} alt="Logo Bruno Dias" className="" />
            </div>
            <div className="flex flex-row items-center text-center justify-center ">
                <a>
                    <svg stroke="currentColor" fill="#64F4AC" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="animate-bounce" height="35" width="35" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </section>
    )
};
export default WelcomeSection;