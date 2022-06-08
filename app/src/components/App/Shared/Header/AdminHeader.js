import { useAuthContext } from "../../Auth/AuthProvider";
import { AdminRoutes, HomeRoutes } from "../../../../core/routing";
import Navbar from "../../../Design/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { useState } from "react";

const AdminHeader = () => {
    const location = useLocation();
    const { logout } = useAuthContext();
    const { t } = useTranslation();
    const [toggle, setToggle] = useState(false);

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
        {
            href: AdminRoutes.Agencies,
            isActive: location.pathname.includes(AdminRoutes.Agencies),
            label: t("nav.admin.agencies"),
        },
    ];
    
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <Navbar color={'bg-gray-800'} navItems={AdminItems} dashboard={AdminRoutes.Index} handleToggle={handleToggle} toggle={toggle}>
        {
            <>
                <div className="hidden md:block">
                    <Link to={HomeRoutes.Index}><button className='text-white bg-gray-600 hover:bg-gray-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex'>Immoa Site</button></Link>
                    <button onClick={logout} className='text-white ml-5 bg-gray-600 hover:bg-gray-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex'>{t('buttons.signout')}</button>
                </div>
                <div className="md:hidden flex items-center">
                    <Link to={HomeRoutes.Index}><button className='text-white focus:outline-none font-medium rounded-lg px-3 py-2.5 text-center inline-flex'><CgWebsite className="text-2xl"/></button></Link>
                    <button onClick={logout} className='text-white focus:outline-none font-medium rounded-lg px-3 py-2.5 text-center inline-flex'><FiLogOut className="text-xl"/></button>
                </div>
            </>
        }
        </Navbar>
    );  
}

export default AdminHeader