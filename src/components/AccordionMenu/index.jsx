import { useState } from 'react';
import styles from './styles.module.scss';
import cls from 'classnames';
import { FaAngleDown } from 'react-icons/fa6';
import { GoHorizontalRule } from 'react-icons/go';

function AccordionMenu({ titleMenu, contentJsx, onClick, isSelected }) {
   const {
      container,
      title,
      activeTitle,
      contentMenu,
      isvisibility,
      borderBottom,
   } = styles;

   const handleToggle = () => {
      onClick();
   };

   return (
      <div className={container}>
         <div
            className={cls(title, {
               [activeTitle]: isSelected,
            })}
            onClick={handleToggle}
         >
            {isSelected ? (
               <GoHorizontalRule style={{ fontSize: ' 18px' }} />
            ) : (
               <FaAngleDown style={{ fontSize: ' 18px' }} />
            )}
            {titleMenu}
         </div>

         <div
            className={cls(contentMenu, borderBottom, {
               [isvisibility]: isSelected,
            })}
         >
            {contentJsx}
         </div>
      </div>
   );
}

export default AccordionMenu;
