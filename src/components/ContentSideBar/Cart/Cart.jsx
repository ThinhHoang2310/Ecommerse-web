import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import cartIcon from '@icons/svgs/carticon.svg';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import cls from 'classnames';
import { useNavigate } from 'react-router-dom';

function Cart() {
   const {
      container,
      total,
      boxBtn,
      containerListProductCart,
      overlayLoading,
      price,
      isEmty,
      boxEmty,
      textEmty,
      boxBtnEmty,
      containerListItem,
   } = styles;

   const navigate = useNavigate();

   const { listProductCart, isLoading, setIsOpen } = useContext(SideBarContext);

   const handleNavigateToShop = () => {
      navigate('/shop');
      setIsOpen(false);
   };

   const subTotal = listProductCart.reduce((acc, item) => {
      return acc + item.total;
   }, 0);

   const handleNavigateCart = () => {
      navigate('/cart');
      setIsOpen(false);
   };

   return (
      <div
         className={cls(container, {
            [isEmty]: !listProductCart.length,
         })}
      >
         <HeaderSideBar
            icon={<img width={21} height={21} src={cartIcon} alt="cartIcon" />}
            title={'CART'}
         />
         {listProductCart.length ? (
            <div className={containerListItem}>
               <div>
                  {isLoading ? (
                     <LoadingTextCommon />
                  ) : (
                     listProductCart.map((item, index) => {
                        return (
                           <ItemProduct
                              key={index}
                              src={item.images[0]}
                              nameProduct={item.name}
                              priceProduct={item.price}
                              skuProduct={item.sku}
                              sizeProduct={item.size}
                              quantity={item.quantity}
                              productId={item.productId}
                              userId={item.userId}
                           />
                        );
                     })
                  )}
               </div>

               <div>
                  <div className={total}>
                     <p>TOTAL:</p>
                     <p className={price}>${subTotal}</p>
                  </div>

                  <div className={boxBtn}>
                     <Button
                        onClick={handleNavigateCart}
                        content={'VIEW CART'}
                     />
                     <Button content={'CHECKOUT'} isPrimary={false} />
                  </div>
               </div>
            </div>
         ) : (
            <div className={boxEmty}>
               <div>No Product in the cart.</div>
               <div className={boxBtnEmty}>
                  <Button
                     onClick={handleNavigateToShop}
                     content={'GO TO SHOP'}
                  />
               </div>
            </div>
         )}
      </div>
   );
}

export default Cart;
