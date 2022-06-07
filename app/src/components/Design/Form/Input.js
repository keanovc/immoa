import PropTypes from "prop-types";

const Input = ({ type, name, placeholder, value, onChange, error, disabled, ...rest }) => {
  return (
    <>
      <input 
        type={type}
        className={`form-control ${error ? "is-invalid block border border-gray-300 w-full p-3 rounded-lg mb-1" : "block border border-gray-300 w-full p-3 rounded-lg mb-4"}`}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...rest}
        />
      {error && <div className="invalid-feedback text-red-500 text-xs ml-1 mb-3">{error}</div>}
    </>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool
};

export default Input;
