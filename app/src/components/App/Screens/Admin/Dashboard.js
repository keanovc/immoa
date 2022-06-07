import { useTranslation } from "react-i18next";
import useTitle from "../../../../core/hooks/useTitle";

const Dashboard = () => {
  const { t } = useTranslation();
  useTitle(t("nav.admin.dashboard"));

  return (
    <>
      <div className="bg-gray-800 bg-no-repeat bg-center bg-cover h-screen relative flex flex-col">
        <div className="container text-white max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            DASHBOARD
        </div>
      </div>
    </>
  )
}

export default Dashboard
