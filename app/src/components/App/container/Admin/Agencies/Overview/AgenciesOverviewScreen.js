import Table from "../../../../../Design/Table/Table";
import { AdminRoutes } from "../../../../../../core/routing";
import { useTranslation } from "react-i18next";
import useFetch from "../../../../../../core/hooks/useFetch";

const AgenciesOverviewScreen = () => {
    const { t } = useTranslation();

    const { isLoading, data: agencies, error, invalidate } = useFetch("/agencies");

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
            <Table data={agencies} onSuccess={handleDelete} add={AdminRoutes.AddAgency} button={t('buttons.addagency')} detail={AdminRoutes.DetailAgency} group='agencies'/>
        )
    );
};

export default AgenciesOverviewScreen;
