import { Outlet, useParams } from "react-router-dom";
import useFetch from "../../../../../../core/hooks/useFetch";

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
        return <div>{error}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <Outlet context={{ property, onPropertyUpdate: handleUpdate }} />;
};

export default PropertyDetailLayout;