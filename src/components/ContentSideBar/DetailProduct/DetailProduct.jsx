import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from './styles.module.scss';
import SliderComon from '@components/SliderComon/SliderComon';

function DetailProduct() {
   const { container, title, price, des, boxSize, size, label } = styles;

   const { detailProduct } = useContext(SideBarContext);
   console.log(detailProduct);

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
      </div>
   );
}

export default DetailProduct;
