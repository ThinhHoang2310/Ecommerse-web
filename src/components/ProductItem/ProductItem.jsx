import styles from './styles.module.scss';

import realoadIcon from '@icons/svgs/reloadicon.svg';
import heartIcon from '@icons/svgs/hearticon.svg';
import cartIcon from '@icons/svgs/carticon.svg';
import BoxIcon from '@components/Header/Boxicon/Boxicon';
import { FaEye } from 'react-icons/fa';

import cls from 'classnames';
import Button from '@components/Button/Button';
import { use, useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { addProductToCart } from '@/apis/cartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { useNavigate } from 'react-router-dom';
import { handleAddProductToCartCommon } from '@/ultis/helper';

function ProductItem({
   src,
   prevSrc,
   name,
   price,
   details,
   isHomePage = true,
   slideItem = false,
}) {
   const [sizeChoose, setSizeChoose] = useState('');

   const ourShopStore = useContext(OurShopContext);
   const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);

   const userId = Cookies.get('userId');

   const { setIsOpen, setType, handleGetListProductCart, setDetailProduct } =
      useContext(SideBarContext);

   const { toast } = useContext(ToastContext);

   const [isLoading, setIsLoading] = useState(false);

   const navigate = useNavigate();

   const {
      boxImg,
      showImgWhenHover,
      showFncWhenHover,
      boxIcon,
      title,
      priceBox,
      boxSize,
      size,
      textCenter,
      boxBtn,
      content,
      containerItem,
      leftBtn,
      largeImg,
      isActiveSize,
      btnClear,
   } = styles;

   const handleChooseSize = size => {
      setSizeChoose(size);
   };

   const handleClearSize = () => {
      setSizeChoose('');
   };

   const handleAddToCart = () => {
      handleAddProductToCartCommon(
         userId,
         setIsOpen,
         setType,
         toast,
         sizeChoose,
         details._id,
         1,
         setIsLoading,
         handleGetListProductCart
      );
   };

   const handleShowDetailProductSideBar = () => {
      setIsOpen(true);
      setType('detail');
      setDetailProduct(details);
   };

   const handleNavigateToDetail = () => {
      const path = `/product/${details._id}`;
      navigate(path);
   };

   useEffect(() => {
      if (isHomePage) {
         setIsShowGrid(true);
      } else {
         setIsShowGrid(ourShopStore?.isShowGrid);
      }
   }, [isHomePage, ourShopStore?.isShowGrid]);

   useEffect(() => {
      if (slideItem) setIsShowGrid(true);
   }, [slideItem]);

   return (
      <div
         className={isShowGrid ? '' : containerItem}
         style={{ cursor: 'pointer' }}
      >
         <div
            className={cls(boxImg, { [largeImg]: !isShowGrid })}
            // onClick={handleNavigateToDetail}
         >
            <img src={src} alt="" onClick={handleNavigateToDetail} />
            <img
               src={prevSrc}
               alt=""
               className={showImgWhenHover}
               onClick={handleNavigateToDetail}
            />

            <div className={showFncWhenHover}>
               <div className={boxIcon} onClick={handleAddToCart}>
                  <img src={cartIcon} alt="" />
               </div>

               <div
                  className={boxIcon}
                  onClick={() => {
                     setIsOpen(true);
                     setType('wishlist');
                  }}
               >
                  <img src={heartIcon} alt="" />
               </div>

               <div
                  className={boxIcon}
                  onClick={() => {
                     setIsOpen(true);
                     setType('compare');
                  }}
               >
                  <img src={realoadIcon} alt="" />
               </div>

               <div
                  className={boxIcon}
                  onClick={handleShowDetailProductSideBar}
               >
                  <FaEye style={{ fontSize: '18px' }} />
               </div>
            </div>
         </div>

         <div className={isShowGrid ? '' : content}>
            {!isHomePage && (
               <div className={boxSize}>
                  {details.size.map((item, index) => {
                     return (
                        <div
                           key={index}
                           className={cls(size, {
                              [isActiveSize]: sizeChoose === item.name,
                           })}
                           onClick={() => handleChooseSize(item.name)}
                        >
                           {item.name}
                        </div>
                     );
                  })}
               </div>
            )}

            {sizeChoose && (
               <div className={btnClear} onClick={() => handleClearSize()}>
                  Clear
               </div>
            )}

            <div
               className={cls(title, {
                  [textCenter]: !isHomePage,
               })}
            >
               {name}
            </div>
            {!isHomePage && (
               <div
                  className={textCenter}
                  style={{
                     color: '#888',
                  }}
               >
                  Brand01
               </div>
            )}

            <div
               className={cls(priceBox, { [textCenter]: !isHomePage })}
               style={{
                  color: isHomePage ? '#333' : '#888',
               }}
            >
               ${price}
            </div>

            {!isHomePage && (
               <div className={cls(boxBtn, { [leftBtn]: !isShowGrid })}>
                  <Button
                     content={isLoading ? <LoadingTextCommon /> : 'ADD TO CART'}
                     onClick={handleAddToCart}
                  />
               </div>
            )}
         </div>
      </div>
   );
}

export default ProductItem;
