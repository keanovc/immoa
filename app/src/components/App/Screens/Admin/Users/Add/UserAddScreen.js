import useMutation from "../../../../../../core/hooks/useMutation";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AdminRoutes } from "../../../../../../core/routing";
import UserForm from "../../../../Shared/Users/Form/UserForm";
import Alert from "../../../../../Design/Alert/Alert";

const UserAddScreen = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const { isLoading, error, mutate } = useMutation();
    
    const handleSubmit = (data) => {
      mutate(`${process.env.REACT_APP_API_URL}/users`, {
          method: "POST",
          data,
          onSuccess: () => {
              navigate(AdminRoutes.Users);
          },
      });
    };

    return (
        <div className="w-10/12 lg:w-4/12 mx-auto mt-36">
            {error && <Alert color="danger">{error}</Alert>}
            <UserForm
              onSubmit={handleSubmit}
              label={t("users.create")}
              disabled={isLoading}
            />
        </div>
    )
}

export default UserAddScreen
