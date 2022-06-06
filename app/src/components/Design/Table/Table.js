import { Link } from "react-router-dom";
import { route } from "../../../core/routing";
import DeleteButton from "../../App/Shared/Button/DeleteButton";
import { AiFillEye } from "react-icons/ai";

const Table = ({ data = [], handleDelete, add, button, detail, group }) => {
    return (
        <div className="container flex justify-center mx-auto mt-36 mb-10 px-5">
            <div className="w-full flex flex-col">
                <div className="border-b border-gray-200">
                    <div className="flex justify-end py-2 mb-5">
                        <Link to={add} className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded">
                            {button}
                        </Link>
                    </div>
                    <div className="w-full overflow-x-scroll scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-gray-700 rounded-md">
                        <table className="w-full divide-y divide-gray-300 ">
                            <thead className="bg-gray-100">
                                {
                                    data.length === 0 ? (
                                        null
                                    ) : (
                                        <tr>
                                            <th className="px-6 py-2 text-xs text-left text-gray-500">
                                                view
                                            </th>
                                            {
                                                Object.keys(data[0]).map((key, index) => (
                                                    <th className="px-6 py-2 text-xs text-left text-gray-500" key={index}>{key}</th>
                                                ))
                                            }
                                            <th className="px-6 py-2 text-xs text-left text-gray-500">
                                                delete
                                            </th>
                                        </tr>
                                    )
                                }
                            </thead>
                            <tbody className="divide-y divide-gray-300">
                                {
                                    data.length === 0 ? (
                                        <tr>
                                            <td className="flex justify-center px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 uppercase" colSpan="4">
                                                No data
                                            </td>
                                        </tr>
                                    ) : (
                                        data.map((item, index) => (
                                            <tr key={index} className="whitespace-nowrap">
                                                <td className="px-6 py-5 text-xs text-left text-gray-700">
                                                    <Link to={route(detail, { id: item.id, })}>
                                                        <AiFillEye className="text-indigo-500 text-3xl" />
                                                    </Link>
                                                </td>
                                                {
                                                    Object.keys(item).map((key, index) => {
                                                        if (item[key] === false) {
                                                            return (
                                                                <td className="px-6 py-5 text-xs text-left text-gray-700" key={index}>0</td>
                                                            )
                                                        }
                                                        if (item[key] === true) {
                                                            return (
                                                                <td className="px-6 py-5 text-xs text-left text-gray-700" key={index}>1</td>
                                                            )
                                                        }
                                                        if (typeof item[key] === 'object' && item[key] !== null) {
                                                            return (
                                                                <td className="px-6 py-5 text-xs text-left text-gray-700" key={index}>{item[key].name}</td>
                                                            )
                                                        }
                                                        return (
                                                            <td className="px-6 py-5 text-xs text-left text-gray-700" key={index}>{item[key]}</td>
                                                        )
                                                    })
                                                }
                                                <td className="px-6 py-5 text-xs text-left text-gray-700">
                                                    <DeleteButton onSuccess={handleDelete} id={item.id} scope={group} />
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
