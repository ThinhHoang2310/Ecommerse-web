import styles from './styles.module.scss';

import realoadIcon from '@icons/svgs/reloadicon.svg';
import heartIcon from '@icons/svgs/hearticon.svg';
import cartIcon from '@icons/svgs/carticon.svg';
import BoxIcon from '@components/Header/Boxicon/Boxicon';

import cls from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';

function ProductItem({
   src,
   prevSrc,
   name,
   price,
   details,
   isHomePage = true,
}) {
   const { isShowGrid } = useContext(OurShopContext);

   const [sizeChoose, setSizeChoose] = useState('');

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

   console.log(sizeChoose);

   return (
      <div className={isShowGrid ? '' : containerItem}>
         <div className={cls(boxImg, { [largeImg]: !isShowGrid })}>
            <img src={src} alt="" />
            <img src={prevSrc} alt="" className={showImgWhenHover} />

            <div className={showFncWhenHover}>
               <div className={boxIcon}>
                  <img src={cartIcon} alt="" />
               </div>
               <div className={boxIcon}>
                  <img src={heartIcon} alt="" />
               </div>
               <div className={boxIcon}>
                  <img src={realoadIcon} alt="" />
               </div>
               <div className={boxIcon}>
                  <img src={cartIcon} alt="" />
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
               <div className={btnClear} onClick={() =>handleClearSize()}>
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
                  <Button content={'ADD TO CART'} />
               </div>
            )}
         </div>
      </div>
   );
}

export default ProductItem;
