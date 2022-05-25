import useFetch from "../../../../../core/hooks/useFetch";
import Table from "../../../../Design/Table/Table";
import { useParams } from "react-router-dom";
import useMutation from "../../../../../core/hooks/useMutation";
import { AdminRoutes } from "../../../../../core/routing";
import { useTranslation } from "react-i18next";

const PropertiesOverviewScreen = () => {
    const { t } = useTranslation();

    const propertyId = useParams().id;
    const { isLoading, data: properties, error } = useFetch("/properties");

    const {mutate} = useMutation();

    const handleDelete = () => {
        mutate(`${process.env.REACT_APP_API_URL}/users/${propertyId}`, {
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
            <Table data={properties} handleDelete={handleDelete} route={AdminRoutes.AddProperty} button={t('buttons.addproperty')}/>
        )
    );
};

export default PropertiesOverviewScreen;
