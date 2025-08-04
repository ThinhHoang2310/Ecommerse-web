import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/components/Banner';
import { OurShopProvider, OurShopContext } from '@contexts/ourShopProvider';
import { useContext } from 'react';
import Filter from '@pages/OurShop/components/Filter';
import ListProducts from '@pages/OurShop/components/ListProducts';
import MyFooter from '@components/Footer/Footer';

function OurShop() {
   const { container, fucntionBox, specialText, btnBack } = styles;

   const navigate = useNavigate();

   const handleBackPrevious = () => {
      navigate(-1);
   };

   return (
      <OurShopProvider>
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
            <Banner />
            <div>
               <Filter />
               <ListProducts/>
            </div>
         </MainLayout>
         <MyFooter/>
      </OurShopProvider>
   );
}

export default OurShop;
