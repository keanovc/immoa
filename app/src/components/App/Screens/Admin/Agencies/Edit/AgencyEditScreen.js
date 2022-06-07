import { useNavigate, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useMutation from "../../../../../../core/hooks/useMutation";
import AgencyForm from "../../../../Shared/Agencies/Form/AgencyForm";
import { AdminRoutes, route } from "../../../../../../core/routing";
import Alert from "../../../../../Design/Alert/Alert";

const AgencyEditScreen = () => {
  const { t } = useTranslation();
  const { agency, onAgencyUpdate } = useOutletContext();
  const navigate = useNavigate();

  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
      mutate(`${process.env.REACT_APP_API_URL}/agencies/${agency.id}`, {
          method: "PATCH",
          data,
          onSuccess: () => {
            onAgencyUpdate();
            navigate(route(AdminRoutes.DetailAgency, { id: agency.id }));
          },
      });
  };

  return (
      <div className="w-10/12 lg:w-4/12 mx-auto mt-36">
        {error && <Alert color="danger">{error}</Alert>}
        <AgencyForm
          onSubmit={handleSubmit}
          label={t("agencies.edit")}
          disabled={isLoading}
          initialData={agency}
        />
      </div>
    );
}

export default AgencyEditScreen