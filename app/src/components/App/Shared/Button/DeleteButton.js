import useMutation from "../../../../core/hooks/useMutation"
import { useEffect } from "react";
import PropTypes from "prop-types";

const DeleteButton = ({ onSuccess, id, scope }) => {
    const { mutate, error } = useMutation();

    const handleClick = () => {
        mutate(`${process.env.REACT_APP_API_URL}/${scope}/${id}`, {
            method: "DELETE",
            onSuccess: () => {
                onSuccess();
            },
        });
    };

    useEffect(() => {
        if (error) {
            window.alert(error);
        }
    }, [error]);

    return (
        <button onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400 cursor-pointer" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </button>
    )
}

DeleteButton.propTypes = {
    onClick: PropTypes.func,
};

export default DeleteButton
