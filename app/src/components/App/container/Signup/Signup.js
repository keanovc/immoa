import { useState } from 'react';
import useMutation from '../../../../core/hooks/useMutation';
import { useAuthContext } from '../../Auth/AuthProvider';
import { AuthRoutes } from '../../../../core/routing';

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useTitle from "../../../../core/hooks/useTitle";
import PasswordInput from '../../../Design/Form/PasswordInput';

const Signup = () => {
    const { login } = useAuthContext();
    const { t } = useTranslation();
    useTitle(t("signup.title"));

    const [data, setData] = useState({
        name: "",
        surname: "",
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

        mutate(`${process.env.REACT_APP_API_URL}/register`, {
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
                    <Link to="/" className='text-2xl'>x</Link>
                    <h1 className="mb-8 text-3xl text-center">{t('signup.title')}</h1>
                    <input 
                        type="text"
                        className="block border border-gray-300 w-full p-3 rounded mb-4"
                        name="name"
                        placeholder={t('fields.firstname')}
                        value={data.name}
                        onChange={handleChange}
                        required />

                    <input 
                        type="text"
                        className="block border border-gray-300 w-full p-3 rounded mb-4"
                        name="surname"
                        placeholder={t('fields.lastname')}
                        value={data.surname}
                        onChange={handleChange}
                        required />

                    <input 
                        type="text"
                        className="block border border-gray-300 w-full p-3 rounded mb-4"
                        name="email"
                        placeholder={t('fields.email')}
                        value={data.email}
                        onChange={handleChange}
                        required />

                    <PasswordInput value={data.password} onChange={handleChange}/>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full text-center py-3 rounded bg-gray-800 text-white hover:bg-green-dark focus:outline-none my-1">{t('buttons.createaccount')}</button>
                </form>

                <div className="text-gray-300 mt-6">
                    {t('signup.account')}
                    <Link to={AuthRoutes.Signin} className='ml-1 no-underline border-b border-blue-500 text-blue-500'>
                        {t('signup.signin')}
                    </Link>.
                </div>
            </div>
        </header>
    )
}

export default Signup;