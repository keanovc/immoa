import { formatPrice } from '../../../core/modules/users/utils';
import { HomeRoutes } from '../../../core/routing';
import { Link } from 'react-router-dom';
import { route } from '../../../core/routing';
import { getImagePath } from '../../../core/helpers/api';
import PropTypes from "prop-types";
import images from '../../App/constants/images';

const Card = ({ property, auth }) => {
    return (
            <div className="p-4 mx-auto w-10/12 md:w-11/12">
                <Link to={route(HomeRoutes.Detail, { id: property.id, })}>
                    <div className="bg-white shadow-xl rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
                        <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${getImagePath(property.image)})` }}>
                            {
                                property.sold === "yes" ? (
                                    <p className='absolute inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none'>Sold</p>
                                ) : (
                                    <p className='absolute inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-green-500 text-sm font-medium text-white select-none'>Available</p>
                                )
                            }
                        </div>
                        <div className="p-4">
                            <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{property.type} • {property.year}</p>
                            {
                                property.bor === "buy" ? (
                                    <p className="text-3xl text-gray-900">{formatPrice(property.price)}</p>
                                ) : (
                                    <p className="text-3xl text-gray-900">{formatPrice(property.price)} / month</p>
                                )
                            }
                            <p className="text-gray-700">{
                                auth ? (
                                    property.address + ', '
                                ) : ( null )
                            }{property.zipCode} {property.city}</p>
                        </div>
                        <div className="flex p-4 border-t border-gray-300 text-gray-700">
                            <div className="flex-1 inline-flex items-center">
                                <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                                </svg>
                                <p><span className="text-gray-900 font-bold">{property.rooms}</span> Bedrooms</p>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                                <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"></path>
                                </svg>
                                <p><span className="text-gray-900 font-bold">{property.bathrooms}</span> Bathrooms</p>
                            </div>
                        </div>
                        {
                            auth ?
                            <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                                <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">Agency</div>
                                <div className="flex items-center pt-5">
                                    <div className="mr-5">
                                        <img className='w-12 h-12 rounded-full shadow-lg mx-auto object-cover' src={images.building} alt="agency" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{property.agency.name}</p>
                                        <p className="text-sm text-gray-700">{property.agency.phone}</p>
                                    </div>
                                </div>
                            </div> : null
                        }
                    </div>
                </Link>
            </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

export default Card;