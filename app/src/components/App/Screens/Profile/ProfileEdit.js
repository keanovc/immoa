import { useNavigate, useOutletContext } from "react-router-dom";
import useMutation from "../../../../core/hooks/useMutation";
import { ProfileRoutes, route } from "../../../../core/routing";
import ProfileForm from "./ProfileForm";
import Alert from "../../../Design/Alert/Alert";

const ProfileEdit = () => {
    const { user, onUserUpdate } = useOutletContext();
    const navigate = useNavigate();
  
    const { isLoading, error, mutate } = useMutation();
  
    const handleSubmit = (data) => {
        mutate(`${process.env.REACT_APP_API_URL}/users/${user.id}`, {
            method: "PATCH",
            data,
            onSuccess: () => {
              onUserUpdate();
              navigate(route(ProfileRoutes.Profile, { id: user.id }));
            },
        });
    };
    return (
        <header className="profile bg-center bg-no-repeat bg-cover h-screen relative flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center">
                {error && <Alert color="danger">{error}</Alert>}
                <ProfileForm
                    isLoading={isLoading}
                    error={error}
                    onSubmit={handleSubmit}
                    initialData={user}
                />
            </div>
        </header>
    )
}

export default ProfileEdit
