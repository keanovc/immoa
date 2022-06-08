import images from "../../App/constants/images";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="p-4 bg-gray-800 shadow  mt-10 md:mt-0 md:px-6 md:py-8">
            <div className="flex items-center justify-center">
                <a href="#up" className="flex items-center w-32">
                    <img src={images.logowhite} alt="logo" />
                </a>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="text-sm text-gray-500 flex justify-center">© 2022 IMMOA™. {t('footer.rights')}
            </span>
        </footer>
    )
}
