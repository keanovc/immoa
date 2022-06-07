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
                            <h1 className="text-xl tracking-wide text-gray-800 lg:text-4xl">{t('home.buy')}</h1>
                            <p className="mt-4 text-gray-600">{t('home.buytext')}</p>
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
                            <h1 className="text-xl tracking-wide text-gray-800 lg:text-4xl">{t('home.rent')}</h1>
                            <p className="mt-4 text-gray-600">{t('home.renttext')}</p>
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