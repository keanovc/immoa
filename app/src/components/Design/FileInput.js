import React from "react";
import { useRef } from "react";
import { getImagePath } from "../../core/helpers/api";
import isVoid from "../../core/helpers/isVoid";

const FileInput = ({
    label,
    name,
    accept = "image/*",
    onChange,
    value,
    error,
    disabled,
    ...rest
}) => {
    const ref = useRef();

    const handleChange = (e) => {
        onChange({
            target: {
                name,
                value: e.target.files[0],
            },
        });
    };

    return (
        <>
            <div className="bg-white flex items-center justify-center py-5 rounded-2xl border-2 border-gray-300 border-dashed mb-10">
                {!isVoid(value) && (
                    <img
                        className="d-block mr-10"
                        style={{ width: "auto", height: "5rem" }}
                        src={
                            typeof value === "string"
                                ? getImagePath(value)
                                : URL.createObjectURL(value)
                        }
                        alt=""
                    />
                )}
                <input
                    className={`form-control ${error ? "is-invalid" : ""}`}
                    type="file"
                    accept="image/*"
                    name={name}
                    ref={ref}
                    disabled={disabled}
                    onChange={handleChange}
                    {...rest}
                />
                {error && <div className="invalid-feedback text-red-500 text-xs ml-1">{error}</div>}
            </div>
        </>
    );
};

export default FileInput;