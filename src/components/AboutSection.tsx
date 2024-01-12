import Image from "next/image";
import FotoAbout from "../../public/aboutFoto.svg";


const AboutSection = () => {
    return (
        // <section className="bg-background_primary  text-white w-screen md:w-screen">
        //     <div className="container mx-auto px-7 py-2 flex items-center justify-between gap-10">
        //         <Image src={FotoAbout} height={200} width={200} alt="Ilustracao de um programdor" className="rounded-2xl" />
        //         <div className="text-center">
        //             <h2 className="font-black text-xl">About Me</h2>
        //             <p className="text-text_gray_100 mt-4">
        //                 Hello! I'm Bruno Dias, a 28-year-old technology enthusiast, graduated in Information Systems from UNIVEM - Centro Universitário Eurípides de Marília. My passion is creating engaging and functional web experiences. In the Front-End world, I use the powerful ReactJS to develop interactive interfaces, while in the Back-End, I use the entire C#/.net ecosystem. I believe in the transformative impact of technology to bring ideas to fruition, and I am always looking for challenges to boost my professional growth. Let's build something incredible together!
        //             </p>
        //         </div>
        //     </div>
        // </section>
        <section className="bg-background_primary text-white w-screen md:w-screen px-4 py-10">
            <div className="container mx-auto  flex items-center justify-around gap-6">
                <Image src={FotoAbout} height={300} width={300} alt="Ilustracao de um programador" className="rounded-2xl" />
                <div className="md:w-2/5">
                    <h2 className="text-center font-black text-3xl">About Me</h2>
                    <p className="text-text_gray_100 mt-2 text-sm text-initial">
                        Hello! I'm Bruno Dias, a 28-year-old technology enthusiast, graduated in Information Systems from UNIVEM - Centro Universitário Eurípides de Marília. My passion is creating engaging and functional web experiences. In the Front-End world, I use the powerful ReactJS to develop interactive interfaces, while in the Back-End, I use the entire C#/.NET ecosystem. I believe in the transformative impact of technology to bring ideas to fruition, and I am always looking for challenges to boost my professional growth. Let's build something incredible together!
                    </p>
                </div>
            </div>
        </section>

    );
}
export default AboutSection;


//crie um personagem pixar masculino de 25 anos, pele branca,olhos escuros, cabelo preto raspado do lado, barba curta, oculos, e um programador e esta usando um macbook