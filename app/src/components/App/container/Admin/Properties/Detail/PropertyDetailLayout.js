import { Outlet, useParams } from "react-router-dom";
import useFetch from "../../../../../../core/hooks/useFetch";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import Alert from "../../../../../Design/Alert/Alert";

const PropertyDetailLayout = () => {
    const { id } = useParams();

    const {
        isLoading,
        error,
        invalidate,
        data: property,
        // refresh,
    } = useFetch(`/properties/${id}`);

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

    return <Outlet context={{ property, onPropertyUpdate: handleUpdate }} />;
};

export default PropertyDetailLayout;