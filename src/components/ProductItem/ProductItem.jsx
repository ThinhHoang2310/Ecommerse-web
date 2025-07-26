import styles from './styles.module.scss';

import realoadIcon from '@icons/svgs/reloadicon.svg';
import heartIcon from '@icons/svgs/hearticon.svg';
import cartIcon from '@icons/svgs/carticon.svg';
import BoxIcon from '@components/Header/Boxicon/Boxicon';

function ProductItem({ src, prevSrc, name, price }) {
   const {
      boxImg,
      showImgWhenHover,
      showFncWhenHover,
      boxIcon,
      title,
      priceBox,
   } = styles;

   return (
      <div>
         <div className={boxImg}>
            <img
               src={src}
               alt=""
            />
            <img
               src={prevSrc}
               alt=""
               className={showImgWhenHover}
            />

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

         <div className={title}>{name}</div>
         <div className={priceBox}>{price}</div>
      </div>
   );
}

export default ProductItem;
