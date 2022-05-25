import { useTranslation } from "react-i18next";
import useTitle from "../../../../core/hooks/useTitle";
import { Link } from "react-router-dom";

const Contact = () => {
    const { t } = useTranslation();
    useTitle(t("contact.title"));
    
    return (
        <header className="sign bg-center bg-no-repeat bg-cover h-screen relative flex flex-col">
            <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form className="bg-white px-10 py-8 rounded shadow-md text-black w-full">
                    <Link to="/" className='text-2xl'>x</Link>
                    <h1 className="mb-8 text-3xl text-center">{t('contact.title')}</h1>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input 
                                type="text"
                                className="block border border-gray-300 w-full p-3 rounded mb-4"
                                name="fname"
                                placeholder={t('fields.firstname')}
                                required />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                            <input 
                                type="text"
                                className="block border border-gray-300 w-full p-3 rounded mb-4"
                                name="lname"
                                placeholder={t('fields.lastname')}
                                required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <input 
                                type="email"
                                className="block border border-gray-300 w-full p-3 rounded mb-4"
                                name="email"
                                placeholder={t('fields.email')}
                                required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <textarea 
                                type="text"
                                className="block border border-gray-300 w-full p-3 rounded mb-4 h-36 resize-none"
                                name="message"
                                placeholder={t('fields.message')}
                                required />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-gray-800 text-white hover:bg-green-dark focus:outline-none my-1"
                    >{t('buttons.send')}</button>
                </form>
            </div>
        </header>
    )
}

export default Contact
