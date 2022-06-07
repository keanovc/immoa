import {useState} from 'react'
import * as MaterialDesign from "react-icons/md";
import Input from './Input';

const PasswordInput = ({onChange, value, error}) => {
    const [isVisable, setIsVisable] = useState(false)

    const handleClick = () => {
        setIsVisable(!isVisable)
    }

  return (
    <div className="relative">
        <Input 
          type={isVisable ? 'text' : 'password'} 
          name={'password'} 
          placeholder={'Password'} 
          value={value} 
          onChange={onChange}
          error={error}
        />
        <button type='button' className={'absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'} onClick={handleClick}>
          {
            isVisable ? 
            <MaterialDesign.MdVisibility className='text-xl'/> : 
            <MaterialDesign.MdVisibilityOff className='text-xl'/>
          }
        </button>
    </div>
  )
}

PasswordInput.propTypes = {
  ...Input.propTypes,
};

export default PasswordInput