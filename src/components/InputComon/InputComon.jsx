import styles from './styles.module.scss';

import { IoEyeOutline } from 'react-icons/io5';
import { IoEyeOffOutline } from 'react-icons/io5';
import { useState } from 'react';

function InputComon({ label, type, isRequired = false, ...props }) {
   const { labelInput, boxInput, container, boxIcon, errorMsg } = styles;
   const { formik, id } = props;

   const [showPassword, setShowPassword] = useState(false);

   const isPassword = type === 'password';
   const isShowTextPassword =
      type === 'password' && showPassword ? 'text' : type;

   const handleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   const isErr = formik.touched[id] && formik.errors[id];
   const messageErr = formik.errors[id];


   return (
      <div className={container}>
         <div className={labelInput}>
            {label} {isRequired && <span>*</span>}
         </div>
         <div className={boxInput}>
            <input
               type={isShowTextPassword}
               {...props}
               onBlur={formik.handleBlur}
               onChange={formik.handleChange}
               value={formik.values[id]}
            />
            {isPassword && (
               <div className={boxIcon} onClick={handleShowPassword}>
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
               </div>
            )}

            {isErr && <div className={errorMsg}>{messageErr}</div>}
         </div>
      </div>
   );
}

export default InputComon;
