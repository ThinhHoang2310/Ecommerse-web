import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/components/Banner';

function OurShop() {
   const { container, fucntionBox, specialText, btnBack } = styles;

   const navigate = useNavigate();

   const handleBackPrevious = () => {
      navigate(-1);
   }
   
   return (
      <>
         <MyHeader />
         <MainLayout>
            <div className={container}>
               <div className={fucntionBox}>
                  <div>
                     Home &gt; <span className={specialText}>Our Shop</span>
                  </div>
                  <div className={btnBack} onClick={() => handleBackPrevious()}>
                    &lt; Return to Previous page
                    </div>
               </div>
            </div>
            <Banner/>
         </MainLayout>
      </>
   );
}

export default OurShop;
