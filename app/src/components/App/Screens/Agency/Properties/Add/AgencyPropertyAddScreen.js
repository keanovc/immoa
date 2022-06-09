import useMutation from "../../../../../../core/hooks/useMutation";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AgencyRoutes } from "../../../../../../core/routing";
import PropertyForm from "../../../../Shared/Properties/Form/PropertyForm";
import Alert from "../../../../../Design/Alert/Alert";
import { useAuthContext } from "../../../../Auth/AuthProvider";

const AgencyPropertyAddScreen = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const { auth } = useAuthContext();

    const { isLoading, error, mutate } = useMutation();
    
    const handleSubmit = (data) => {
        data.userId = auth.user.id;
        mutate(`${process.env.REACT_APP_API_URL}/propertiesbyagency`, {
            method: "POST",
            data,
            multipart: true,
            onSuccess: () => {
                navigate(AgencyRoutes.Properties);
            },
        });
    };

    return (
        <div className="w-10/12 lg:w-4/12 mx-auto mt-36">
            {error && <Alert color="danger">{error}</Alert>}
            <PropertyForm
                onSubmit={handleSubmit}
                label={t("properties.create")}
                disabled={isLoading}
            />
        </div>
    )
}

export default AgencyPropertyAddScreen