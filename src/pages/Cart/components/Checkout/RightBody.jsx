import { useContext } from 'react';
import styles from './styles.module.scss';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import { SideBarContext } from '@/contexts/SideBarProvider';
import Button from '@components/Button/Button';
import { handleTotalPrice } from '@/ultis/helper';

function RightBody({ handleExternalSubmit }) {
   const {
      rightBody,
      title,
      Items,
      Item,
      SubTotal,
      Total,
      payment,
      paymentCod,
      btn,
   } = styles;

   const { listProductCart } = useContext(SideBarContext);

   return (
      <div className={rightBody}>
         <p className={title}>YOUR ORDER</p>

         <div className={Items}>
            {listProductCart.map(product => (
               <div className={Item}>
                  <img src={product.images[0]} alt="" />

                  <div>
                     <p>{product.name}</p>
                     <p>Price: ${product.price}</p>
                     <p>Size {product.size}</p>
                  </div>
               </div>
            ))}
         </div>

         <div className={SubTotal}>
            <p style={{ fontSize: '1.8rem' }}>SubTotal</p>
            <p>${handleTotalPrice(listProductCart).toFixed(2)}</p>
         </div>

         <div className={Total}>
            <p>Total</p>
            <p>${handleTotalPrice(listProductCart).toFixed(2)}</p>
         </div>

         <div className={payment}>
            <input type="radio" id="qr" name="fav_language" value="qr" />
            <label for="qr">Pay by QR CODE</label>
         </div>

         <div className={paymentCod}>
            <input type="radio" id="cod" name="fav_language" value="cod" />
            <label for="cod">Cash on delivery</label>
         </div>

         <div className={btn}>
            <Button content={'PLACE ORDER'} onClick={handleExternalSubmit} />
         </div>

         <PaymentMethods />
      </div>
   );
}

export default RightBody;
