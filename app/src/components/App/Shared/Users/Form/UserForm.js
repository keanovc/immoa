import Input from "../../../../Design/Form/Input";
import * as yup from "yup";
import useForm from "../../../../../core/hooks/useForm";
import { useTranslation } from "react-i18next";
import PasswordInput from "../../../../Design/Form/PasswordInput";
import Select from "../../../../Design/Form/Select";
import AgencySelect from "../../Agencies/Select/AgencySelect";
import Button from "../../../../Design/Button/Button";
import Label from "../../../../Design/Form/Label";

// dynamic schema
const getSchema = (isUpdate) => {
    return yup.object().shape({
        name: yup.string().required(),
        surname: yup.string().required(),
        email: yup.string().email().required(),
        password: isUpdate ? yup.string() : yup.string().required(),
        role: yup.string().required(),
    });
};

const transformInitialData = (initialData) => {
    if (initialData.agency) {
        initialData = {
            ...initialData,
            agencyId: initialData.agency.id,
        };
    }
    return initialData;
};

const defaultData = {
    name: "",
    surname: "",
    email: "",
    password: "",
    role: "USER",
    agencyId: null,
};

const transformValues = (values) => {
    // don't send password if it's empty
    if (values.password.length === 0) {
        const { password, ...rest } = values; // or use "delete" keyword
        values = rest;
    }
    return values;
};

const UserForm = ({ initialData = {}, disabled, onSubmit, label }) => {
    const { t } = useTranslation();
    const isUpdate = !!initialData.id;
    const { values, errors, handleChange, handleSubmit } = useForm(
        getSchema(isUpdate),
        {
            ...defaultData,
            ...transformInitialData(initialData),
        }
    );

    const handleData = (values) => {
        onSubmit(transformValues(values));
    };

    return (
        <form onSubmit={handleSubmit(handleData)} className="lg:px-10 lg:py-8 rounded text-black w-full">
            <h1 className="mb-16 text-3xl text-center">{label}</h1>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <Label htmlFor="name">{t("fields.firstname")}</Label>
                    <Input
                        type="text"
                        name="name"
                        placeholder={t('fields.firstname')}
                        value={values.name}
                        onChange={handleChange}
                        error={errors.name}
                        disabled={disabled}
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <Label htmlFor="surname">{t("fields.lastname")}</Label>
                    <Input
                        type="text"
                        name="surname"
                        placeholder={t('fields.lastname')}
                        value={values.surname}
                        onChange={handleChange}
                        error={errors.surname}
                        disabled={disabled}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 md:w-1/2">
                    <Label htmlFor="email">{t("fields.email")}</Label>
                    <Input
                        type="email"
                        name="email"
                        placeholder={t('fields.email')}
                        value={values.email}
                        onChange={handleChange}
                        error={errors.email}
                        disabled={disabled}
                    />
                </div>
                <div className="w-full px-3 md:w-1/2">
                    <Label htmlFor="role">{t("fields.role")}</Label>
                    <Select
                        name="role"
                        options={[
                            { value: "ADMIN", label: t('fields.admin') },
                            { value: "USER", label: t('fields.user') },
                            { value: "REALTOR", label: t('fields.realtor') },
                        ]}
                        value={values.role}
                        onChange={handleChange}
                        error={errors.role}
                        disabled={disabled}
                    />
                </div>
            </div>
            {
                values.role === "REALTOR" && (
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <Label htmlFor="agencyId">{t("fields.agency")}</Label>
                            <AgencySelect
                                name="agencyId"
                                value={values.agencyId}
                                onChange={handleChange}
                                error={errors.agencyId}
                            />
                        </div>
                    </div>
                )
            }
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    {
                        !initialData.id && (
                            <>
                                <Label htmlFor="password">{t("fields.password")}</Label>
                                <PasswordInput
                                    name="password"
                                    placeholder={t('fields.password')}
                                    value={values.password}
                                    onChange={handleChange}
                                    error={errors.password}
                                    disabled={disabled}
                                />
                            </>
                        )
                    }
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <Button
                        type={'submit'}
                        disabled={disabled}
                    >
                        {label}
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default UserForm;