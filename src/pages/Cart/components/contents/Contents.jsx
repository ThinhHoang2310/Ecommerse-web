import CartTable from '@/pages/Cart/components/contents/CartTable';
import styles from '../../styles.module.scss';
import CartSummary from '@/pages/Cart/components/contents/CartSummary';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { addProductToCart, deleteItem, deleteCart } from '@/apis/cartService';

import cartIcon from '@icons/svgs/carticon.svg';
import { BsTrash3 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Contents() {
   const {
      containerContent,
      boxFooter,
      boxCoupon,
      boxBtnDelete,
      boxEmtyCart,
      titleEmpty,
      boxBtnEmpty,
      couponCode,
      highlight,
   } = styles;

   const {
      listProductCart,
      handleGetListProductCart,
      isLoading,
      setIsLoading,
      userId,
   } = useContext(SideBarContext);

   const navigate = useNavigate();

   const handleReplaceQuantity = data => {
      setIsLoading(true);
      addProductToCart(data)
         .then(res => {
            handleGetListProductCart(data.userId, 'cart');
         })
         .catch(err => {
            setIsLoading(false);
            console.log(err);
         });
   };

   const handleDeleteItemCart = data => {
      setIsLoading(true);
      deleteItem(data)
         .then(res => {
            handleGetListProductCart(data.userId, 'cart');
         })
         .catch(err => {
            setIsLoading(false);
            console.log(err);
         });
   };

   const handleDeleteCart = () => {
      setIsLoading(true);

      deleteCart({ userId })
         .then(res => {
            handleGetListProductCart(userId, 'cart');
         })
         .catch(err => {
            // setIsLoading(false);
            console.log(err);
         });
   };

   const handleNavigateToShop = () => {
      navigate('/shop');
   };

   return (
      <>
         {listProductCart.length > 0 && userId ? (
            <div>
               <div className={containerContent}>
                  <div style={{ width: '55%' }}>
                     <CartTable
                        listProductCart={listProductCart}
                        getData={handleReplaceQuantity}
                        isLoading={isLoading}
                        getDataDelete={handleDeleteItemCart}
                     />

                     <div className={boxFooter}>
                        <div className={boxCoupon}>
                           <input type="text" placeholder="Coupon code" />
                           <Button content={'OK'} />
                        </div>
                        <div className={boxBtnDelete}>
                           <Button
                              content={
                                 <div
                                    style={{
                                       display: 'flex',
                                       gap: '5px',
                                       alignItems: 'center',
                                       justifyContent: 'center',
                                    }}
                                 >
                                    <BsTrash3 size={16} />
                                    CLEAR SHOPPING CART
                                 </div>
                              }
                              isPrimary={false}
                              onClick={handleDeleteCart}
                           />
                        </div>
                     </div>
                  </div>
                  <div style={{ width: '40%' }}>
                     <CartSummary />
                  </div>
               </div>
               <div className={containerContent}>
                  <div className={couponCode}>
                     Enter code: <span className={highlight}>WILL_TSTORE</span>{' '}
                     to get 10% off your total bill
                  </div>
               </div>
            </div>
         ) : (
            <div className={boxEmtyCart}>
               <img width={45} height={45} src={cartIcon} alt="cartIcon" />
               <div className={titleEmpty}>YOUR SHOPPING CART IS EMPTY</div>
               <div>
                  Nothing here yet! Explore our collection and treat yourself.
               </div>
               <div className={boxBtnEmpty}>
                  <Button
                     content={'RETURN TO SHOP'}
                     onClick={handleNavigateToShop}
                  />
               </div>
            </div>
         )}
      </>
   );
}

export default Contents;
