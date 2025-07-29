import styles from '../styles.module.scss';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

function Menu({ content, href }) {
   const { menu } = styles;
   const {setIsOpen, setType} = useContext(SideBarContext);

   const handleClickShowLogin = () => {
      setIsOpen(true);
      setType('logIn');
   }


   return (
      <div className={menu} onClick={handleClickShowLogin}>
         {content}
      </div>
   );
}

export default Menu;
