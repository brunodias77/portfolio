import Image from "next/image";
import Projeto1 from "../../public/projeto1.png";
import { FaLink } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";


const CardProjects = () => {
    return (
        <div className="px-2 bg-yellow-300 py-20 w-full flex justify-center">
            <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div className="lg:w-1/2">
                    <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')" }}>
                    </div>
                </div>
                <div className="py-12 px-6 lg:w-1/2  rounded-t-none border lg:rounded-lg">
                    <h2 className="text-3xl text-gray-800 font-bold">
                        Promoting Sustainable Lifestyle Choices
                        <span className="text-green_400">Choices</span>
                    </h2>
                    <p className="mt-4 text-gray-600">
                        The "Eco-Tracker" project aims to create a web-based platform that encourages individuals to adopt
                        sustainable lifestyle choices and actively contribute to environmental conservation. The platform will
                        provide users with personalized tracking, education, and engagement features to empower them to make
                        eco-friendly decisions in various aspects of their lives.
                    </p>
                    <div className="mt-8">
                        <a href="#" className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Start Now</a>
                    </div>
                </div>
            </div>
        </div>
        // <div className="max-w-sm rounded overflow-hidden shadow-lg px-6 py-4">
        //     <Image src={Projeto1} alt="Projeto1" className="rounded-2xl" height={400} width={400} />
        //     <div className="px-6 py-4">
        //         <div className="font-bold text-xl mb-2 text-white">Let Me Ask</div>
        //         <p className="text-text_gray_100 text-sm">
        //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //         </p>
        //     </div>
        //     <div className="flex items-center justify-between text-sm ">
        //         <a href="" className="flex items-center justify-center"><FaLink color="#64F4AC" />Live Preview</a>
        //         <a href="" className="flex items-center justify-center"><AiFillGithub />View Code</a>
        //     </div>
        // </div>
    )
};
export default CardProjects;