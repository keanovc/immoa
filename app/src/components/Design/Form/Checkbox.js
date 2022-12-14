import PropTypes from "prop-types";

const Checkbox = ({ name, options = [], onChange, value, error, disabled }) => {
    return (
        <>
            <input
                type="checkbox"
                className={`form-control ${error ? "is-invalid block border border-gray-300 w-full p-3 rounded mb-4" : "block border border-gray-300 w-full p-3 rounded mb-4"}`}
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
            </input>
            {error && <div className="invalid-feedback">{error}</div>}
        </>
    );
};

Checkbox.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            label: PropTypes.string,
        })
    ),
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

export default Checkbox;
