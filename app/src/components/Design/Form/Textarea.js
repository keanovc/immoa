
import PropTypes from "prop-types";

const Textarea = ({
    type = "text",
    label,
    name,
    onChange,
    value,
    error,
    children,
    disabled,
    ...rest
}) => {
    return (
        <>
            <textarea
                className={`form-control ${error ? "is-invalid block border border-gray-300 w-full p-3 rounded mb-1" : "block border border-gray-300 w-full p-3 rounded mb-4"}`}
                type={type}
                name={name}
                rows="5"
                value={value}
                disabled={disabled}
                onChange={onChange}
                {...rest}
            />
            {children}
            {error && <div className="invalid-feedback text-red-500 text-xs ml-1">{error}</div>}
        </>
    );
};

Textarea.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

export default Textarea;