import PropTypes from "prop-types";

const Label = ({ htmlFor, children }) => {
    return (
        <label className="mt-4 mb-1 uppercase text-gray-500 text-xs font-bold" htmlFor={htmlFor}>
            {children}
        </label>
    );
};

Label.propTypes = {
    htmlFor: PropTypes.string,
};

export default Label;