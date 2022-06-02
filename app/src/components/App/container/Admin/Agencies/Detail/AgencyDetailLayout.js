import { Outlet, useParams } from "react-router-dom";
import useFetch from "../../../../../../core/hooks/useFetch";

const AgencyDetailLayout = () => {
    const { id } = useParams();

    const {
        isLoading,
        error,
        invalidate,
        data: agency,
        // refresh,
    } = useFetch(`/agencies/${id}`);

    const handleUpdate = () => {
        invalidate();
    };

    if (error) {
        return <div>Error!</div>;
    }

    if (isLoading) {
        return <div>Loading... </div>;
    }

    return <Outlet context={{ agency, onAgencyUpdate: handleUpdate }} />;
};

export default AgencyDetailLayout;