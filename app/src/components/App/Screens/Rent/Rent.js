import Card from "../../../Design/Card/Card";
import { useTranslation } from "react-i18next";
import useTitle from "../../../../core/hooks/useTitle";
import useFetch from "../../../../core/hooks/useFetch";
import { useAuthContext } from "../../Auth/AuthProvider";

const Rent = () => {
    const { t } = useTranslation();
    useTitle(t("properties.title"));

    const { auth } = useAuthContext();
    const { data } = useFetch(auth ? `/propertiesrent` : `/propertiesrentpublic`);

    return (
        <>
            <header id="up" className="rent bg-center bg-no-repeat bg-cover h-[70vh] md:h-[40vh] relative">
                <div className="h-full bg-opacity-50 bg-black flex items-center justify-center flex-col">
                    <div className="mx-2 mt-20 text-center">
                        <p className="text-gray-200 mb-4 text-2xl md:text-4xl font-bold leading-tight">
                        {t('properties.rent.text')}
                        </p>
                        {
                            !auth ? (
                                <div className="flex w-7/12 m-auto">
                                    <p className="text-gray-200 mb-4 text-lg md:text-2xl leading-tight">
                                        {t('properties.rent.textpublic')}
                                    </p>
                                </div>
                            ) : (
                                null 
                            )
                        }
                    </div>
                </div>
            </header>

            <div id="houses" className="container mx-auto grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10">
                {
                    data ? data.length > 0 ? data.map(property => (
                        <Card key={property.id} property={property} auth={auth}/>
                    )) : <div className="w-full h-full flex items-center justify-center">
                            <p className="text-gray-800 mb-4 text-lg md:text-2xl font-bold leading-tight">
                                {t('properties.noproperties')}
                            </p>
                        </div> : null
                }
            </div>
        </>
    )
}

export default Rent;