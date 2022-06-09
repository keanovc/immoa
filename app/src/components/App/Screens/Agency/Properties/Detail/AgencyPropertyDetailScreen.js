import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import { getImagePath } from "../../../../../../core/helpers/api";
import useTitle from "../../../../../../core/hooks/useTitle";
import { AgencyRoutes, route } from "../../../../../../core/routing";
import { formatPrice } from "../../../../../../core/modules/users/utils";

const AgencyPropertyDetailScreen = () => {
    const { t } = useTranslation();
    const { property } = useOutletContext();

    useTitle(property ? property.type : "");

    return (
        <>
            <div className="flex justify-center bg-gray-200 mt-36 mb-10">
                <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg w-10/12 lg:w-6/12 xl:w-3/12">
                    <div className="relative">
                        <img className="mb-3 w-full h-64 object-cover rounded-xl shadow-lg mx-auto" src={getImagePath(property.image)} alt="property"/>
                        {
                            property.sold === "yes" ?
                                <div className="badge absolute top-5 right-5 bg-red-500 m-1 text-gray-200 p-1 px-2 text-md font-bold rounded">{t("properties.sold")}</div>
                                :
                                <div className="badge absolute top-5 right-5 bg-green-500 m-1 text-gray-200 p-1 px-2 text-md font-bold rounded">{t("properties.available")}</div>
                        }
                    </div>
                    <div className="p-10">
                        <h1 className="text-lg text-gray-700 uppercase"> {property.type} </h1>
                        <h3 className="text-sm text-gray-400 uppercase"> {property.bor} </h3>
                        <hr className="border-gray-300 my-4"/>
                        <div className="p-5">
                            <p className="text-md text-gray-700 mt-4 text-left"><span className="text-gray-400 font-bold">{t("fields.zipcode")}:</span> {property.zipCode} </p>
                            <p className="text-md text-gray-700 mt-4 text-left"><span className="text-gray-400 font-bold">{t("fields.city")}:</span> {property.city} </p>
                            <p className="text-md text-gray-700 mt-4 text-left"><span className="text-gray-400 font-bold">{t("fields.address")}:</span> {property.address} </p>
                            <p className="text-md text-gray-700 mt-4 text-left"><span className="text-gray-400 font-bold">{t("fields.price")}:</span> {formatPrice(property.price)} </p>
                            <p className="text-md text-gray-700 mt-4 text-left"><span className="text-gray-400 font-bold">{t("fields.bedrooms")}:</span> {property.rooms} </p> 
                            <p className="text-md text-gray-700 mt-4 text-left"><span className="text-gray-400 font-bold">{t("fields.bathrooms")}:</span> {property.bathrooms} </p>
                            <p className="text-md text-gray-700 mt-4 text-left"><span className="text-gray-400 font-bold">{t("fields.area")}:</span> {property.area} m²</p>
                            <p className="text-md text-gray-700 mt-4 text-left"><span className="text-gray-400 font-bold">{t("fields.year")}:</span> {property.year} </p>
                            <p className="text-md text-gray-700 mt-4 text-left"><span className="text-gray-400 font-bold">{t("fields.description")}:</span> {property.description} </p>
                        </div>
                        <hr className="border-gray-300 my-4"/>
                        <div className="flex items-center justify-around">
                            <Link to={route(AgencyRoutes.Properties)}>
                                <div className="bg-gray-600 px-8 py-2 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide transition duration-300 hover:scale-105 ease-in-out hover:bg-gray-800">
                                    {t("buttons.back")}
                                </div>
                            </Link>
                            <Link to={route(AgencyRoutes.EditProperty, { id: property.id })}>
                                <div className="bg-indigo-600 px-8 py-2 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide transition duration-300 hover:scale-105 ease-in-out hover:bg-indigo-800">
                                    {t("buttons.edit")}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AgencyPropertyDetailScreen;