import styles from './styles.module.scss';

function PaymentMethods() {
   const {
      containerMethods,
      titleMethods,
      boxImgMethods,
      imgMethods,
      textSecure,
   } = styles;

   const srcMethods = [
      'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
      'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
      'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
      'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
      'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
   ];

   return (
      <>
         <div className={containerMethods}>
            <div className={titleMethods}>
               Guaranted <span>safe</span> Checkout
            </div>

            <div className={boxImgMethods}>
               {srcMethods.map((src, index) => {
                  return (
                     <img
                        className={imgMethods}
                        src={src}
                        alt={src}
                        key={index}
                     />
                  );
               })}
            </div>
         </div>
         <div className={textSecure}>Your payment is 100% secure</div>
      </>
   );
}

export default PaymentMethods;
