import PropTypes from "prop-types";

const Button = ({
    children,
    onClick,
    type = "button",
    disabled = false,
    color = "gray-800",
}) => {
    const props = {
        className: `w-full text-center py-3 rounded-lg bg-${color} text-white hover:bg-green-dark focus:outline-none my-1`,
        disabled: disabled,
    };
    return (
        <button type={type} onClick={onClick} {...props}>
            {children}
        </button>
    )
};

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["button", "reset", "submit"]),
    disabled: PropTypes.bool,
};

export default Button;