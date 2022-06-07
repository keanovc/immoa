import { useTranslation } from "react-i18next";
import useTitle from "../../../../core/hooks/useTitle";
import { Link } from "react-router-dom";
import Input from "../../../Design/Form/Input";
import * as MaterialDesign from "react-icons/md";
import Button from "../../../Design/Button/Button";

const Contact = () => {
    const { t } = useTranslation();
    useTitle(t("contact.title"));
    
    return (
        <header className="sign bg-center bg-no-repeat bg-cover h-screen relative flex flex-col">
            <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form className="bg-white px-10 py-8 rounded-xl shadow-md text-black w-full">
                    <Link to="/" className='text-2xl'><MaterialDesign.MdClose className='text-2xl'/></Link>
                    <h1 className="mb-8 text-3xl text-center">{t('contact.title')}</h1>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3">
                            <Input type={'text'} name={'name'} placeholder={t('fields.firstname')} />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                            <Input type={'text'} name={'surname'} placeholder={t('fields.lastname')} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3">
                            <Input type={'email'} name={'email'} placeholder={t('fields.email')} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3">
                        <textarea 
                                type="text"
                                className="block border border-gray-300 w-full p-3 rounded mb-4 h-36 resize-none"
                                name="message"
                                placeholder={t('fields.message')}
                                required />
                        </div>
                    </div>
                    <Button type={'submit'}>
                        {t('buttons.send')}
                    </Button>
                </form>
            </div>
        </header>
    )
}

export default Contact
