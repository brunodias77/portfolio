import Image from "next/image";
import Projeto1 from "../../public/projeto1.png";
import { FaLink } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";


const CardProjects = () => {
    return (
        <div className="bg-white lg:py-6 flex justify-center box-border">
            <div className="lg:w-1/2">
                <div className="lg:scale-110 bg-cover lg:h-full lg:w-full rounded-b-none border lg:rounded-lg"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')" }}>
                </div>
            </div>
            <div className=" lg:w-1/2 overflow-hidden">
                <h2 className="text-2xl text-gray-800 font-bold">
                    BDStore
                </h2>
                <p className="mt-2 text-gray-600">
                    E-commerce
                </p>
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