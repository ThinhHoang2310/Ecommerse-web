import MainLayout from '@components/Layout/Layout';
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProduct({ data }) {
   const { container, containerItem } = styles;

   return (
      <MainLayout>
         <div className={container}>
            <CountDownBanner />
            <div className={containerItem}>
               {data.map(item => {
                  return (
                     <ProductItem key={item.id}
                        src={item.images[0]}
                        prevSrc={item.images[1]}
                        name={item.name}
                        price={item.price}
                     />
                  );
               })}
            </div>
         </div>
      </MainLayout>
   );
}

export default HeadingListProduct;
