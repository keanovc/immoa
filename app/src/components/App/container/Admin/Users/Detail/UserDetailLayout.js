import { Outlet, useParams } from "react-router-dom";
import useFetch from "../../../../../../core/hooks/useFetch";

const UserDetailLayout = () => {
    const { id } = useParams();

    const {
        isLoading,
        error,
        invalidate,
        data: user,
        // refresh,
    } = useFetch(`/users/${id}`);

    const handleUpdate = () => {
        invalidate();
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <Outlet context={{ user, onUserUpdate: handleUpdate }} />;
};

export default UserDetailLayout;