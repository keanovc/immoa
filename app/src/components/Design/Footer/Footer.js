import images from "../../App/constants/images"

export default function Footer() {
  return (
    <footer class="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div class="w-7/12 m-auto sm:flex sm:items-center sm:justify-between">
            <a href="#up" class="flex items-center w-32 mb-4 sm:mb-0">
                <img src={images.logowhite} alt="logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 IMMOA™. All Rights Reserved.
        </span>
    </footer>
  )
}
