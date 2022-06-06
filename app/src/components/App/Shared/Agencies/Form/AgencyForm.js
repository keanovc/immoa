import useForm from "../../../../../core/hooks/useForm";
import { useTranslation } from "react-i18next";
import Input from "../../../../Design/Form/Input";
import * as yup from "yup";
import Textarea from "../../../../Design/Form/Textarea";

const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    address: yup.string().required(),
    zipCode: yup.string().required(),
    city: yup.string().required(),
    phone: yup.string().required(),
});

const defaultData = {
    name: "",
    description: "",
    address: "",
    zipCode: "",
    city: "",
    phone: "",
};

const AgencyForm = ({ initialData = {}, disabled, onSubmit, label }) => {
    const { t } = useTranslation();
    const { values, handleChange, handleSubmit, errors } = useForm(schema, {
        ...defaultData,
        ...initialData,
    });

    const handleData = (values) => {
        console.log(values);
        onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit(handleData)} className="px-10 py-8 rounded text-black w-full">
            <h1 className="mb-16 text-3xl text-center">{label}</h1>
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3 md:w-1/2">
                    <Input 
                        type={'text'}
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder={t('fields.name')}
                        error={errors.name}
                        disabled={disabled}
                    />
                </div>
                <div className="w-full px-3 md:w-1/2">
                    <Input
                        type={'number'}
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        placeholder={t('fields.phone')}
                        error={errors.phone}
                        disabled={disabled}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3 md:w-1/2">
                    <Input 
                        type={'number'}
                        name="zipCode"
                        value={values.zipCode}
                        onChange={handleChange}
                        placeholder={t('fields.zipcode')}
                        error={errors.zipCode}
                        disabled={disabled}
                    />
                </div>
                <div className="w-full px-3 md:w-1/2">
                    <Input 
                        type={'text'}
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        placeholder={t('fields.city')}
                        error={errors.city}
                        disabled={disabled}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3 px-3">
                <Input 
                    type={'text'}
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    placeholder={t('fields.address')}
                    error={errors.address}
                    disabled={disabled}
                />
            </div>
            <div className="flex flex-wrap -mx-3 mb-3 px-3">
                <Textarea
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    placeholder={t('fields.description')}
                    error={errors.description}
                    disabled={disabled}
                />
            </div>
            <button
                type="submit"
                className="w-full text-center py-3 rounded bg-gray-800 text-white hover:bg-green-dark focus:outline-none my-1"
                disabled={disabled}
            >
                {label}
            </button>
        </form>
    )
}

export default AgencyForm