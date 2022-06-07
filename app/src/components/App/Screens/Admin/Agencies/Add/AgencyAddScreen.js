import useMutation from "../../../../../../core/hooks/useMutation";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AdminRoutes } from "../../../../../../core/routing";
import AgencyForm from "../../../../Shared/Agencies/Form/AgencyForm";
import Alert from "../../../../../Design/Alert/Alert";

const AgenciesAddScreen = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const { isLoading, error, mutate } = useMutation();
    
    const handleSubmit = (data) => {
      mutate(`${process.env.REACT_APP_API_URL}/agencies`, {
          method: "POST",
          data,
          onSuccess: () => {
              navigate(AdminRoutes.Agencies);
          },
      });
    };

    return (
        <div className="w-10/12 lg:w-4/12 mx-auto mt-36">
        {error && <Alert color="danger">{error}</Alert>}
            <AgencyForm
                onSubmit={handleSubmit}
                disabled={isLoading}
                label={t('agencies.create')}
            />
        </div>
    )
}

export default AgenciesAddScreen