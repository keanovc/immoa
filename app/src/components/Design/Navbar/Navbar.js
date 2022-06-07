import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import images from '../../App/constants/images';


const Navbar = ({ navItems = [], children, dashboard, color = '' }) => {
    return (
        <nav className={`h-24 ${color} absolute inset-x-0 top-0 border-b flex flex-row justify-between z-10 text-white`}>
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to={dashboard} className="flex items-center w-32 md:order-2">
                    <img src={images.logowhite} alt="logo" />
                </Link>
                <div className="flex md:order-3">
                    {children}
                    <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        {navItems.map((navItem) => (
                            <li className="nav-item" key={navItem.href}>
                                <Link
                                    className={`block py-2 pr-4 pl-3 text-lg text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white ${
                                        navItem.isActive ? "active" : ""
                                    }`}
                                    to={navItem.href}>
                                    {navItem.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string,
            isActive: PropTypes.bool,
            label: PropTypes.string,
        })
    ).isRequired,
    children: PropTypes.node,
    dashboard: PropTypes.string,
    color: PropTypes.string,
};

export default Navbar;