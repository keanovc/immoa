import useFetch from "../../../../../core/hooks/useFetch";
import Table from "../../../../Design/Table/Table";
import useMutation from "../../../../../core/hooks/useMutation";
import { useParams } from "react-router-dom";
import { AdminRoutes } from "../../../../../core/routing";
import { useTranslation } from "react-i18next";

const UsersOverviewScreen = () => {
    const { t } = useTranslation();

    const userId = useParams().id;
    const { isLoading, data: users, error } = useFetch("/users");

    const {mutate} = useMutation();

    const handleDelete = () => {
        mutate(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
            method: "DELETE",
            onSuccess: () => {
                console.log("User deleted");
            },
        });
    };
    
    if (error) {
        return <div>{error}</div>;
    }

    return (
        isLoading ? (
            <div>Loading</div>
        ) : (
            <Table data={users} handleDelete={handleDelete} route={AdminRoutes.AddUser} button={t('buttons.adduser')}/>
        )
    );
};

export default UsersOverviewScreen;
