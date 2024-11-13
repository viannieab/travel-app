"use client"
import Image from 'next/image'
import Button from './Button'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa6"

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <div className="flex flex-1 items-center justify-center lg:justify-start">
                            <Image src="/logo.png" alt="logo" width={150} height={150}/>
                        </div>
                        <ul className="flex items-center space-x-3 mt-9 justify-center lg:justify-start">
                            <li>
                                <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-green-90 rounded-full w-7 h-7 hover:bg-green-50 focus:bg-green-50">
                                    <FaFacebookF className="w-4 h-4"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-green-90 rounded-full w-7 h-7 hover:bg-green-50 focus:bg-green-50">
                                    <FaLinkedinIn className="w-4 h-4"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-green-90 rounded-full w-7 h-7 hover:bg-green-50 focus:bg-green-50">
                                    <FaInstagram className="w-4 h-4"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-green-90 rounded-full w-7 h-7 hover:bg-green-50 focus:bg-green-50">
                                    <FaTiktok className="w-4 h-4"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Top Experiences</p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Gorilla Trekking</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Group Safaris</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Chimpanzee Trekking</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Family Holidays</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Honeymoons</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Mountain Hiking</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Luxury Safaris</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Budget Safaris</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Community Tours</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Explore Site</p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Destinations</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Experiences</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Travel Blog</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Information</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Accommodation</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Car Hire</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Activities</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Attractions</a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-green-50 focus:text-green-50">Campsites</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>
                        <form action="#" method="POST" className="mt-6">
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-lime-600 caret-lime-600" />
                            </div>
                            <div className="flex w-full gap-3 sm:flex-row flex-col py-3">
                                <Button type="button" title="Subscribe" variant="btn_green"/>
                            </div>
                        </form>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200"/>
                <div className="regular-18 text-center text-white">
                    <p>{`© ${year}. All Rights Reserved.`}</p>
                </div>
            </div>
        </section>
    );
}
export default Footer;