import { useTranslation } from "react-i18next";
import useTitle from "../../../../core/hooks/useTitle";
import { useOutletContext } from "react-router-dom";
import { formatName } from "../../../../core/modules/users/utils";
import { Link } from "react-router-dom";
import { ProfileRoutes } from "../../../../core/routing";

const Profile = () => {
    const { t } = useTranslation();
    const { user } = useOutletContext();
    
    useTitle(user ? formatName(user) : "");

    return (
        <>
            <header className="profile bg-center bg-no-repeat bg-cover h-screen relative flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <section class="w-96 mx-auto bg-black rounded-2xl px-8 py-6 shadow-lg bg-opacity-60 backdrop-filter backdrop-blur-xl">
                        <div class="mt-6 w-fit mx-auto">
                            <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" class="rounded-full w-28" alt="profile" />
                        </div>
                        <div class="mt-8 ">
                            <h2 class="text-white font-bold text-2xl tracking-wide text-center">{user.name} {user.surname}</h2>
                        </div>
                        <p class="text-gray-400 font-semibold mt-4 text-center" >
                            {user.email}
                        </p>
                        <Link to={ProfileRoutes.EditProfile}>
                            <button className="w-full text-center py-3 mt-10 rounded-xl bg-gray-400 text-black hover:bg-green-dark focus:outline-none my-1 transform transition duration-300 hover:scale-105 ease-in-out">{t('buttons.edit')}</button>
                        </Link>
                    </section>
                </div>
            </header>
        </>
    )
}

export default Profile
