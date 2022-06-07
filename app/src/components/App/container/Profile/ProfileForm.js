import { useTranslation } from "react-i18next";
import Input from "../../../Design/Form/Input";
import PasswordInput from "../../../Design/Form/PasswordInput";
import * as yup from "yup";
import useForm from "../../../../core/hooks/useForm";

const getSchema = (isUpdate) => {
    return yup.object().shape({
        name: yup.string().required(),
        surname: yup.string().required(),
        email: yup.string().email().required(),
        password: isUpdate ? yup.string() : yup.string().required(),
    });
};

const defaultData = {
    name: "",
    surname: "",
    email: "",
    password: "",
};

const transformValues = (values) => {
    // don't send password if it's empty
    if (values.password.length === 0) {
        const { password, ...rest } = values; // or use "delete" keyword
        values = rest;
    }
    return values;
};

const ProfileForm = ({ initialData = {}, disabled, onSubmit, label }) => {
    const { t } = useTranslation();
    const isUpdate = !!initialData.id;
    const { values, errors, handleChange, handleSubmit } = useForm(
        getSchema(isUpdate),
        {
            ...defaultData,
            ...initialData,
        }
    );

    const handleData = (values) => {
        onSubmit(transformValues(values));
    };

    return (
        <form onSubmit={handleSubmit(handleData)} className="w-96 mx-auto bg-black rounded-2xl px-8 py-6 shadow-lg bg-opacity-60 backdrop-filter backdrop-blur-xl">
            <h1 className="mb-8 text-3xl text-center text-white">{t('profile.edit')}</h1>

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
                type={'text'}
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
            {isUpdate && (
                <p className="text-gray-400 mb-5">
                    {t("users.password_print")}
                </p>
            )}

            <button
                type="submit"
                disabled={disabled}
                className="w-full text-center py-3 rounded bg-gray-800 text-white hover:bg-green-dark focus:outline-none my-1">{t('buttons.edit')}</button>
        </form>
    )
}

export default ProfileForm
