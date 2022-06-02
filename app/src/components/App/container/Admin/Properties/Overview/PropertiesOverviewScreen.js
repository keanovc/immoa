import Table from "../../../../../Design/Table/Table";
import { AdminRoutes } from "../../../../../../core/routing";
import { useTranslation } from "react-i18next";
import useFetch from "../../../../../../core/hooks/useFetch";

const PropertiesOverviewScreen = () => {
    const { t } = useTranslation();

    const { isLoading, data: properties, error, invalidate } = useFetch("/properties");

    const handleDelete = () => {
        invalidate();
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        isLoading ? (
            <div>Loading</div>
        ) : (
            <Table data={properties} onSuccess={handleDelete} add={AdminRoutes.AddProperty} button={t('buttons.addproperty')} detail={AdminRoutes.DetailProperty} group='properties'/>
        )
    );
};

export default PropertiesOverviewScreen;
