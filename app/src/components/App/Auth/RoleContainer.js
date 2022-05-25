import { Navigate } from "react-router-dom";
import { useAuthContext } from "./AuthProvider";

const RoleContainer = ({ roles = [], children }) => {
    const {
        auth,
    } = useAuthContext();

    if (!auth) {
        return <Navigate to="/" />;
    }

    if (!roles.includes(auth.user.role)) {
        return <Navigate to="/" />;
    }

    return children;
};

export default RoleContainer;