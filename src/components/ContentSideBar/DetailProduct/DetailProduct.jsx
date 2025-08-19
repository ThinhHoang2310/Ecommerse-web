import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from './styles.module.scss';
import SliderComon from '@components/SliderComon/SliderComon';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import Button from '@components/Button/Button';

import cartIcon from '@icons/svgs/carticon.svg';
import realoadIcon from '@icons/svgs/reloadicon.svg';
import heartIcon from '@icons/svgs/hearticon.svg';

function DetailProduct() {
   const {
      container,
      title,
      price,
      des,
      boxSize,
      size,
      label,
      boxAddToCart,
      boxIconAddToCart,
      boxOr,
      line,
      or,
      boxAddOther,
      boxFooter,
   } = styles;

   const { detailProduct } = useContext(SideBarContext);

   const showOptions = [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' },
      { label: '6', value: '6' },
      { label: '7', value: '7' },
      { label: '8', value: '8' },
      { label: '9', value: '9' },
      { label: '10', value: '10' },
   ];

   return (
      <div className={container}>
         <SliderComon data={detailProduct.images} />

         <div className={title}>{detailProduct.name}</div>
         <div className={price}>${detailProduct.price}</div>
         <div className={des}>{detailProduct.description}</div>

         <div className={label}>Size</div>
         <div className={boxSize}>
            {detailProduct.size.map((item, index) => {
               return (
                  <div className={size} key={index}>
                     {item.name}
                  </div>
               );
            })}
         </div>

         <div className={boxAddToCart}>
            <SelectBox options={showOptions} type="show" />

            <div>
               <Button
                  content={
                     <div className={boxIconAddToCart}>
                        <img
                           width={18}
                           height={18}
                           src={cartIcon}
                           alt="cartIcon"
                        />
                        ADD TO CART
                     </div>
                  }
               />
            </div>
         </div>

         <div className={boxOr}>
            <div className={line} />
            <div className={or}>OR</div>
            <div className={line} />
         </div>

         <Button
            content={
               <div
                  style={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     gap: '10px',
                  }}
               >
                  <img width={18} height={18} src={cartIcon} alt="cartIcon" />
                  SELECT OPTIONS
               </div>
            }
         />

         <div className={boxAddOther}>
            <img width={22} height={22} src={realoadIcon} alt="realoadIcon" />
            <div>Add to compare</div>
         </div>

         <div className={boxAddOther}>
            <img width={22} height={22} src={heartIcon} alt="heartIcon" />
            <div>Add to wishlist</div>
         </div>
{/* 
         <div>
            SKU: <span>9999</span>
         </div>

         <div className={boxFooter}>
            Caterogy <span>9999</span>
         </div>
   
         <div className={boxFooter}>
            Estimate delivery <span>2 - 4 days</span>
         </div>

         <div className={boxFooter}>
            Share <span>9999</span>
         </div> */}
      </div>
   );
}

export default DetailProduct;
