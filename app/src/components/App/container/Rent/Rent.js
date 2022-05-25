import images from "../../constants/images";
import { Card } from "../../../Design/Card/Card";
import { useTranslation } from "react-i18next";
import useTitle from "../../../../core/hooks/useTitle";
import useFetch from "../../../../core/hooks/useFetch";
import { useAuthContext } from "../../Auth/AuthProvider";

const Rent = () => {
    const { t } = useTranslation();
    useTitle(t("properties.title"));

    const { auth } = useAuthContext();
    const { data } = useFetch(`/properties`);

    return (
        <>
            <header id="up" className="rent bg-center bg-no-repeat bg-cover h-[40vh] relative">
                <div className="h-full bg-opacity-50 bg-black flex items-center justify-center flex-col">
                    <div className="mx-2 mt-20 text-center">
                        <p className="text-gray-200 mb-4 text-4xl font-bold leading-tight">
                        {t('properties.rent.text')}
                        </p>
                        {
                            !auth ? (
                                <div className="flex w-7/12 m-auto">
                                    <p className="text-gray-200 mb-4 text-2xl leading-tight">
                                        If you want to see where the property is located or who the realtor is that is renting this property sign up.
                                    </p>
                                </div>
                            ) : (
                                null 
                            )
                        }
                    </div>
                </div>
            </header>

            <div id="houses" className="bg-gray-200 flex items-center w-9/12 mx-auto flex-wrap mt-10">
                {
                    data ? data.map(property => (
                        property.bor === 'rent' ? (
                            <Card key={property.id} property={property} auth={auth}/>
                        ) : null
                    )) : null
                }
            </div>
        </>
    )
}

export default Rent;