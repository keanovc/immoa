import { useNavigate, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useMutation from "../../../../../../core/hooks/useMutation";
import PropertyForm from "../../../../Shared/Properties/Form/PropertyForm";
import { AdminRoutes, route } from "../../../../../../core/routing";
import Alert from "../../../../../Design/Alert/Alert";

const PropertyEditScreen = () => {
  const { t } = useTranslation();
  const { property, onPropertyUpdate } = useOutletContext();
  const navigate = useNavigate();

  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
      mutate(`${process.env.REACT_APP_API_URL}/properties/${property.id}`, {
          method: "PATCH",
          data,
          onSuccess: () => {
            onPropertyUpdate();
            navigate(route(AdminRoutes.DetailProperty, { id: property.id }));
          },
      });
  };

  return (
      <div className="w-10/12 lg:w-4/12 mx-auto mt-36">
        {error && <Alert color="danger">{error}</Alert>}
        <PropertyForm
          onSubmit={handleSubmit}
          label={t("properties.edit")}
          disabled={isLoading}
          initialData={property}
        />
      </div>
    );
}

export default PropertyEditScreen