import images from "../../App/constants/images";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-800">
            <div className="w-7/12 m-auto sm:flex sm:items-center sm:justify-between">
                <a href="#up" className="flex items-center w-32 mb-4 sm:mb-0">
                    <img src={images.logowhite} alt="logo" />
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">{t('footer.about')}</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">{t('footer.privacypolicy')}</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">{t('footer.licensing')}</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 IMMOA™. {t('footer.rights')}
            </span>
        </footer>
    )
}
