import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";


const Contact = () => {
    return (
        <section id="contact" className=''>
            {/* <h2 className="text-3xl text-center text-white font-black">Contact</h2>
            <hr className="w-6 h-1 mx-auto my-4 bg-green_400 border-0 rounded"></hr> */}
            <div className="container mx-auto grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative items-center">
                <div className="z-10 text-xl">
                    <h5 className="text-xl font-extrabold text-white my-2">Let's Connect</h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">
                        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className="mt-8">
                        <h2 className="text-xl font-extrabold text-white">Email</h2>
                        <ul className="mt-3">
                            <li className="flex items-center">
                                <div className="bg-background_primary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#64F4AC'
                                        viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000" />
                                    </svg>
                                </div>
                                <a target="blank" href="#" className="text-[#FFF] text-sm ml-3">
                                    <small className="block">Mail</small>
                                    <strong>brunohenriqueadias@gmail.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="mt-8">
                        <h2 className="text-lg font-extrabold text-white">Social Media</h2>
                        <ul className="mt-3 flex items-center gap-5">
                            <li className='bg-background_primary h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                                <a href=""><AiOutlineTwitter size={20} color="#64F4AC" /></a>
                            </li>
                            <li className='bg-background_primary h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                                <a href="https://github.com/brunodias77" className="flex items-center justify-center hover:text-green_400"><AiFillGithub size={20} color="#64F4AC" /></a>
                            </li>
                            <li className='bg-background_primary h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                                <a href="" className="flex items-center justify-center"><AiFillLinkedin size={20} color="#64F4AC" /> </a>
                            </li>
                            <li className='bg-background_primary h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                                <a href="https://www.instagram.com/brunodias_dev/" className="flex items-center justify-center"><AiFillInstagram size={20} color="#64F4AC" className="color-black" /></a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div>
                    <form className="flex flex-col">
                        <div className="mb-6">
                            <label htmlFor="email" className="text-green_400 block mb-2 text-sm font-medium">Your email</label>
                            <input type="email" id="email" required className="bg-background_primary border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="example@gmail.com" name="email" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="text-green_400 block text-sm mb-2 font-medium">Subject</label>
                            <input type="text" id="subject" required className="bg-background_primary border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Just saying hi" name="subject" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="text-green_400 block text-sm mb-2 font-medium">Message</label>
                            <textarea name="message" id="message" className="bg-background_primary border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Let's talk about..."></textarea>
                        </div>
                        <button type="submit" className="bg-green_400 text-background_primary hover:bg-primary-600 font-medium py-2.5 px-5 rounded-lg w-full">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;