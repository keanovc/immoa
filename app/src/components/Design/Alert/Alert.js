import { Link } from "react-router-dom";
import { AuthRoutes } from "../../../core/routing";

export const Alert = ({ label, close, show }) => {
  return (
    <div id="alert-additional-content-5" className={`p-4 mb-5 bg-gray-100 rounded-lg dark:bg-gray-500 ${show ? "block" : "hidden"}`} role="alert">
      <div class="flex items-center">
        <svg class="mr-2 w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300">Warning</h3>
      </div>
      <div class="mt-2 mb-4 text-sm text-gray-700 dark:text-gray-300">
      {label}
      </div>
      <div class="flex">
        <Link to={AuthRoutes.Signin}><button type="button" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600">
          Login
        </button></Link>
        <button onClick={close} type="button" class="text-gray-700 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:text-gray-300 dark:hover:text-white">
          Close
        </button>
      </div>
    </div>
  );
};