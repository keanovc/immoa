import PropTypes from "prop-types";

const Select = ({ name, options = [], onChange, value, error, disabled }) => {
    return (
        <>
            <select
                className={`form-control ${error ? "is-invalid block border border-gray-300 w-full p-3 rounded-lg mb-4" : "block border border-gray-300 w-full p-3 rounded-lg mb-4"}`}
                name={name}
                disabled={disabled}
                value={String(value) || ""}
                onChange={onChange}>
                <option>--</option>
                {options &&
                    options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback text-red-500 text-xs ml-1">{error}</div>}
        </>
    );
};

Select.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
            label: PropTypes.string,
        })
    ),
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

export default Select;
