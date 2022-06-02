import { useNavigate, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useMutation from "../../../../../../core/hooks/useMutation";
import UserForm from "../../../../Shared/Users/Form/UserForm";
import { AdminRoutes, route } from "../../../../../../core/routing";

const UserEditScreen = () => {
  const { t } = useTranslation();
  const { user, onUserUpdate } = useOutletContext();
  const navigate = useNavigate();

  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
      mutate(`${process.env.REACT_APP_API_URL}/users/${user.id}`, {
          method: "PATCH",
          data,
          multipart: true,
          onSuccess: () => {
            onUserUpdate();
            navigate(route(AdminRoutes.DetailUser, { id: user.id }));
          },
      });
  };

  return (
      <div className="w-4/12 mx-auto mt-36">
        <p>{error}</p>
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
