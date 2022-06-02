import useMutation from "../../../../../../core/hooks/useMutation";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AdminRoutes } from "../../../../../../core/routing";
import PropertyForm from "../../../../Shared/Properties/Form/PropertyForm";

const PropertiesAddScreen = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const { isLoading, error, mutate } = useMutation();
    
    const handleSubmit = (data) => {
      mutate(`${process.env.REACT_APP_API_URL}/properties`, {
          method: "POST",
          data,
          multipart: true,
          onSuccess: () => {
              navigate(AdminRoutes.Properties);
          },
      });
    };

    return (
        <div className="w-4/12 mx-auto mt-36">
            <p>{error}</p>
            <PropertyForm
                onSubmit={handleSubmit}
                label={t("properties.create")}
                disabled={isLoading}
            />
        </div>
    )
}

export default PropertiesAddScreen
