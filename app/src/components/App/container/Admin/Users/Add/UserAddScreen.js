import useMutation from "../../../../../../core/hooks/useMutation";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AdminRoutes } from "../../../../../../core/routing";
import UserForm from "../../../../Shared/Users/Form/UserForm";

const UserAddScreen = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const { isLoading, error, mutate } = useMutation();
    
    const handleSubmit = (data) => {
      mutate(`${process.env.REACT_APP_API_URL}/users`, {
          method: "POST",
          data,
          multipart: true,
          onSuccess: () => {
              navigate(AdminRoutes.Users);
          },
      });
    };

    return (
        <div className="w-4/12 mx-auto mt-36">
            <p>{error}</p>
            <UserForm
              onSubmit={handleSubmit}
              label={t("users.create")}
              disabled={isLoading}
            />
        </div>
    )
}

export default UserAddScreen
