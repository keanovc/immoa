import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import useTitle from "../../../../../../core/hooks/useTitle";
import { AdminRoutes, route } from "../../../../../../core/routing";

const PropertyDetailScreen = () => {
    const { t } = useTranslation();
    const { property } = useOutletContext();

    useTitle(property ? property.type : "");

    return (
        <>
            <Link to={route(AdminRoutes.EditAgency, { id: property.id })}>
                {t("buttons.edit")}
            </Link>
            <div
            class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center"
            >
                <h1
                    class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"
                >
                    <span class="inline md:block">{property.type}</span>
                </h1>
                <div
                    class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg"
                >
                    {property.description}
                </div>
                <div class="flex flex-col items-center mt-12 text-center">
                    <Link to={route(AdminRoutes.EditProperty, { id: property.id })}>
                        <div class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                            {t("buttons.edit")}
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PropertyDetailScreen;