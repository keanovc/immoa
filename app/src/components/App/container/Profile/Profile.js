import { useTranslation } from "react-i18next";
import useTitle from "../../../../core/hooks/useTitle";

const Profile = () => {
    const { t } = useTranslation();
    useTitle(t("profile.title"));

    return (
        <>
            <div className="bg-gray-800 bg-center bg-no-repeat bg-center bg-cover h-screen relative flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    
                </div>
            </div>
        </>
    )
}

export default Profile
