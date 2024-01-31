import Image from "next/image";
import FotoAbout from "../../public/aboutFoto.svg";


const AboutSection = () => {
    return (
        <section className="bg-background_primary text-white w-screen md:w-screen px-4 py-14">
            <div className="container mx-auto grid grid-cols-2 gap-6 items-center justify-center">
                <Image src={FotoAbout} height={300} width={300} alt="Ilustracao de um programador" className="rounded-2xl justify-self-center" />
                <div className="">
                    <h2 className=" font-black text-3xl text-center">About Me</h2>
                    <hr className="w-6 h-1 mx-auto my-4 bg-green_400 border-0 rounded"></hr>
                    <p className="text-text_gray_100 mt-2 text-base text-initial">
                        Hello! I'm Bruno Dias, a 28-year-old technology enthusiast, graduated in Information Systems from UNIVEM - Centro Universitário Eurípides de Marília. My passion is creating engaging and functional web experiences. In the Front-End world, I use the powerful ReactJS to develop interactive interfaces, while in the Back-End, I use the entire C#/.NET ecosystem. I believe in the transformative impact of technology to bring ideas to fruition, and I am always looking for challenges to boost my professional growth. Let's build something incredible together!
                    </p>
                </div>
            </div>
        </section>

    );
}
export default AboutSection;


//crie um personagem pixar masculino de 25 anos, pele branca,olhos escuros, cabelo preto raspado do lado, barba curta, oculos, e um programador e esta usando um macbook