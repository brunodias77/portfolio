import Image from "next/image";
import FotoAbout from "../../public/aboutFoto.svg";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiDotnet, SiTailwindcss, SiCsharp, SiPrisma, SiJest, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const AboutSection = () => {
    return (


        <div className=" bg-background_primary ">
            <div className="container mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 items-stretch justify-center md:p-4 ">
                <h2 className=" font-black text-3xl text-center text-white">About Me</h2>
                <hr className="w-6 h-1 mx-auto my-4 bg-green_400 border-0 rounded"></hr>

                <div className="md:w-1/2">
                    <p className="text-text_gray_100 mt-2 text-base text-initial">
                        Hello! I'm Bruno Dias, a 28-year-old technology enthusiast, graduated in Information Systems from UNIVEM - Centro Universitário Eurípides de Marília. My passion is creating engaging and functional web experiences. In the Front-End world, I use the powerful ReactJS to develop interactive interfaces, while in the Back-End, I use the entire C#/.NET ecosystem. I believe in the transformative impact of technology to bring ideas to fruition, and I am always looking for challenges to boost my professional growth. Let's build something incredible together!
                    </p>
                </div>
                <div className="text-center md:w-1/2 ">
                    <h1 className="text-2xl font-bold mb-6 text-white">My Skills</h1>
                    <div className="flex flex-wrap flex-row gap-3 justify-center md:justify-start">
                        <IoLogoHtml5 size={40} color="#97979F" />
                        <IoLogoCss3 size={40} color="#97979F" />
                        <IoLogoJavascript size={40} color="#97979F" />
                        <IoLogoReact size={40} color="#97979F" />
                        <BsFillBootstrapFill size={40} color="#97979F" />
                        <SiTypescript size={40} color="#97979f" />
                        <SiCsharp size={40} color="#97979F" />
                        <SiDotnet size={40} color="#97979F" />
                        <IoLogoNodejs size={40} color="#97979F" />
                        <SiPrisma size={40} color="#97979F" />
                        <TbBrandNextjs size={40} color="#97979F" />
                        <SiTailwindcss size={40} color="#97979F" />
                        <SiJest size={40} color="#97979f" />
                        <SiJest size={40} color="#97979f" />
                        <SiJest size={40} color="#97979f" />
                    </div>
                    <Image src={FotoAbout} alt="Ilustracao de um programador" className="rounded-2xl justify-self-center w-1/2 lg:w-2/6 " />
                </div>
            </div>
        </div>


        // <section className="bg-background_primary text-white  px-4 py-14">
        //     <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
        //         <Image src={FotoAbout} alt="Ilustracao de um programador" className="rounded-2xl justify-self-center w-1/2 lg:w-2/6 " />
        //         <div className="">
        //             <h2 className=" font-black text-3xl text-center">About Me</h2>
        //             <hr className="w-6 h-1 mx-auto my-4 bg-green_400 border-0 rounded"></hr>
        //             <p className="text-text_gray_100 mt-2 text-base text-initial">
        //                 Hello! I'm Bruno Dias, a 28-year-old technology enthusiast, graduated in Information Systems from UNIVEM - Centro Universitário Eurípides de Marília. My passion is creating engaging and functional web experiences. In the Front-End world, I use the powerful ReactJS to develop interactive interfaces, while in the Back-End, I use the entire C#/.NET ecosystem. I believe in the transformative impact of technology to bring ideas to fruition, and I am always looking for challenges to boost my professional growth. Let's build something incredible together!
        //             </p>
        //         </div>
        //     </div>
        // </section>

    );
}
export default AboutSection;


//crie um personagem pixar masculino de 25 anos, pele branca,olhos escuros, cabelo preto raspado do lado, barba curta, oculos, e um programador e esta usando um macbook