import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import useTitle from "../../../../../../core/hooks/useTitle";
import { AdminRoutes, route } from "../../../../../../core/routing";
import images from "../../../../constants/images";

const AgencyDetailScreen = () => {
    const { t } = useTranslation();
    const { agency } = useOutletContext();

    useTitle(agency ? agency.name : "");

    return (
        <>
            <div className="flex justify-center bg-gray-200 mt-36 mb-10">
                <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 w-10/12 lg:w-6/12 xl:w-3/12">
                    <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto object-cover" src={images.building} alt="agency"/>
                    <h1 className="text-lg text-gray-700"> {agency.name} </h1>
                    <h3 className="text-sm text-gray-400 "> {agency.city} </h3>
                    <hr className="border-gray-300 my-4"/>
                    <div className="p-5">
                        <p className="text-md text-gray-700 mt-4 text-left"><span className="text-gray-400 font-bold">{t("fields.zipcode")}:</span> {agency.zipCode} </p>
                        <p className="text-md text-gray-700 mt-4 text-left"><span className="text-gray-400 font-bold">{t("fields.address")}:</span> {agency.address} </p>
                        <p className="text-md text-gray-700 mt-4 text-left"><span className="text-gray-400 font-bold">{t("fields.phone")}:</span> {agency.phone} </p>
                        <p className="text-md text-gray-700 mt-4 text-left"><span className="text-gray-400 font-bold">{t("fields.description")}:</span> {agency.description} </p>
                        <p className="text-md text-gray-400 mt-4 mb-4 text-left">{t("fields.properties")}:</p>
                            {
                                agency.properties.length === 0 ? (
                                    <p className="text-gray-700 text-left ml-5">{t("agencies.noproperties")}</p>
                                ) : (
                                    agency.properties.map((property, index) => (
                                        <>
                                            <Link to={route(AdminRoutes.DetailProperty, { id: property.id })} key={index}>
                                                <p className="text-left text-blue-700 ml-5">- {property.address} ({property.type})</p>
                                            </Link>
                                            <br />
                                        </>
                                    ))
                                )
                            }
                        <p className="text-md text-gray-400 mt-4 mb-4 text-left">{t("fields.realtors")}:</p>
                            {
                                agency.users.length === 0 ? (
                                    <p className="text-gray-700 text-left ml-5">{t("agencies.norealtors")}</p>
                                ) : (
                                    agency.users.map((user, index) => (
                                        <>
                                            <Link to={route(AdminRoutes.DetailUser, { id: user.id })} key={index}>
                                                <p className="text-left text-blue-700 ml-5">- {user.name} {user.surname}</p>
                                            </Link>
                                            <br />
                                        </>
                                    ))
                                )
                            }
                    </div>
                    <hr className="border-gray-300 mt-4 mb-8"/>
                    <div className="flex items-center justify-around">
                        <Link to={route(AdminRoutes.Agencies)}>
                            <div className="bg-gray-600 px-8 py-2 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide transition duration-300 hover:scale-105 ease-in-out hover:bg-gray-800">
                                {t("buttons.back")}
                            </div>
                        </Link>
                        <Link to={route(AdminRoutes.EditAgency, { id: agency.id })}>
                            <div className="bg-indigo-600 px-8 py-2 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide transition duration-300 hover:scale-105 ease-in-out hover:bg-indigo-800">
                                {t("buttons.edit")}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AgencyDetailScreen;