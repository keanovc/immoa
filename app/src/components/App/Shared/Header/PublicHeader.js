import { useState } from "react";
import { useAuthContext } from "../../Auth/AuthProvider";
import { AuthRoutes, HomeRoutes, ProfileRoutes, AdminRoutes, AgencyRoutes, route } from "../../../../core/routing";
import Navbar from "../../../Design/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import { AiFillHeart } from 'react-icons/ai';
import { MdSpaceDashboard } from 'react-icons/md';
import { isAdmin, isRealtor } from "../../../../core/modules/users/utils";

const PublicHeader = () => {
    const location = useLocation();
    const { auth, logout } = useAuthContext();
    const { t } = useTranslation();
    const [toggle, setToggle] = useState(false);

    let NavItems = [
        {
            href: HomeRoutes.Buy,
            isActive: location.pathname.includes(HomeRoutes.Buy),
            label: t("nav.buy"),
        },
        {
            href: HomeRoutes.Rent,
            isActive: location.pathname.includes(HomeRoutes.Rent),
            label: t("nav.rent"),
        },
        {
            href: HomeRoutes.Contact,
            isActive: location.pathname.includes(HomeRoutes.Contact),
            label: t("nav.contact"),
        },
    ];

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        auth ? (isAdmin(auth.user)) ?        
            <>
            <Navbar navItems={NavItems} dashboard={HomeRoutes.Index}>
            {
                <>
                    <button onClick={handleToggle} id="dropdownDefault" data-dropdown-toggle="dropdown" className="flex justify-center items-center outline-none space-x-3 cursor-pointer bg-transparent px-5 py-2 rounded-md" type="button">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                            <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" alt="" className="w-full h-full object-cover" />
                        </div>    
                    </button>
                    <div id="dropdown" className={`absolute w-44 px-5 py-3 backdrop-blur-md bg-white/30 bg-white rounded-lg shadow border dark:border-transparent top-20 z-10 ${toggle ? '' : 'hidden'}`}>
                        <hr className="dark:border-white" />
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                            <li className="font-medium mt-3">
                                <Link to={AdminRoutes.Index} className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                                    <div className="mr-3">
                                        <svg className="w- h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><MdSpaceDashboard className="text-2xl"/></svg>
                                    </div>
                                    Dashboard
                                </Link>
                            </li>
                            <li className="font-medium mt-3">
                                <Link to={route(ProfileRoutes.Profile, { id: auth.user.id, })} className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                                    <div className="mr-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    Profile
                                </Link>
                            </li>
                            <hr className="dark:border-gray-500 mt-3" />
                            <li className="font-medium mt-3">
                                <button onClick={logout} className="w-full flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600">
                                    <div className="mr-3 text-red-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                    </div>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </>
            }
            </Navbar>
            </>
        : isRealtor(auth.user) ?
            <Navbar navItems={NavItems} dashboard={HomeRoutes.Index}>
            {
                <>
                    <button onClick={handleToggle} id="dropdownDefault" data-dropdown-toggle="dropdown" className="flex justify-center items-center outline-none space-x-3 cursor-pointer bg-transparent px-5 py-2 rounded-md" type="button">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                            <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" alt="" className="w-full h-full object-cover" />
                        </div>  
                    </button>
                    <div id="dropdown" className={`absolute w-44 px-5 py-3 backdrop-blur-md bg-white/30 bg-white rounded-lg shadow border dark:border-transparent top-20 z-10 ${toggle ? '' : 'hidden'}`}>
                        <hr className="dark:border-white" />
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                            <li className="font-medium mt-3">
                                <Link to={AgencyRoutes.Index} className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                                    <div className="mr-3">
                                        <svg className="w- h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><MdSpaceDashboard className="text-2xl"/></svg>
                                    </div>
                                    Dashboard
                                </Link>
                            </li>
                            <li className="font-medium mt-3">
                                <Link to={route(ProfileRoutes.Profile, { id: auth.user.id, })} className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                                    <div className="mr-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    Profile
                                </Link>
                            </li>
                            <hr className="dark:border-gray-500 mt-3" />
                            <li className="font-medium mt-3">
                                <button onClick={logout} className="w-full flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600">
                                    <div className="mr-3 text-red-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                    </div>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </>
            }
            </Navbar>
            : 
            <Navbar navItems={NavItems} dashboard={HomeRoutes.Index}>
            {
                <>
                    <button onClick={handleToggle} id="dropdownDefault" data-dropdown-toggle="dropdown" className="flex justify-center items-center outline-none space-x-3 cursor-pointer bg-transparent px-5 py-2 rounded-md" type="button">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                            <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" alt="" className="w-full h-full object-cover" />
                        </div>
                        {/* <div className="font-semibold dark:text-white text-gray-900 text-lg">
                            <div className="cursor-pointer">{ auth.user.name + ' ' + auth.user.surname }</div>
                        </div>     */}
                    </button>
                    <div id="dropdown" className={`absolute w-44 px-5 py-3 backdrop-blur-md bg-white/30 bg-white rounded-lg shadow border dark:border-transparent top-20 z-10 ${toggle ? '' : 'hidden'}`}>
                        <hr className="dark:border-white" />
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                            {/* <li className="font-medium mt-3">
                                <Link to={ProfileRoutes.Favorites} className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                                    <div className="mr-3">
                                        <svg className="w- h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><AiFillHeart className="text-2xl"/></svg>
                                    </div>
                                    Favorites
                                </Link>
                            </li> */}
                            <li className="font-medium mt-3">
                                <Link to={route(ProfileRoutes.Profile, { id: auth.user.id, })} className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                                    <div className="mr-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    Profile
                                </Link>
                            </li>
                            <hr className="dark:border-gray-500 mt-3" />
                            <li className="font-medium mt-3">
                                <button onClick={logout} className="w-full flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600">
                                    <div className="mr-3 text-red-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                    </div>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </>
            }
            </Navbar> : 
            <Navbar navItems={NavItems} dashboard={HomeRoutes.Index}>
            {
                <>
                    <Link to={AuthRoutes.Signup}><button type="button" className="text-white hover:text-white border border-white hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{t('buttons.signup')}</button></Link>
                    <Link to={AuthRoutes.Signin}><button type="button" className="text-gray-800 bg-white hover:text-white border border-white hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{t('buttons.signin')}</button></Link>
                </>
            }
            </Navbar>
    );  
}

export default PublicHeader