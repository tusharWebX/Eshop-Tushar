import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';


const FotterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];
function Footer() {
    return (
        <div className='dark:bg-gray-950'>
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    {/* Company Details  */}
                    <div className="py-8 px-4">
                        <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>
                        <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, modi! Eligendi quisquam saepe fugiat cumque a.</p>

                        <p className='text-gray-500 mt-4 '>Made With 💖 by The Coding Journey</p>
                        <a href="#" className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full">Visit Our YouTube Channel</a>
                    </div>
                    {/* Fotter Links  */}
                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                        <div className="py-8 px-4">
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FotterLinks.map(
                                        (data, index) => (
                                            <li key={index}>
                                                <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>{data.title}</a>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                        {/* Second Col links  */}
                        <div className="py-8 px-4">
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FotterLinks.map(
                                        (data, index) => (
                                            <li key={index}>
                                                <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>{data.title}</a>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                        {/* Company Address  */}
                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                            <div className="">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Noida , Uttar Pradesh</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <FaMobileAlt />
                                    <p>+91 1234567890</p>
                                </div>

                                {/* social links  */}
                                <div className="flex items-center gap-3 mt-6">
                                    <a href="#" className=''>
                                         <FaInstagram className='text-3xl hover:text-primary duration-300' />
                                    </a>
                                    <a href="#" className=''>
                                         <FaFacebook className='text-3xl hover:text-brandBlue duration-300' />
                                    </a>
                                    <a href="#" className=''>
                                         <FaLinkedin className='text-3xl hover:text-brandBlue duration-300' />
                                    </a>
                                   
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
