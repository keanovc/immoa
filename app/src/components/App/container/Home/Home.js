import { Navbar } from '../../../Design/Navbar/Navbar';
import Footer from '../../../Design/Footer/Footer';
import Signup from '../Signup/Signup';
import './Home.scss';
import images from '../../constants/images';

import { IoIosArrowDown } from 'react-icons/io';

export default function Home() {
    return (
        <>
            <Navbar />

            <header id="up" className="bg-center bg-no-repeat bg-center bg-cover h-screen relative">
                <div className="h-screen bg-opacity-50 bg-black flex items-center justify-center">
                    <div className="mx-2 text-center">
                        <p className="text-gray-200 mb-4 text-3xl leading-tight">
                            REAL ESTATE AGENT
                        </p>
                        <div className="flex w-4/12 m-auto">
                            <img src={images.logowhite} alt="logo" />
                        </div>
                        <div className="backdrop-blur-xl bg-white/30 border-transparent rounded-lg p-12 w-8/12 mt-24 mx-auto">
                            <div className="flex justify-between">
                                <div class="relative z-0 w-full mr-6">
                                    <select class="form-select
                                        block
                                        w-full
                                        py-2.5
                                        text-base
                                        font-normal
                                        text-white
                                        bg-transparent bg-clip-padding bg-no-repeat
                                        border-b-2 border-solid border-white
                                        transition
                                        ease-in-out
                                        focus:text-gray-800 focus:border-gray-800 focus:outline-none" aria-label="Default select example">
                                            <option selected value="buy">Buy</option>
                                            <option value="rent">Rent</option>
                                    </select>
                                </div>
                                <div class="relative z-0 w-full mr-6">
                                    <input type="text" name="city" id="city" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-white" placeholder="City" required />
                                </div>
                                <div class="relative z-0 w-full mr-6">
                                    <select class="form-select
                                        block
                                        w-full
                                        py-2.5
                                        text-base
                                        font-normal
                                        text-white
                                        bg-transparent bg-clip-padding bg-no-repeat
                                        border-b-2 border-solid border-white
                                        transition
                                        ease-in-out
                                        focus:text-gray-800 focus:border-gray-800 focus:outline-none" aria-label="Default select example">
                                            <option selected value="buy">House</option>
                                            <option value="rent">Appartement</option>
                                            <option value="vila">Villa</option>
                                            <option value="flat">Flat</option>
                                            <option value="office">Office</option>
                                            <option value="shop">Shop</option>
                                            <option value="other">Other</option>
                                    </select>
                                </div>
                                <div class="relative z-0 w-full mr-6">
                                    <input type="number" name="type" id="type" class="appearance-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-white" placeholder="Min. Price" required />
                                </div>
                                <div class="relative z-0 w-full mr-6">
                                    <input type="number" name="type" id="type" class="appearance-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-white" placeholder="Max. Price" required />
                                </div>
                                <button type="button" className="text-white hover:text-white border border-white hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Search</button>
                            </div>
                        </div>
                        <div className="absolute mt-36 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                            <div class="bounce">
                                <a href="#buy"><IoIosArrowDown className='text-white text-6xl'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div id='buy' className="bg-gray-200">
                <div className="container px-12 py-4 mx-auto lg:flex lg:h-128 lg:py-32 ">
                    <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div className="max-w-lg">
                            <h1 className="text-xl tracking-wide text-white text-gray-800 lg:text-3xl lg:text-4xl">Buy A House</h1>
                            <p className="mt-4 text-gray-300 text-gray-600">Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae
                                laudantium quod rem voluptatem eos accusantium cumque.</p>
                            <div className="mt-6">
                                <a href="#" className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-gray-600 rounded-md hover:bg-gray-500">Sales Houses</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full mt-3 lg:h-96 lg:w-1/2">
                        <img src={images.house4} alt="house" />
                    </div>
                </div>
            </div>

            <div className="relative flex py-5 items-center bg-gray-200">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400">OR</span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            
            <div className="bg-gray-200">
                <div className="container px-12 py-4 mx-auto lg:flex lg:h-128 lg:py-32 ">
                    <div className="flex items-center justify-center w-full mt-3 lg:h-96 lg:w-1/2">
                        <img src={images.house} alt="house" />
                    </div>
                    <div className="flex flex-col items-center w-full ml-20 lg:flex-row lg:w-1/2">
                        <div className="max-w-lg">
                            <h1 className="text-xl tracking-wide text-white text-gray-800 lg:text-3xl lg:text-4xl">Rent A House</h1>
                            <p className="mt-4 text-gray-300 text-gray-600">Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae
                                laudantium quod rem voluptatem eos accusantium cumque.</p>
                            <div className="mt-6">
                                <a href="#" className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-gray-600 rounded-md hover:bg-gray-500">Rental Houses</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='contact' className="bg-gray-600">
                <div className="px-12 py-12 flex justify-center">
                    <form class="w-full max-w-lg">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jane" />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-password">
                                    E-mail
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="" />
                                <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-password">
                                    Message
                                </label>
                                <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                                <p class="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
                            </div>
                        </div>
                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3">
                                <button class="shadow bg-gray-800 hover:bg-gray-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    Send
                                </button>
                            </div>
                            <div class="md:w-2/3"></div>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}
