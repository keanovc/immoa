import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import useFetch from "../../../../core/hooks/useFetch";
import { formatPrice } from "../../../../core/modules/users/utils";
import { BiArea } from 'react-icons/bi';
import { useAuthContext } from "../../Auth/AuthProvider";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthRoutes } from "../../../../core/routing";
import { getImagePath } from "../../../../core/helpers/api";
import Input from "../../../Design/Form/Input";
import Button from "../../../Design/Button/Button";

const Detail = () => {
  const { t } = useTranslation();

  const { auth } = useAuthContext();
  const { id } = useParams();
  const { data } = useFetch(auth ? `/properties/${id}` : `/propertiespublic/${id}`);

  const [show, setShow] = useState(true);

  const handleAlert = () => {
    if (show) {
      setShow(false);
    }
    else {
      setShow(true);
    }
  }


  return (
    <>
      {
        data ? (
          <>
            <header id="up" className="bg-center bg-no-repeat bg-cover h-[60vh] relative" style={{ backgroundImage: `url(${getImagePath(data.image)})` }}>
              <div className="h-full bg-opacity-50 bg-black flex items-center justify-center flex-col"></div>
            </header>

            <section className="text-gray-700 body-font overflow-hidden">
              <div className="container px-5 pt-6 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <div className="lg:w-1/2 w-full lg:pl-0 lg:py-6 mt-6 lg:mt-0">
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 uppercase">{data.type}</h1>
                    <p className="leading-relaxed">{data.description}</p>
                    <hr className="my-10 border-gray-500"/>
                    <div className="flex">
                      <span className="title-font font-medium text-2xl text-gray-900">{formatPrice(data.price)}</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full lg:pl-20 lg:pt-6 lg:mt-0">
                    <div className="flex p-4 text-gray-700">
                      <div className="flex-1 inline-flex items-center">
                          <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                          </svg>
                          <p><span className="text-gray-900 font-bold">{data.rooms}</span> {t('fields.rooms')}</p>
                      </div>
                      <div className="flex-1 inline-flex items-center">
                          <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"></path>
                          </svg>
                          <p><span className="text-gray-900 font-bold">{data.bathrooms}</span> {t('fields.bathrooms')}</p>
                      </div>
                      <div className="flex-1 inline-flex items-center">
                          <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <BiArea className='text-2xl'/>
                          </svg>
                          <p><span className="text-gray-900 font-bold">{data.area}</span> m²</p>
                      </div>
                    </div>
                    <hr className="my-5 border-gray-500"/>
                    <div className="flex flex-col px-4 pt-2 pb-5">
                      <div className="inline-flex items-center">
                        <div className="inline-flex items-center">
                          <h2 className="text-md title-font text-gray-500 tracking-widest uppercase">{t('fields.city')}</h2>
                          <h1 className="text-gray-900 px-4 text-xl title-font font-medium mb-1">{data.zipCode} {data.city}</h1>
                        </div>
                        <div className="inline-flex items-center">
                          <h2 className="text-md title-font text-gray-500 ml-10 tracking-widest uppercase">{t('fields.year')}</h2>
                          <h1 className="text-gray-900 px-4 text-xl title-font font-medium mb-1">{data.year}</h1>
                        </div>
                     </div>
                      {
                        auth ? (
                          <>
                          <div className="inline-flex items-center mt-5">
                            <h2 className="text-md title-font text-gray-500 tracking-widest uppercase">{t('fields.address')}</h2>
                            <h1 className="text-gray-900 px-4 text-xl title-font font-medium mb-1">{data.address}</h1>
                          </div>
                          <div className="inline-flex mt-5">
                            <h2 className="text-md title-font text-gray-500 tracking-widest uppercase mt-1">{t('fields.agency')}</h2>
                            <div className="flex-col">
                              <h1 className="text-gray-900 px-4 text-xl title-font font-medium mb-1">{data.agency.name}</h1>
                              <h1 className="text-gray-900 px-4 text-xl title-font font-medium mb-1">{data.agency.phone}</h1>
                            </div>
                          </div>
                          <hr className="my-5 border-gray-500"/>
                          <h2 className="text-md title-font text-gray-500 tracking-widest uppercase pt-5">{t('contact.contactMe')}</h2>
                          <div className="py-7 px-10 flex justify-center">
                          <form className="text-black w-full">
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full md:w-1/2 px-3">
                                    <Input type={'text'} name={'name'} placeholder={t('fields.firstname')} />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                    <Input type={'text'} name={'surname'} placeholder={t('fields.lastname')} />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                    <Input type={'email'} name={'email'} placeholder={t('fields.email')} />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                <textarea 
                                        type="text"
                                        className="block border border-gray-300 w-full p-3 rounded mb-4 h-36 resize-none"
                                        name="message"
                                        placeholder={t('fields.message')}
                                        required />
                                </div>
                            </div>
                            <Button type={'submit'}>
                                {t('buttons.send')}
                            </Button>
                          </form>
                          </div>
                          </>
                        ) : (
                          null
                        )
                      }
                    </div>
                    {
                      !auth ?
                        <>
                          <div id="alert-additional-content-5" className={`p-4 mb-5 bg-gray-100 rounded-lg dark:bg-gray-500 ${show ? "block" : "hidden"}`} role="alert">
                            <div className="flex items-center">
                              <svg className="mr-2 w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Warning</h3>
                            </div>
                            <div className="mt-2 mb-4 text-sm text-gray-700 dark:text-gray-300">
                              If you want to like, contact the realtor or check the address of the property please login below.
                            </div>
                            <div className="flex">
                              <Link to={AuthRoutes.Signin}><button type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600">
                                Login
                              </button></Link>
                              <button onClick={handleAlert} type="button" className="text-gray-700 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:text-gray-300 dark:hover:text-white">
                                Close
                              </button>
                            </div>
                          </div>
                        </>
                      : null
                    }
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : null
      }
    </>
  )
}

export default Detail
