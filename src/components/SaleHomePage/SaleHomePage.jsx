import Button from '@components/Button/Button';
import styles from './styles.module.scss';
// import LeftImg from '@images/hinhanhweb/hinh2-2.png'
import useTranslateXImage from '@/hooks/useTranslateXImage';

function SaleHomePage() {
   const { container, title, description, boxBtn, boxImg } = styles;

   const { translateXPosition } = useTranslateXImage();

   return (
      <div className={container}>
         <div
            className={boxImg}
            style={{
               transform: `translateX(${translateXPosition}px)`,
               transition: 'transform 0.8s ease',
            }}
         >
            <img
               // src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
               // src="https://rg.com.vn/oC64R"
               src="https://fa-ecom.s3.eu-west-2.amazonaws.com/2025-mens-dept-content/split-banner/fa_wk33_t-shirts_shorts_department-page-banner.webp"
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
               transition: 'transform 0.8s ease',
            }}
         >
            <img
               // src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
               // src="https://fa-ecom.s3.eu-west-2.amazonaws.com/2025-mens-dept-content/split-banner/fa_wk25_mens_festival_digital_department-page-banner.webp"
               src="https://fa-ecom.s3.eu-west-2.amazonaws.com/2025-womens-dept-content/split-banner/fa_wk28_q3-summer_2_ecom_refresh_womens_department-page-banner_2.webp"
               alt=""
            />
         </div>
      </div>
   );
}

export default SaleHomePage;
