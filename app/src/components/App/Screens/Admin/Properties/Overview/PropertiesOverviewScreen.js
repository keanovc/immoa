import Table from "../../../../../Design/Table/Table";
import { AdminRoutes } from "../../../../../../core/routing";
import { useTranslation } from "react-i18next";
import useFetch from "../../../../../../core/hooks/useFetch";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import Alert from "../../../../../Design/Alert/Alert";

const PropertiesOverviewScreen = () => {
    const { t } = useTranslation();

    const { isLoading, data: properties, error, invalidate } = useFetch("/properties");

    if (properties) {
        properties.map(item => {
            delete item.id;
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
            <LoadingIndicator />
        ) : (
            <Table data={properties} onSuccess={handleDelete} add={AdminRoutes.AddProperty} button={t('buttons.addproperty')} detail={AdminRoutes.DetailProperty} group='properties'/>
        )
    );
};

export default PropertiesOverviewScreen;
