import Table from "../../../../../Design/Table/Table";
import { AgencyRoutes } from "../../../../../../core/routing";
import { useTranslation } from "react-i18next";
import useFetch from "../../../../../../core/hooks/useFetch";
import Alert from "../../../../../Design/Alert/Alert";
import { useAuthContext } from "../../../../Auth/AuthProvider";

const AgencyPropertiesOverviewScreen = () => {
    const { t } = useTranslation();
    const { auth } = useAuthContext();

    const { isLoading, data: properties, error, invalidate } = useFetch(`/propertiesbyagency/${auth.user.id}`);

    if (properties) {
        properties.map(item => {
            delete item.description;
            delete item.image;
            delete item.price;
            delete item.rooms;
            delete item.bathrooms;
            delete item.area;
            delete item.year;
            return item;
        });
    }

    const handleDelete = () => {
        invalidate();
    };

    if (error) {
        return <div className="mt-36 w-4/12 mx-auto">
            <Alert color="danger">{error}</Alert>
        </div>
    }

    return (
        isLoading ? (
            <div>Loading</div>
        ) : (
            <Table data={properties} onSuccess={handleDelete} add={AgencyRoutes.AddProperty} button={t('buttons.addproperty')} detail={AgencyRoutes.DetailProperty} group='properties'/>
        )
    );
};

export default AgencyPropertiesOverviewScreen;