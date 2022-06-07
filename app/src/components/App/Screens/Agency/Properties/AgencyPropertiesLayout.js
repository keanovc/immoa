import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import useTitle from "../../../../../core/hooks/useTitle";

const AgencyPropertiesLayout = () => {
    const { t } = useTranslation();
    useTitle(t("nav.admin.properties"));

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default AgencyPropertiesLayout;