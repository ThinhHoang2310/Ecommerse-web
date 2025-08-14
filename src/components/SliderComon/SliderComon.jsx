import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io"

import './styles.css';

function SliderComon({ data }) {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: < IoIosArrowForward/>,
      prevArrow: < IoIosArrowBack />,
   };

   return (
      <Slider {...settings}>
         {data.map((src, index) => {
            return <img src={src} key={index} alt="" />;
         })}
      </Slider>
   );
}

export default SliderComon;
