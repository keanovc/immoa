import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import useTitle from "../../../../core/hooks/useTitle";

const RealtorsLayout = () => {
    const { t } = useTranslation();
    useTitle(t("realtors.title"));

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default RealtorsLayout;
