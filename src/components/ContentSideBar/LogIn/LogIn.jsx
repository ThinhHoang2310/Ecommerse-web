import InputComon from '@components/InputComon/InputComon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';

import { ToastContext } from '@/contexts/ToastProvider';
import { register, signIn, getInfo } from '@/apis/authService';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProvider';

function LogIn() {
   const { container, title, boxRememberMe, lostPw } = styles;
   const [isRegister, setIsRegister] = useState(false);

   const [isLoading, setIsLoading] = useState(false);

   const { toast } = useContext(ToastContext);
   const { setIsOpen } = useContext(SideBarContext);
   const { setUserId } = useContext(StoreContext);

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

         const { email: username, password } = values;

         setIsLoading(true);

         if (isRegister) {
            await register({ username, password })
               .then(res => {
                  toast.success(res.data.message);
                  setIsLoading(false);
               })
               .catch(err => {
                  toast.error(err.response.data.message);
                  setIsLoading(false);
               });
         }

         if (!isRegister) {
            await signIn({ username, password })
               .then(res => {
                  setIsLoading(false);
                  const { id, token, refreshToken } = res.data;
                  setUserId(id);
                  Cookies.set('token', token);
                  Cookies.set('refreshToken', refreshToken);
                  Cookies.set('userId', id);

                  toast.success('Sign in successfully');
                  setIsOpen(false);
                  // handleGetListProductsCart(id, 'cart');
               })
               .catch(err => {
                  setIsLoading(false);
                  toast.error('Sign in failed');
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
               content={
                  isLoading ? 'LOADING...' : isRegister ? 'REGISTER' : 'SIGN IN'
               }
               type="submit"
            />
         </form>

         <Button
            content={
               isRegister
                  ? 'Already have an account'
                  : "Don't have an account ?"
            }
            isPrimary={false}
            style={{ marginTop: '10px' }}
            onClick={handleToggleRegister}
         />

         {!isRegister && <div className={lostPw}>Lost your password ?</div>}
      </div>
   );
}

export default LogIn;
