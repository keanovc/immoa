import { Link } from "react-router-dom";

const Table = ({ data = [], handleDelete, route, button }) => {
    return (
        <div className="container flex justify-center mx-auto mt-36">
            <div className="w-full overflow-x-auto flex flex-col">
                <div className="border-b border-gray-200">
                    <div className="flex justify-end py-2 mb-5">
                        <Link to={route} className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded">
                            {button}
                        </Link>
                    </div>
                    <table className="w-full divide-y divide-gray-300 ">
                        <thead className="bg-gray-100">
                            <tr>
                                {
                                    Object.keys(data[0]).map((key, index) => (
                                        <th className="px-6 py-2 text-xs text-left text-gray-500" key={index}>{key}</th>
                                    ))
                                }
                                <th className="px-6 py-2 text-xs text-left text-gray-500">
                                    edit
                                </th>
                                <th className="px-6 py-2 text-xs text-left text-gray-500">
                                    delete
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                               {
                                    data.map((item, index) => (
                                        <tr key={index} className="whitespace-nowrap">
                                            {
                                                Object.values(item).map((value, index) => (
                                                    <td className="px-6 py-5 text-xs text-left text-gray-700" key={index}>{value}</td>
                                                ))
                                            }
                                            <td className="px-6 py-5 text-xs text-left text-gray-700">
                                                <Link to={`/admin/users/${item.id}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </Link>
                                            </td>
                                            <td className="px-6 py-5 text-xs text-left text-gray-700">
                                                <button onClick={handleDelete}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400 cursor-pointer" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                               }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table
