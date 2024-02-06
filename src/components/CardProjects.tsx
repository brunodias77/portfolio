import Image from "next/image";
import Projeto1 from "../../public/projeto1.png";
import { FaLink } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";


const CardProjects = () => {
    return (
        <div className="bg-white group cursor-pointer hover:scale-105 rounded-xl space-y-4 text-center p-3 transition hover:p-3 hover:shadow">
            {/* Images and Actions */}
            <div className="aspect-square rounded-t-md bg-gray-100 relative ">
                <Image
                    src={Projeto1}
                    alt="Image"
                    className="aspect-square object-cover rounded-t-md"
                    height={300} width={300}
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 ">
                    <div className="flex gap-x-6 justify-center">
                    </div>
                </div>
            </div>
            {/* Description */}
            <div>
                <p className="text-sm text-gray_300">
                    Let me ask
                </p>
            </div>
            {/* Price */}
            <div className="flex items-center justify-center">
                {/* <Currency value={data?.price} /> */}
            </div>
        </div>
        // <div
        //     className="block lg:h-1/2 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        //     <a href="#!">
        //         <img
        //             className="rounded-t-lg"
        //             src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
        //             alt="" />
        //     </a>
        //     <div className="p-6">
        //         <h5
        //             className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        //             Card title
        //         </h5>
        //         <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        //             Some quick example text to build on the card title and make up the
        //             bulk of the card's content.
        //         </p>
        //         <button
        //             type="button"
        //             className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        //             data-te-ripple-init
        //             data-te-ripple-color="light">
        //             Button
        //         </button>
        //     </div>
        // </div>
    )
};
export default CardProjects;