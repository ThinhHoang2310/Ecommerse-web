import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import cartIcon from '@icons/svgs/carticon.svg';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

function Cart() {
   const { container, total, boxBtn } = styles;

   const { listProductCart } = useContext(SideBarContext);

   return (
      <div className={container}>
         <div>
            <HeaderSideBar
               icon={
                  <img width={21} height={21} src={cartIcon} alt="cartIcon" />
               }
               title={'CART'}
            />
            {listProductCart.map((item, index) => {
               return <ItemProduct key={index}
                  src={item.images[0]}
                  nameProduct={item.name}
                  priceProduct={item.price}
                  skuProduct={item.sku}
                  sizeProduct={item.size}
                  quantity={item.quantity}
               
               />;
            })}
         </div>

         <div>
            <div className={total}>
               <p>TOTAL</p>
               <p>200KUSD</p>
            </div>

            <div className={boxBtn}>
               <Button content={'VIEW CART'} />
               <Button content={'CHECKOUT'} isPrimary={false} />
            </div>
         </div>
      </div>
   );
}

export default Cart;
