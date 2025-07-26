import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import useTranslateX from '@components/SaleHomePage/TranslateX';

function SaleHomePage() {
   const { container, title, description, boxBtn, boxImg } = styles;

   const { translateXPosition } = useTranslateX();

   return (
      <div className={container}>
         <div
            className={boxImg}
            style={{
               transform: `translateX(${translateXPosition}px)`,
               transition: 'transform 0.5s ease',
            }}
         >
            <img
               src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
               alt=""
            />
         </div>

         <div>
            <h2 className={title}>Sale of the year</h2>
            <p className={description}>
               Don’t think twice. It’s alright—to shop.
            </p>
            <div className={boxBtn}>
               <Button content={'Read more'} isPrimary={false} />
            </div>
         </div>

         <div
            className={boxImg}
            style={{
               transform: `translateX(-${translateXPosition}px)`,
               transition: 'transform 0.5s ease',
            }}
         >
            <img
               src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
               alt=""
            />
         </div>
      </div>
   );
}

export default SaleHomePage;
