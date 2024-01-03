import Image from "next/image";


const AboutSection = () => {
    return (
        <section className="bg-background_primary mx-auto">
            <div>
                {/* <Image /> */}
                <div>
                    <h2>About Me</h2>
                    <p>
                        Hello! I'm Bruno Dias, a 28-year-old professional with a degree in Information Systems from UNIVEM - Eurípides de Marília University.
                        I'm passionate about crafting engaging and functional web experiences. On the Front-End, I leverage React to build interactive interfaces, while on the Back-End, my expertise lies in C#, developing robust and efficient systems. I believe in the transformative power of technology to turn ideas into reality and am constantly seeking challenges to propel my professional growth. Committed to exceeding expectations and delivering high-quality solutions,
                        I'm eager to explore new opportunities and engaging collaborations. Let's build something amazing together!
                    </p>
                </div>
            </div>
        </section>
    );
}
export default AboutSection;