import Table from "../../../../../Design/Table/Table";
import { AdminRoutes } from "../../../../../../core/routing";
import { useTranslation } from "react-i18next";
import useFetch from "../../../../../../core/hooks/useFetch";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import Alert from "../../../../../Design/Alert/Alert";

const AgenciesOverviewScreen = () => {
    const { t } = useTranslation();

    const { isLoading, data: agencies, error, invalidate } = useFetch("/agencies");

    if (agencies) {
        agencies.map(item => {
            delete item.description;
            delete item.properties;
            delete item.users;
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
            <Table data={agencies} onSuccess={handleDelete} add={AdminRoutes.AddAgency} button={t('buttons.addagency')} detail={AdminRoutes.DetailAgency} group='agencies'/>
        )
    );
};

export default AgenciesOverviewScreen;
