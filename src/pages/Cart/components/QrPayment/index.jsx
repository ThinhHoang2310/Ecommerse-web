import { useLocation } from 'react-router-dom';

import styles from './styles.module.scss';

import cls from 'classnames';
import classNames from 'classnames';

function QrPayment() {
   const { container, left, right, flex, title, des ,total} = styles;

   const location = useLocation();

   const params = new URLSearchParams(location.search);

   const id = params.get('id');

   const totalAmount = params.get('totalAmount');

   const qrCodeImage = `https://qr.sepay.vn/img?acc=10002148075&bank=TPBank&amount=${totalAmount}&des=${id}`;

   return (
      <div className={container}>
         <div className={left}>
            <h4>Payment by QR Code</h4>
            <img src={qrCodeImage} alt="QR code" />
            <p>Use your bank app to scan the QR code</p>
         </div>

         <div>
            <h3>Payment details</h3>
            <div className={right}>
               <div className={cls(flex, title)}>
                  <img
                     src="https://cdn6.aptoide.com/imgs/8/0/9/809f37b15a2ad7f698ccac2a66c4a5bc_icon.png"
                     alt=""
                  />

                  <div>
                     <p>TP BANK</p>
                     <p>Bank transfer</p>
                  </div>
               </div>

               <div className={cls(flex, des)}>
                  <div>Bank account holder: </div>
                  <div>DINH HOANG THINH</div>
               </div>

               <div className={cls(flex, des)}>
                  <div>Bank Number: </div>
                  <div>9999</div>
               </div>

               <div className={cls(flex, des)}>
                  <div>Amount: </div>
                  <div>{totalAmount} VND</div>
               </div>

               <div className={cls(flex, des)}>
                  <div>Transfer note: </div>
                  <div>{id}</div>
               </div>

               <div className={cls(flex, total)}>
                  <div>TOTAL</div>
                  <div>{totalAmount} VND</div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default QrPayment;
