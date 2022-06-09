import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import images from '../../App/constants/images';


const Navbar = ({ navItems = [], children, dashboard, color = '', handleToggle, toggle }) => {
    return (
        <nav className={`h-24 ${color} absolute inset-x-0 top-0 border-b flex flex-row justify-between z-10 text-white`}>
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to={dashboard} className="flex items-center w-32 md:order-2 ml-10 md:ml-0">
                    <img src={images.logowhite} alt="logo" />
                </Link>
                <div className="flex md:order-3">
                    {children}
                    <button data-dropdown-toggle="mobile-menu-4" onClick={handleToggle} type="button" className="inline-flex items-center p-2 text-sm mr-5 text-white rounded-lg md:hidden">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className={`absolute top-24 md:top-0 md:relative w-full bg-gray-800 md:bg-transparent md:flex md:w-auto md:order-1 ${toggle ? 'block' : 'hidden'}`} id="mobile-menu-4">
                    <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        {navItems.map((navItem) => (
                            <li className="nav-item" key={navItem.href}>
                                <Link
                                    className={`block py-2 pr-4 pl-3 text-lg text-white border-b border-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-500 md:p-0 ${
                                        navItem.isActive ? 
                                        "font-bold" :
                                        ""
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
    handleToggle: PropTypes.func,
    toggle: PropTypes.bool,
};

export default Navbar;