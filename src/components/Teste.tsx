import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiDotnet, SiTailwindcss, SiCsharp, SiPrisma, SiJest, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";
import FotoAbout from "../../public/aboutFoto.svg";

const Teste = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl text-white">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-green_400 border-0 rounded" />
                </h1>
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left text-white">Get to know me!</h1>
                        <p className="text-text_gray_100 ">
                            Hello! I'm Bruno Dias, a 28-year-old technology enthusiast, graduated in Information Systems from UNIVEM - Centro Universitário Eurípides de Marília. My passion is creating engaging and functional web experiences. In the Front-End world, I use the powerful ReactJS to develop interactive interfaces, while in the Back-End, I use the entire C#/.NET ecosystem. I believe in the transformative impact of technology to bring ideas to fruition, and I am always looking for challenges to boost my professional growth. Let's build something incredible together!
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold mb-6 text-white">My Skills</h1>
                        <div className="flex flex-wrap gap-2 flex-row justify-center z-10 md:justify-start">
                            <IoLogoHtml5 size={45} color="#64F4AC" />
                            <IoLogoCss3 size={45} color="#64F4AC" />
                            <IoLogoJavascript size={45} color="#64F4AC" />
                            <IoLogoReact size={45} color="#64F4AC" />
                            <BsFillBootstrapFill size={45} color="#64F4AC" />
                            <SiTypescript size={45} color="#64F4AC" />
                            <SiCsharp size={45} color="#64F4AC" />
                            <SiDotnet size={45} color="#64F4AC" />
                            <IoLogoNodejs size={45} color="#64F4AC" />
                            <SiPrisma size={45} color="#64F4AC" />
                            <TbBrandNextjs size={45} color="#64F4AC" />
                            <SiTailwindcss size={45} color="#64F4AC" />
                            <SiJest size={45} color="#64F4AC" />
                        </div>
                        <Image src={FotoAbout} height={200} width={200} alt="Ilustracao de um programador" className="rounded-2xl mt-2" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Teste;