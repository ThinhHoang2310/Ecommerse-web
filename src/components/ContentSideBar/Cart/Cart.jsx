import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import cartIcon from '@icons/svgs/carticon.svg';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function Cart() {
   const { container, total, boxBtn } = styles;

   return (
      <div className={container}>
         <div>
            <HeaderSideBar
               icon={
                  <img width={21} height={21} src={cartIcon} alt="cartIcon" />
               }
               title={'CART'}
            />
            <ItemProduct />
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
