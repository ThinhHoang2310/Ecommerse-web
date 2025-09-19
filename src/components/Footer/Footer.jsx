import { dataFooter } from '@components/Footer/constants';
import styles from './styles.module.scss';
import Logo from '@icons/images/LOGO-WILL_T-STORE.png';

function MyFooter() {
   const { container, boxNav } = styles;

   return (
      <div className={container}>
         <div style={{ marginLeft: '15px' }}>
            <img src={Logo} alt="" width={150} height={50} />
         </div>

         <div className={boxNav}>
            {dataFooter.map(item => {
               return <div>{item.content}</div>;
            })}
         </div>

         <div>
            <p
               style={{
                  textAlign: 'center',
               }}
            >
               Guaranteed safe checkout
            </p>
            <img
               src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png"
               alt=""
            />
         </div>

         <div style={{ textAlign: 'center', marginTop: '20px' }}>
            Copyright © 2025 WILL_T FASHION STORE. Created by Thịnh Hoàng .
         </div>
      </div>
   );
}

export default MyFooter;
