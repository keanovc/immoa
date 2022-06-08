import { Navigate, Outlet, useParams, useLocation } from "react-router-dom";
import useFetch from "../../../core/hooks/useFetch";
import { useAuthContext } from "./AuthProvider";
import Alert from "../../Design/Alert/Alert";
import LoadingIndicator from "../../Design/LoadingIndicator/LoadingIndicator";

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
        return <div className="mt-36 w-4/12 mx-auto">
            <Alert color="danger">{error}</Alert>
        </div>
    }

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return <Outlet context={{ user, onUserUpdate: handleUpdate }} />;
};

export default ProfileLayout;