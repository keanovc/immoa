import { useAuthContext } from "../../Auth/AuthProvider";
import { AgencyRoutes, HomeRoutes } from "../../../../core/routing";
import Navbar from "../../../Design/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const AgencyHeader = () => {
    const location = useLocation();
    const { logout } = useAuthContext();
    const { t } = useTranslation();

    let AgencyItems = [
        {
            href: AgencyRoutes.Properties,
            isActive: location.pathname.includes(AgencyRoutes.Properties),
            label: t("nav.agency.properties"),
        },
    ];

    return (
        <Navbar color={'bg-gray-800'} navItems={AgencyItems} dashboard={AgencyRoutes.Index}>
        {
            <>
                <Link to={HomeRoutes.Index}><button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex dark:bg-gray-600 dark:hover:bg-gray-700'>Immoa Site</button></Link>
                <button onClick={logout} className='text-white ml-5 bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex dark:bg-gray-600 dark:hover:bg-gray-700'>{t('buttons.signout')}</button>
            </>
        }
        </Navbar>
    );  
}

export default AgencyHeader