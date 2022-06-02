import { useNavigate, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useMutation from "../../../../../../core/hooks/useMutation";
import PropertyForm from "../../../../Shared/Properties/Form/PropertyForm";
import { AdminRoutes, route } from "../../../../../../core/routing";

const PropertyEditScreen = () => {
  const { t } = useTranslation();
  const { property, onPropertyUpdate } = useOutletContext();
  const navigate = useNavigate();

  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
      mutate(`${process.env.REACT_APP_API_URL}/properties/${property.id}`, {
          method: "PATCH",
          data,
          multipart: true,
          onSuccess: () => {
            onPropertyUpdate();
            navigate(route(AdminRoutes.DetailProperty, { id: property.id }));
          },
      });
  };

  return (
      <div className="w-4/12 mx-auto mt-36">
        <p>{error}</p>
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