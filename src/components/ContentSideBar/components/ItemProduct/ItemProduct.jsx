import styles from './styles.module.scss';
import { IoCloseOutline } from 'react-icons/io5';

function ItemProduct({
   src,
   nameProduct,
   priceProduct,
   skuProduct,
   sizeProduct,
   quantity,
}) {
   const { container, boxContent, boxClose, title, size, price } = styles;

   return (
      <div className={container}>
         <img src={src} alt="" />

         <div className={boxClose}>
            <IoCloseOutline />
         </div>

         <div className={boxContent}>
            <div className={title}>{nameProduct} </div>
            <div className={size}>Size {sizeProduct}</div>
            <div className={price}>
               {quantity} x {priceProduct}
            </div>
            <div className={price}>{skuProduct}</div>
         </div>
      </div>
   );
}

export default ItemProduct;
