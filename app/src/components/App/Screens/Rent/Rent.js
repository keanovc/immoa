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
                    )) : <div className="p-4">
                            <div class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300" role="alert">
                                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <div>
                                    {t('properties.noproperties')}
                                </div>
                            </div>
                        </div> : null
                }
            </div>
        </>
    )
}

export default Rent;