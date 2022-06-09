import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import useTitle from "../../../../../../core/hooks/useTitle";
import { AdminRoutes, route } from "../../../../../../core/routing";
import { formatName } from "../../../../../../core/modules/users/utils";
import images from "../../../../constants/images";

const UserDetailScreen = () => {
    const { t } = useTranslation();
    const { user } = useOutletContext();

    useTitle(user ? formatName(user) : "");

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-200">
                <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs w-96">
                    <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto object-cover" src={images.placeholderProfile} alt="person"/>
                    <h1 className="text-lg text-gray-700"> {user.name} {user.surname} </h1>
                    <h3 className="text-sm text-gray-400 "> {user.role} </h3>
                    <p className="text-xs text-gray-400 mt-4"> {user.email} </p>
                    <div className="flex items-center justify-around">
                        <Link to={route(AdminRoutes.Users)}>
                            <div className="bg-gray-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide transition duration-300 hover:scale-105 ease-in-out hover:bg-gray-800">
                                {t("buttons.back")}
                            </div>
                        </Link>
                        <Link to={route(AdminRoutes.EditUser, { id: user.id })}>
                            <div className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide transition duration-300 hover:scale-105 ease-in-out hover:bg-indigo-800">
                                {t("buttons.edit")}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDetailScreen;