import LogoCasaSonho from "../../public/logoCasaSonho.svg";
import Image from "next/image";


const Experience = () => {
    return (
        <section className="w-screen bg-background_secondary px-4 py-10">
            <h2 className="text-3xl text-center text-white font-black">My Experience</h2>
            <hr className="w-6 h-1 mx-auto my-4 bg-green_400 border-0 rounded"></hr>
            <div className="container mx-auto flex flex-col items-center rounded py-4 px-8 mt-10 justify-center  ">
                <div className="flex items-center justify-between w-full ">
                    <div className="flex items-center justify-center gap-10">
                        <Image src={LogoCasaSonho} alt="Logo da empresa casa e sonho ltda" height={150} width={150} />
                        <span className="text-white font-bold text-xl	">junior front end programmer - Casa e Sonho</span>
                    </div>
                    <span className="text-green_400">Jan 2022 - Dec 2023</span>
                </div>
                <p className="text-text_gray_100 text-sm">As a junior front-end developer at Casa e Sonho, I played a vital role in web projects, collaboratively working in teams to develop innovative solutions. I applied knowledge in various programming languages, including HTML, CSS, and JavaScript, contributing to the entire lifecycle of projects. Additionally, I took on the responsibility of maintaining websites and applications, enhancing my problem-solving skills and ensuring the continuous functionality of systems. My experience not only solidified my technical skills but also developed my ability to work proactively in dynamic environments, preparing me for future challenges.</p>
            </div>
        </section>
    )
}
export default Experience;