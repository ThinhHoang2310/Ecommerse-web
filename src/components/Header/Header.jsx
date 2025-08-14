import BoxIcon from './Boxicon/Boxicon';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import Logo from '@icons/images/LOGO-WILL_T-STORE.png';
import realoadIcon from '@icons/svgs/reloadicon.svg';
import heartIcon from '@icons/svgs/hearticon.svg';
import cartIcon from '@icons/svgs/carticon.svg';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProvider';

import { TfiReload } from 'react-icons/tfi';
// import { FaRegHeart } from "react-icons/fa";
import { FaRegHeart } from 'react-icons/fa6';
import { CiShoppingCart } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function MyHeader() {
   const {
      container,
      containerBoxIcon,
      containerMenu,
      containerHeader,
      containerBox,
      FixedHeader,
      topHeader,
      boxCart,
      quantity,
   } = styles;

   const { scrollPosition } = useScrollHandling();
   const [fixedPosition, setFixedPosition] = useState(false);

   const { setIsOpen, setType, userId, listProductCart } =
      useContext(SideBarContext);

   const { userInfo } = useContext(StoreContext);

   const handleOpenSideBar = type => {
      setIsOpen(true);
      setType(type);
   };

   useEffect(() => {
      //Cách 1: If Else
      // if (scrollPosition > 75) {
      //    setFixedPosition(true);
      // } else {
      //    setFixedPosition(false);
      // }

      // Cách 2: Toán tử 3 ngôi
      // setFixedPosition(scrollPosition > 75 ? true : false);

      // Cách 3:Ném thẳng vào câu điều kiện,sẽ tự động hiểu là True Fasle lun
      setFixedPosition(scrollPosition > 75);
   }, [scrollPosition]);

   return (
      <div
         className={classNames(container, topHeader, {
            [FixedHeader]: fixedPosition,
         })}
      >
         <div className={containerHeader}>
            <div className={containerBox}>
               <div className={containerBoxIcon}>
                  {dataBoxIcon.map(item => {
                     return <BoxIcon type={item.type} href={item.href} />;
                  })}
               </div>

               <div className={containerMenu}>
                  {dataMenu.slice(0, 3).map(item => {
                     return <Menu content={item.content} href={item.href} />;
                  })}
               </div>
            </div>
            <div style={{ cursor: 'pointer' }}>
               <Link to="/">
                  <img
                     src={Logo}
                     alt="logo"
                     style={{
                        width: '160px',
                        height: '56px',
                        marginTop: '10px',
                     }}
                  />
               </Link>
            </div>
            <div className={containerBox}>
               <div className={containerMenu}>
                  {dataMenu.slice(3, dataMenu.length).map(item => {
                     return (
                        <Menu
                           content={item.content}
                           href={item.href}
                           setIsOpen={setIsOpen}
                        />
                     );
                  })}
               </div>

               <div className={containerBoxIcon}>
                  <img
                     width={22}
                     height={22}
                     src={realoadIcon}
                     alt="realoadIcon"
                     onClick={() => handleOpenSideBar('compare')}
                  />
                  <img
                     width={22}
                     height={22}
                     src={heartIcon}
                     alt="heartIcon"
                     onClick={() => handleOpenSideBar('wishlist')}
                  />
                  <div className={boxCart}>
                     <img
                        width={22}
                        height={22}
                        src={cartIcon}
                        alt="cartIcon"
                        onClick={() => handleOpenSideBar('cart')}
                     />
                     <div className={quantity}>{listProductCart.length}</div>
                  </div>

                  {/* <TfiReload style={{ fontSize: '20px' }} onClick={() => handleOpenSideBar('compare')}  />
                  <FaRegHeart style={{ fontSize: '24px' }}  onClick={() => handleOpenSideBar('wishlist')}/>
                  <FiShoppingCart style={{ fontSize: '24px' }}   onClick={() => handleOpenSideBar('cart')}/> */}
               </div>
            </div>
         </div>
      </div>
   );
}

export default MyHeader;
