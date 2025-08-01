import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { IoCloseOutline } from 'react-icons/io5';
import LogIn from '@components/ContentSideBar/LogIn/LogIn';
import Compare from '@components/ContentSideBar/Compare/Compare';
import WishList from '@components/ContentSideBar/WishList/WishList';
import Cart from '@components/ContentSideBar/Cart/Cart';

function SideBar() {
   const { container, overlay, sideBar, sliderSideBar, boxIcon } = styles;
   const { isOpen, setIsOpen, type } = useContext(SideBarContext);

   const handleToggle = () => {
      setIsOpen(!isOpen);
   };

   const handleRenderContent = () => {
      switch (type) {
         case 'login':
            return <LogIn />;

         case 'compare':
            return <Compare />;

         case 'wishlist':
            return <WishList />;
         case 'cart':
            return <Cart />;
         default:
            return <LogIn />;
      }
   };

   return (
      <div className={container}>
         <div
            className={classNames({
               [overlay]: isOpen,
            })}
            onClick={handleToggle}
         />
         <div
            className={classNames(sideBar, {
               [sliderSideBar]: isOpen,
            })}
         >
            {isOpen && (
               <div className={boxIcon} onClick={handleToggle}>
                  <IoCloseOutline />
               </div>
            )}

            {handleRenderContent()}
         </div>
      </div>
   );
}

export default SideBar;
