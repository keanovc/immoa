import { useTranslation } from "react-i18next";
import Input from "../../../Design/Form/Input";
import PasswordInput from "../../../Design/Form/PasswordInput";
import * as yup from "yup";
import useForm from "../../../../core/hooks/useForm";
import Button from "../../../Design/Button/Button";
import Label from "../../../Design/Form/Label";

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

            <Label htmlFor="name">{t('fields.name')}</Label>
            <Input 
                type={'text'}
                name={'name'}
                placeholder={t('fields.name')}
                value={values.name}
                onChange={handleChange}
                error={errors.name}
            />

            <Label htmlFor="surname">{t('fields.surname')}</Label>
            <Input 
                type={'text'}
                name={'surname'}
                placeholder={t('fields.surname')}
                value={values.surname}
                onChange={handleChange}
                error={errors.surname}
            />

            <Label htmlFor="email">{t('fields.email')}</Label>
            <Input 
                type={'text'}
                name={'email'}
                placeholder={t('fields.email')}
                value={values.email}
                onChange={handleChange}
                error={errors.email}
            />

            {
                !initialData && (
                    <>
                        <Label htmlFor="password">{t('fields.password')}</Label>
                        <PasswordInput
                            value={values.password}
                            onChange={handleChange}
                            error={errors.password}
                        />
                    </>
                )
            }

            <Button type={'submit'} disabled={disabled}>
                {t('buttons.edit')}
            </Button>
        </form>
    )
}

export default ProfileForm
