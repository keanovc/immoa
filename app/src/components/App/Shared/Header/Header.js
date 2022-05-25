import { useState } from "react";
import { useAuthContext } from "../../Auth/AuthProvider";
import { AuthRoutes, HomeRoutes, ProfileRoutes, AdminRoutes } from "../../../../core/routing";
import Navbar from "../../../Design/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillHeart } from 'react-icons/ai';
import { isAdmin } from "../../../../core/modules/users/utils";

const Header = () => {
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

    let AdminItems = [
        {
            href: AdminRoutes.Users,
            isActive: location.pathname.includes(AdminRoutes.Users),
            label: t("nav.admin.users"),
        },
        {
            href: AdminRoutes.Properties,
            isActive: location.pathname.includes(AdminRoutes.Properties),
            label: t("nav.admin.properties"),
        },
    ];

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        auth ? (isAdmin(auth.user)) ?
        <Navbar navItems={AdminItems} dashboard={AdminRoutes.Index}>
        {
            <>
                <button onClick={logout} className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex dark:bg-gray-600 dark:hover:bg-gray-700'>{t('buttons.signout')}</button>
            </>
        }
        </Navbar> : 
        <Navbar navItems={NavItems} dashboard={HomeRoutes.Index}>
        {
            <>
                <button onClick={handleToggle} id="dropdownDefault" data-dropdown-toggle="dropdown" className="flex justify-center items-center outline-none space-x-3 cursor-pointer bg-transparent px-5 py-2 rounded-md" type="button">
                    <div class="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                        <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" alt="" class="w-full h-full object-cover" />
                    </div>
                    <div class="font-semibold dark:text-white text-gray-900 text-lg">
                        <div class="cursor-pointer">{ auth.user.name + ' ' + auth.user.surname }</div>
                    </div>    
                </button>
                <div id="dropdown" class={`absolute w-44 px-5 py-3 backdrop-blur-md bg-white/30 bg-white rounded-lg shadow border dark:border-transparent top-20 z-10 ${toggle ? '' : 'hidden'}`}>
                    <hr class="dark:border-white" />
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li class="font-medium mt-3">
                            <Link to={ProfileRoutes.Favorites} class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                                <div class="mr-3">
                                    <svg class="w- h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><AiFillHeart className="text-2xl"/></svg>
                                </div>
                                Favorites
                            </Link>
                        </li>
                        <li class="font-medium mt-3">
                            <Link to={ProfileRoutes.Edit} className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                                <div class="mr-3">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                Settings
                            </Link>
                        </li>
                        <hr class="dark:border-gray-500 mt-3" />
                        <li class="font-medium mt-3">
                            <button onClick={logout} className="w-full flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600">
                                <div class="mr-3 text-red-600">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
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

export default Header
