import { Outlet, useParams } from "react-router-dom";
import useFetch from "../../../../../../core/hooks/useFetch";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import Alert from "../../../../../Design/Alert/Alert";

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
        return <div className="mt-36 w-4/12 mx-auto">
            <Alert color="danger">{error}</Alert>
        </div>
    }

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return <Outlet context={{ agency, onAgencyUpdate: handleUpdate }} />;
};

export default AgencyDetailLayout;