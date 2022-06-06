import useMutation from '../../../../core/hooks/useMutation';
import { useAuthContext } from '../AuthProvider';
import { AuthRoutes } from '../../../../core/routing';

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useTitle from "../../../../core/hooks/useTitle";
import PasswordInput from '../../../Design/Form/PasswordInput';
import Input from '../../../Design/Form/Input';
import * as MaterialDesign from "react-icons/md";
import * as yup from "yup";
import useForm from '../../../../core/hooks/useForm';

const schema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const defaultData = {
    name: "",
    surname: "",
    email: "",
    password: "",
};

const Signup = () => {
    const { t } = useTranslation();
    const { login } = useAuthContext();
    useTitle(t("signup.title"));

    const { isLoading, error, mutate } = useMutation();

    const { values, errors, handleChange, handleSubmit } = useForm(schema, {
        ...defaultData,
    });

    const handleData = (values) => {
        mutate(`${process.env.REACT_APP_API_URL}/register`, {
            method: "POST",
            data: values,
            onSuccess: (data) => {
                login(data);
            },
        });
    };

    return (
        <header className="sign bg-center bg-no-repeat bg-cover h-screen relative flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form onSubmit={handleSubmit(handleData)} className="bg-white px-6 py-8 rounded-xl shadow-md text-black w-full">
                    <p className='text-red-500'>{error}</p>
                    <Link to="/" className='text-2xl'><MaterialDesign.MdClose className='text-2xl'/></Link>
                    <h1 className="mb-8 text-3xl text-center">{t('signup.title')}</h1>

                    <Input 
                        type={'text'}
                        name={'name'}
                        placeholder={t('fields.name')}
                        value={values.name}
                        onChange={handleChange}
                        error={errors.name}
                    />

                    <Input 
                        type={'text'}
                        name={'surname'}
                        placeholder={t('fields.surname')}
                        value={values.surname}
                        onChange={handleChange}
                        error={errors.surname}
                    />

                    <Input 
                        type={'email'}
                        name={'email'}
                        placeholder={t('fields.email')}
                        value={values.email}
                        onChange={handleChange}
                        error={errors.email}
                    />

                    <PasswordInput
                        value={values.password}
                        onChange={handleChange}
                        error={errors.password}
                    />

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