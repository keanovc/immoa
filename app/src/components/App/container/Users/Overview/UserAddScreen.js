import { useState } from "react";
import useMutation from "../../../../../core/hooks/useMutation";
import { useTranslation } from "react-i18next";

const UserAddScreen = () => {
    const { t } = useTranslation();

    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        role: "",
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const { isLoading, error, mutate } = useMutation();

    const handleSubmit = (e) => {
        e.preventDefault();

        mutate(`${process.env.REACT_APP_API_URL}/users`, {
            method: "POST",
            data,
            onSuccess: (data) => {
                setData(data);
            }
        });
    };

    const roles = [
        {
          id: 1,
          name: t('fields.admin'),
        },
        {
          id: 2,
          name: t('fields.user'),
        },
        {
          id: 3,
          name: t('fields.realtor'),
        }
    ];

    return (
        isLoading ? (
            <div>Loading</div>
          ) : (
            <div className="w-4/12 mx-auto mt-36">
              <p>{error}</p>
              <form onSubmit={handleSubmit} className="px-10 py-8 rounded text-black w-full">
                <h1 className="mb-16 text-3xl text-center">{t('users.create')}</h1>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <input 
                            type="text"
                            className="block border border-gray-300 w-full p-3 rounded mb-4"
                            name="name"
                            placeholder={t('fields.firstname')}
                            value={data.name}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <input 
                          type="text"
                          className="block border border-gray-300 w-full p-3 rounded mb-4"
                          name="surname"
                          placeholder={t('fields.lastname')}
                          value={data.surname}
                          onChange={handleChange}
                          required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 md:w-1/2">
                      <input 
                          type="email"
                          className="block border border-gray-300 w-full p-3 rounded mb-4"
                          name="email"
                          placeholder={t('fields.email')}
                          value={data.email}
                          onChange={handleChange}
                          required />
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <select name="role" id="role" className="block border border-gray-300 w-full p-3 rounded mb-4" onChange={handleChange}>
                        {roles.map(role => {
                          if (role.name !== data.role) {
                            return (
                              <option key={role.id} value={role.name}>
                                {role.name}
                              </option>
                            );
                          }
                        })}
                      </select>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <input 
                          type="password"
                          className="block border border-gray-300 w-full p-3 rounded mb-4"
                          name="password"
                          placeholder={t('fields.password')}
                          value={data.password}
                          onChange={handleChange}
                          required />
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full text-center py-3 rounded bg-gray-800 text-white hover:bg-green-dark focus:outline-none my-1"
                >{t('buttons.create')}</button>
            </form>
          </div>
        )
    )
}

export default UserAddScreen
