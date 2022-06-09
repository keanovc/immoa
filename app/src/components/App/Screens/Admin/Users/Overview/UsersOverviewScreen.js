import useFetch from "../../../../../../core/hooks/useFetch";
import Table from "../../../../../Design/Table/Table";
import { AdminRoutes } from "../../../../../../core/routing";
import { useTranslation } from "react-i18next";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import Alert from "../../../../../Design/Alert/Alert";

const UsersOverviewScreen = () => {
    const { t } = useTranslation();

    const { isLoading, data: users, error, invalidate } = useFetch("/users");

    if (users) {
        users.map(item => {
            delete item.id;
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
            <Table data={users} onSuccess={handleDelete} add={AdminRoutes.AddUser} button={t('buttons.adduser')} detail={AdminRoutes.DetailUser} group='users'/>
        )
    );
};

export default UsersOverviewScreen;
