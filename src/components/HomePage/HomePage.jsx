import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './style.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';

function HomePage() {
   const [listProducts, setListProducts] = useState([]);

   useEffect(() => {
      getProducts().then(res => {
         setListProducts(res.contents);
      });
   }, []);

   return (
      <>
         <MyHeader />
         <Banner />
         <Info />
         <AdvanceHeadling />
         <HeadingListProduct data={listProducts.slice(0, 2)} />
         <PopularProduct data={listProducts.slice(2, 10)} />
         <SaleHomePage/>
         <div style={{ height: '200px' }}></div>
      </>
   );
}

export default HomePage;
