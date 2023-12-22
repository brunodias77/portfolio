"use client"
import FotoBruno from "../../../../public/FotoBruno.svg"
import Image from "next/image";

const WelcomeSection = () => {
    return (
        <section id="intro" className="flex items-center justify-between px-96 w-full h-custom">
            <div id="welcome" className="flex flex-col ml-3">
                {/* <span className="p-1 bg-green_400 rounded-md">Full Stack Developer</span> */}
                <span className="text-white">Hi, I’m Bruno Dias 👋🏻</span>
                <span className="text-6xl text-white font-black mt-3"><span className=" text-green_400">Full</span> Stack</span>
                <span className="text-6xl text-white font-black ">Developer</span>
                <div id="buttons" className="">
                    <button className="bg-green_400 rounded-md px-5 py-2 mt-5 text-black font-bold">Download cv</button>
                    <button className="border	 rounded-md px-5 py-2 mt-5 text-white font-bold ml-5">Contact</button>
                </div>
            </div>
            <Image src={FotoBruno} height={700} width={700} alt="Logo Bruno Dias" className=" pl-10" />
        </section>
    )
};
export default WelcomeSection;