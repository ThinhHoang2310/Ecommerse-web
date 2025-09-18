import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import './styles.css';
import ProductItem from '@components/ProductItem/ProductItem';

function SliderComon({
   data,
   isProductItem = false,
   showDots = true,
   showItem = 1,
}) {
   var settings = {
      dots: showDots,
      infinite: true,
      speed: 500,
      slidesToShow: showItem,
      slidesToScroll: 1,
      nextArrow: <IoIosArrowForward />,
      prevArrow: <IoIosArrowBack />,
   };

   return (
      <Slider {...settings}>
         {data.map((item, index) => {
            const src = !item.image ? item.images[0] : item.image;

            return (
               <>
                  {isProductItem ? (
                     <ProductItem
                        src={src}
                        prevSrc={src}
                        name={item.name}
                        price={item.price}
                        details={item}
                        isHomePage={false}
                        slideItem
                     />
                  ) : (
                     <img src={item} key={index} alt="image" />
                  )}
               </>
            );
         })}
      </Slider>
   );
}

export default SliderComon;
