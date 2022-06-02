import useForm from "../../../../../core/hooks/useForm";
import { useTranslation } from "react-i18next";
import Input from "../../../../Design/Form/Input";
import * as yup from "yup";
import FileInput from "../../../../Design/Form/FileInput.js";
import Select from "../../../../Design/Form/Select";
import Textarea from "../../../../Design/Form/Textarea";

const schema = yup.object().shape({
    zipCode: yup.string().required("Zip code is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    price: yup.number().required("Price is required"),
    rooms: yup.number().required("Rooms is required"),
    bathrooms: yup.number().required("Bathrooms is required"),
    area: yup.number().required("Area is required"),
    year: yup.number().required("Year is required"),
    description: yup.string().required("Description is required"),
    image: yup.string().required("Image is required"),
    type: yup.string().required("Type is required"),
    bor: yup.string().required("Bor is required"),
});

const PropertyForm = ({ initialData = {}, disabled, onSubmit, label }) => {
    const { t } = useTranslation();
    const { values, handleChange, handleSubmit, errors } = useForm(schema, {
        zipCode: "",
        address: "",
        city: "",
        price: "",
        rooms: "",
        bathrooms: "",
        area: "",
        year: "",
        description: "",
        image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        type: "",
        bor: "",
        sold: false,
        ...initialData,
    });

    const handleData = (values) => {
        onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit(handleData)} className="px-10 py-8 rounded text-black w-full">
            <h1 className="mb-16 text-3xl text-center">{label}</h1>
            {/* <div className="flex flex-wrap -mx-3 mb-9 px-3">
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                        </div>
                        <FileInput
                            label={t('properties.image')}
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            value={values.image}
                            error={errors.image}
                            disabled={disabled}
                            className="hidden"
                        />
                    </label>
                </div> 
            </div> */}
            <div className="flex flex-wrap -mx-3 mb-3">
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
                <div className="w-full px-3 md:w-1/2">
                    <Input
                        type={'text'}
                        name="zipCode"
                        value={values.zipCode}
                        onChange={handleChange}
                        placeholder={t('fields.zipcode')}
                        error={errors.zipCode}
                        disabled={disabled}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3 md:w-1/2">
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
                <div className="w-full px-3 md:w-1/2">
                    <Input 
                        type={'number'}
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                        placeholder={t('fields.price')}
                        error={errors.price}
                        disabled={disabled}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3 md:w-1/2">
                    <Input 
                        type={'number'}
                        name="rooms"
                        value={values.rooms}
                        onChange={handleChange}
                        placeholder={t('fields.rooms')}
                        error={errors.rooms}
                        disabled={disabled}
                    />
                </div>
                <div className="w-full px-3 md:w-1/2">
                    <Input 
                        type={'number'}
                        name="bathrooms"
                        value={values.bathrooms}
                        onChange={handleChange}
                        placeholder={t('fields.bathrooms')}
                        error={errors.bathrooms}
                        disabled={disabled}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3 md:w-1/2">
                    <Input 
                        type={'number'}
                        name="area"
                        value={values.area}
                        onChange={handleChange}
                        placeholder={t('fields.area')}
                        error={errors.area}
                        disabled={disabled}
                    />
                </div>
                <div className="w-full px-3 md:w-1/2">
                    <Input 
                        type={'number'}
                        name="year"
                        value={values.year}
                        onChange={handleChange}
                        placeholder={t('fields.year')}
                        error={errors.year}
                        disabled={disabled}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3 md:w-1/2">
                    <Input 
                        type={'text'}
                        name="type"
                        value={values.type}
                        onChange={handleChange}
                        placeholder={t('fields.type')}
                        error={errors.type}
                        disabled={disabled}
                    />
                </div>
                <div className="w-full px-3 md:w-1/2">
                    <Select
                        name="bor"
                        value={values.bor}
                        onChange={handleChange}
                        options={[
                            { value: 'buy', label: t('fields.buy') },
                            { value: 'rent', label: t('fields.rent') },
                        ]}
                        error={errors.bor}
                        disabled={disabled}
                    />
                </div>
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

export default PropertyForm