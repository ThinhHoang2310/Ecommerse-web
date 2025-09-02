import { FaStar } from 'react-icons/fa';
import styles from '../styles.module.scss';

function FormItem({ label, isRequired, typeChildren }) {
   const renderChildren = () => {
      switch (typeChildren) {
         case 'rating':
            return <FaStar />;
         case 'input':
            return <input type="text" />;
         case 'textarea':
            return <textarea rows={10} />;
      }
   };

   return (
      <>
         <label>
            {label} {isRequired && <span>*</span>}
         </label>
         {renderChildren()}
      </>
   );
}
weeerw

export default FormItem;
