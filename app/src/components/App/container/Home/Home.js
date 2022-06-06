import Footer from '../../../Design/Footer/Footer';
import { HomeRoutes } from '../../../../core/routing';
import './Home.scss';
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import useTitle from "../../../../core/hooks/useTitle";
import { IoIosArrowDown } from 'react-icons/io';

const Home = () => {
    const { t } = useTranslation();
    useTitle(t("home.title"));

    return (
        <>
            <header id="up" className="bg-center bg-no-repeat bg-cover h-screen relative">
                <div className="h-screen bg-opacity-50 bg-black flex items-center justify-center flex-col">
                    <div className="mx-2 text-center">
                        <p className="text-gray-200 mb-4 text-3xl leading-tight">
                            {t('home.realtor')}
                        </p>
                        <div className="flex w-4/12 m-auto">
                            <img src={images.logowhite} alt="logo" />
                        </div>
                        {/* <div className="backdrop-blur-xl bg-white/30 border-transparent rounded-lg p-12 w-8/12 mt-24 mx-auto">
                            <div className="lg:flex">
                                <div className="relative z-0 w-full mr-6 mb-4 lg:mb-0">
                                    <select defaultValue={'Buy'} className="form-select
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
                                            <option value="buy">Buy</option>
                                            <option value="rent">Rent</option>
                                    </select>
                                </div>
                                <div className="relative z-0 w-full mr-6 mb-4 lg:mb-0">
                                    <input type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-white" placeholder="City" required />
                                </div>
                                <div className="relative z-0 w-full mr-6 mb-4 lg:mb-0">
                                    <select defaultValue={'House'} className="form-select
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
                                            <option value="buy">House</option>
                                            <option value="rent">Appartement</option>
                                            <option value="vila">Villa</option>
                                            <option value="flat">Flat</option>
                                            <option value="office">Office</option>
                                            <option value="shop">Shop</option>
                                            <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="relative z-0 w-full mr-6 mb-4 lg:mb-0">
                                    <input type="number" name="type" id="type" className="appearance-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-white" placeholder="Min. Price" required />
                                </div>
                                <div className="relative z-0 w-full mr-6 mb-10 lg:mb-0">
                                    <input type="number" name="type" id="type" className="appearance-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-white" placeholder="Max. Price" required />
                                </div>
                                <button type="button" className="text-white hover:text-white border border-white hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Search</button>
                            </div>
                        </div> */}
                        <div className="absolute mt-36 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                            <div className="bounce">
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
                            <h1 className="text-xl tracking-wide text-white text-gray-800 lg:text-3xl lg:text-4xl">{t('home.buy')}</h1>
                            <p className="mt-4 text-gray-600">{t('home.lorem')}</p>
                            <div className="mt-6">
                                <Link to={HomeRoutes.Buy} className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-gray-600 rounded-md hover:bg-gray-500">{t('buttons.seemore')}</Link>
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
                <span className="flex-shrink mx-4 text-gray-400">{t('home.or')}</span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            
            <div className="bg-gray-200">
                <div className="container px-12 py-4 mx-auto lg:flex lg:h-128 lg:py-32 ">
                    <div className="flex items-center justify-center w-full mt-3 lg:h-96 lg:w-1/2">
                        <img src={images.house} alt="house" />
                    </div>
                    <div className="flex flex-col items-center w-full md:ml-20 lg:flex-row lg:w-1/2">
                        <div className="max-w-lg">
                            <h1 className="text-xl tracking-wide text-white text-gray-800 lg:text-3xl lg:text-4xl">{t('home.rent')}</h1>
                            <p className="mt-4 text-gray-600">{t('home.lorem')}</p>
                            <div className="mt-6">
                                <Link to={HomeRoutes.Rent} className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-gray-600 rounded-md hover:bg-gray-500">{t('buttons.seemore')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home;