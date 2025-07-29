import InputComon from '@components/InputComon/InputComon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function LogIn() {
   const { container, title, boxRememberMe, lostPw } = styles;

   return (
      <div className={container}>
         <div className={title}>Sign in</div>

         <InputComon label="Email" type="text" isRequired />
         <InputComon label="Password" type="password" isRequired />

         <div className={boxRememberMe}>
            <input type="checkbox" />
            <span>Remember me</span>
         </div>

         <Button content="LOG IN" />

         <div className={lostPw}>Lost your password ?</div>
      </div>
   );
}

export default LogIn;
