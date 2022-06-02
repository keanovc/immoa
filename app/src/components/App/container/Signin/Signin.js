import { useState } from 'react';
import useMutation from '../../../../core/hooks/useMutation';
import { useAuthContext } from '../../Auth/AuthProvider';
import { AuthRoutes } from '../../../../core/routing';

import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import useTitle from "../../../../core/hooks/useTitle";
import PasswordInput from '../../../Design/Form/PasswordInput';
import Input from '../../../Design/Form/Input';
import * as MaterialDesign from "react-icons/md";

const Signin = () => {
    const { login } = useAuthContext();
    const { t } = useTranslation();
    useTitle(t("signin.title"));

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const { isLoading, error, mutate } = useMutation();

    const handleSubmit = (e) => {
        e.preventDefault();

        mutate(`${process.env.REACT_APP_API_URL}/login`, {
            method: "POST",
            data,
            onSuccess: (data) => {
                login(data);
            },
        });
    };

    return (
        <header className="sign bg-center bg-no-repeat bg-cover h-screen relative flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form onSubmit={handleSubmit} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <p className='text-red-500'>{error}</p>
                    <Link to="/" className='text-2xl'><MaterialDesign.MdClose className='text-2xl'/></Link>
                    <h1 className="mb-8 text-3xl text-center">{t('signin.title')}</h1>
                    <Input type={'email'} name={'email'} placeholder={t('fields.email')} value={data.email} onChange={handleChange} />
                        
                    <PasswordInput value={data.password} onChange={handleChange}/>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full text-center py-3 rounded bg-gray-800 text-white hover:bg-green-dark focus:outline-none my-1"
                    >{t('buttons.signin')}</button>
                </form>

                <div className="text-gray-300 mt-6">
                    {t('signin.account')}
                    <Link to={AuthRoutes.Signup} className='ml-1 no-underline border-b border-blue-500 text-blue-500'>
                        {t('signin.signup')}
                    </Link>.
                </div>
            </div>
        </header>
    )
}

export default Signin;
