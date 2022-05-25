import {useState} from 'react'
import * as MaterialDesign from "react-icons/md";

const PasswordInput = ({onChange, value}) => {
    const [isVisable, setIsVisable] = useState(false)

    const handleClick = () => {
        setIsVisable(!isVisable)
    }

  return (
    <div className="flex relative mt-3 ">
        <input type={isVisable ? 'text' : 'password' } required className='block border border-gray-300 w-full p-3 rounded mb-4' placeholder='Password' name="password" value={value} onChange={onChange} />
        <button type='button' className={'absolute top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2 '} onClick={handleClick}>
          {
            isVisable ? <MaterialDesign.MdVisibility /> : <MaterialDesign.MdVisibilityOff />
          }
        </button>
    </div>
  )
}

export default PasswordInput