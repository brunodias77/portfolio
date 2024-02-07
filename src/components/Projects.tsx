import CardProjects from "./CardProjects";
import Image from "next/image";
import Projeto1 from "../../public/projeto1.png";

const Projects = () => {
    return (
        <div className=" bg-background_primary px-4 py-10">
            <div className="container mx-auto flex flex-col items-center justify-center ">
                <div>
                    <h2 className="text-3xl text-center text-white font-black">Projects</h2>
                    <hr className="w-6 h-1 mx-auto my-4 bg-green_400 border-0 rounded"></hr>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-cols-auto grid-flow-dense">
                    <CardProjects />
                    <CardProjects />
                </div>

            </div>
        </div>
    );
}
export default Projects;