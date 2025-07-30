import InputComon from '@components/InputComon/InputComon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useContext, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContext } from '@/contexts/ToastProvider';
import { register } from '@/apis/authService';

function LogIn() {
   const { container, title, boxRememberMe, lostPw } = styles;
   const [isRegister, setIsRegister] = useState(false);

   const [isLoading, setIsLoading] = useState(false);

   const { toast } = useContext(ToastContext);

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: Yup.object({
         email: Yup.string()
            .email('Invalid email address')
            .required('Email is Required'),
         password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is Required'),
         cfmpassword: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Passwords must match'
         ),
      }),
      onSubmit: async values => {
         if (isLoading) return;

         if (isRegister) {
            const { email: username, password } = values;

            setIsLoading(true);

            await register({ username, password })
               .then(res => {
                  console.log(res);
                  toast.success(res.data.message);
                  setIsLoading(false);
               })
               .catch(err => {
                  console.log(err);
                  toast.error(err.response.data.message);
                  setIsLoading(false);
               });
         }
      },
   });

   const handleToggleRegister = () => {
      setIsRegister(!isRegister);
      formik.resetForm();
   };

   return (
      <div className={container}>
         <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>

         <form onSubmit={formik.handleSubmit}>
            <InputComon
               id="email"
               label="Email"
               type="text"
               isRequired
               formik={formik}
            />

            <InputComon
               id="password"
               label="Password"
               type="password"
               isRequired
               formik={formik}
            />

            {isRegister && (
               <InputComon
                  id="cfmpassword"
                  label="Confirm password"
                  type="password"
                  isRequired
                  formik={formik}
               />
            )}

            {!isRegister && (
               <div className={boxRememberMe}>
                  <input type="checkbox" />
                  <span>Remember me</span>
               </div>
            )}

            <Button
               content={isLoading ? 'Đợi chút thằng lon' : isRegister ? 'REGISTER' : 'SIGN IN'}
               type="submit"
               // onClick={() => toast.success('Sign in successfully')}
            />
         </form>

         <Button
            content={
               isRegister
                  ? 'Already have an account'
                  : "Don't have an account ?"
            }
            type="submit"
            isPrimary={false}
            style={{ marginTop: '10px' }}
            onClick={handleToggleRegister}
         />

         {!isRegister && <div className={lostPw}>Lost your password ?</div>}
      </div>
   );
}

export default LogIn;
