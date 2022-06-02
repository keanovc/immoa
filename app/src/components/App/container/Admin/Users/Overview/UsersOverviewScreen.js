import useFetch from "../../../../../../core/hooks/useFetch";
import Table from "../../../../../Design/Table/Table";
import { AdminRoutes } from "../../../../../../core/routing";
import { useTranslation } from "react-i18next";

const UsersOverviewScreen = () => {
    const { t } = useTranslation();

    const { isLoading, data: users, error, invalidate } = useFetch("/users");

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
            <Table data={users} onSuccess={handleDelete} add={AdminRoutes.AddUser} button={t('buttons.adduser')} detail={AdminRoutes.DetailUser} group='users'/>
        )
    );
};

export default UsersOverviewScreen;
