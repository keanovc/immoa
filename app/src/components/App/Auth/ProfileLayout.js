import { Navigate, Outlet, useParams, useLocation } from "react-router-dom";
import useFetch from "../../../core/hooks/useFetch";
import { useAuthContext } from "./AuthProvider";

const ProfileLayout = () => {
    const { id } = useParams();
    const { auth } = useAuthContext();
    const location = useLocation();

    const {
        isLoading,
        error,
        invalidate,
        data: user,
        // refresh,
    } = useFetch(`/users/${id}`);

    if (!auth) {
        const from = location.state?.from?.pathname || "/";

        return <Navigate to={from} state={{ replace: true }} />;
    }

    const handleUpdate = () => {
        invalidate();
    };

    if (error) {
        return <div>Error!</div>;
    }

    if (isLoading) {
        return <div>Loading... </div>;
    }

    return <Outlet context={{ user, onUserUpdate: handleUpdate }} />;
};

export default ProfileLayout;