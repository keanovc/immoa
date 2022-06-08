import { useTranslation } from "react-i18next";
import useTitle from "../../../../core/hooks/useTitle";
import { useOutletContext } from "react-router-dom";
import { formatName } from "../../../../core/modules/users/utils";
import { Link } from "react-router-dom";
import { ProfileRoutes, route } from "../../../../core/routing";
import Button from "../../../Design/Button/Button";

const Profile = () => {
    const { t } = useTranslation();
    const { user } = useOutletContext();
    
    useTitle(user ? formatName(user) : "");

    return (
        <>
            <header className="profile bg-center bg-no-repeat bg-cover h-screen relative flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center">
                    <section className="w-96 mx-auto bg-black rounded-2xl px-8 py-6 shadow-lg bg-opacity-60 backdrop-filter backdrop-blur-xl">
                        <div className="mt-6 w-fit mx-auto">
                            <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" className="rounded-full w-28" alt="profile" />
                        </div>
                        <div className="mt-8 ">
                            <h2 className="text-white font-bold text-2xl tracking-wide text-center">{user.name} {user.surname}</h2>
                        </div>
                        <p className="text-gray-400 font-semibold mt-4 mb-8 text-center" >
                            {user.email}
                        </p>
                        <Link to={route(ProfileRoutes.EditProfile, { id: user.id })}>
                            <Button>{t('buttons.edit')}</Button>
                        </Link>
                    </section>
                </div>
            </header>
        </>
    )
}

export default Profile
