import { useNavigate, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useMutation from "../../../../../../core/hooks/useMutation";
import UserForm from "../../../../Shared/Users/Form/UserForm";
import { AdminRoutes, route } from "../../../../../../core/routing";
import Alert from "../../../../../Design/Alert/Alert";

const UserEditScreen = () => {
    const { t } = useTranslation();
    const { user, onUserUpdate } = useOutletContext();
    const navigate = useNavigate();

    const { isLoading, error, mutate } = useMutation();

    const handleSubmit = (data) => {
        mutate(`${process.env.REACT_APP_API_URL}/users/${user.id}`, {
            method: "PATCH",
            data,
            onSuccess: () => {
              onUserUpdate();
              navigate(route(AdminRoutes.DetailUser, { id: user.id }));
            },
        });
    };

    return (
      <div className="w-10/12 lg:w-4/12 mx-auto mt-36">
        {error && <Alert color="danger">{error}</Alert>}
        <UserForm
          onSubmit={handleSubmit}
          label={t("users.edit")}
          disabled={isLoading}
          initialData={user}
        />
      </div>
    );
}

export default UserEditScreen
