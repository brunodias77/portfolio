import Image from "next/image";
import Projeto1 from "../../public/projeto1.png";
import { FaLink } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";


const CardProjects = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg px-6 py-4">
            <Image src={Projeto1} alt="Projeto1" className="rounded-2xl" height={400} width={400} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">Let Me Ask</div>
                <p className="text-text_gray_100 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="flex items-center justify-between text-sm ">
                <a href="" className="flex items-center justify-center"><FaLink color="#64F4AC" />Live Preview</a>
                <a href="" className="flex items-center justify-center"><AiFillGithub />View Code</a>
            </div>
        </div>
    )
};
export default CardProjects;