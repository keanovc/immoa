import React from "react";
import useForm from "../../../../../core/hooks/useForm";
import { useTranslation } from "react-i18next";
import Input from "../../../../Design/Form/Input";
import * as yup from "yup";
import Select from "../../../../Design/Form/Select";
import Textarea from "../../../../Design/Form/Textarea";
import AgencySelect from "../../Agencies/Select/AgencySelect";
import FileInput from "../../../../Design/Form/FileInput";
import Button from "../../../../Design/Button/Button";

const schema = yup.object().shape({
    zipCode: yup.string().required("Zip code is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    price: yup.number().typeError("Price is required").required(),
    rooms: yup.number().typeError("Rooms is required").required(),
    bathrooms: yup.number().typeError("Bathrooms is required").required(),
    area: yup.number().typeError("Area is required").required(),
    year: yup.number().typeError("Year is required").required(),
    description: yup.string().required("Description is required"),
    image: yup.string().required("Image is required"),
    type: yup.string().required("Type is required"),
    bor: yup.string().required("Required"),
    agencyId: yup.number().nullable().required("Agency is required"),
});

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
    zipCode: "",
    address: "",
    city: "",
    price: "",
    rooms: "",
    bathrooms: "",
    area: "",
    year: "",
    description: "",
    type: "",
    bor: "",
    sold: "no",
    agencyId: null,
};

const PropertyForm = ({ initialData = {}, disabled, onSubmit, label }) => {
    const { t } = useTranslation();
    const { values, handleChange, handleSubmit, errors } = useForm(schema, {
        ...defaultData,
        ...transformInitialData(initialData),
    });

    const handleData = (values) => {
        onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit(handleData)} noValidate={true} className="py-8 rounded text-black w-full">
            <h1 className="mb-16 text-3xl text-center">{label}</h1>
            {!initialData.id && (
                <FileInput
                    name="image"
                    label="Image"
                    value={values.image}
                    onChange={handleChange}
                    error={errors.image}
                />
            )}
            <div className="flex flex-wrap -mx-3 mb-3 px-3">
                <Select
                    name="sold"
                    label={t('properties.sold')}
                    value={values.sold}
                    onChange={handleChange}
                    error={errors.sold}
                    disabled={disabled}
                    options={[
                        { value: "no", label: t('properties.available') },
                        { value: "yes", label: t('properties.sold') },
                    ]}
                />
            </div>
            <div className="flex flex-wrap -mx-3 mb-3 px-3">
                <AgencySelect
                    name="agencyId"
                    value={values.agencyId}
                    onChange={handleChange}
                    error={errors.agencyId}
                />
            </div>
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
                    <Select
                        name="type"
                        label={t('fields.type')}
                        value={values.type}
                        onChange={handleChange}
                        error={errors.type}
                        disabled={disabled}
                        options={[
                            { value: 'house', label: t('fields.type.house') },
                            { value: 'mansion', label: t('fields.type.mansion') },
                            { value: 'apartment', label: t('fields.type.apartment') },
                            { value: 'flat', label: t('fields.type.flat') },
                            { value: 'penthouse', label: t('fields.type.penthouse') },
                            { value: 'office', label: t('fields.type.office') },
                            { value: 'shop', label: t('fields.type.shop') },
                            { value: 'other', label: t('fields.type.other') },
                        ]}
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
            {/* <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3 md:w-1/2">
                    <input type="radio" value="false" name="sold" /> Available
                    <input type="radio" value="true" name="sold" /> Sold
                </div>
                <div className="w-full px-3 md:w-1/2">
                    <Button
                        type={'submit'}
                        disabled={disabled}
                    >
                        {label}
                    </Button>
                </div>
            </div> */}
            <Button
                type={'submit'}
                disabled={disabled}
            >
                {label}
            </Button>
        </form>
    )
}

export default PropertyForm