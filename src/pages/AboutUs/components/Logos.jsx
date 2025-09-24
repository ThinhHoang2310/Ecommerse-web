// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function Logos() {
   const dataLogos = [
      {
         id: 1,
         img: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png',
      },
      {
         id: 2,
         img: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-02-min.png',
      },
      {
         id: 3,
         img: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-03-min.png',
      },
      {
         id: 4,
         img: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-04-min.png',
      },
      {
         id: 5,
         img: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-05-min.png',
      },
      {
         id: 6,
         img: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png',
      },
   ];

   return (
      <div style={{ position: 'relative' }}>
         <style>
            {`

                .swiper-wrapper {
                     align-items: center; /* canh giữa ảnh theo chiều dọc */
                }

                .swiper {
                  --swiper-navigation-color: #3d3d3dff; /* màu mũi tên */
                  --swiper-navigation-size: 36px;     /* size icon */
                  display: flex;
                 align-items: center; /* canh giữa arrow với ảnh */
                }

                 
               .swiper-slide {
                     display: flex;
                    justify-content: center;
                    align-items: center; /* ảnh nằm giữa */
                }

               .swiper-button-next {
                  right: -9px !important;  /* đẩy ra ngoài bên phải */
               }

               .swiper-button-prev {
                  left: -9px !important;   /* đẩy ra ngoài bên trái */
               }

               .swiper-button-next,
               .swiper-button-prev {
                  opacity: 0;
                  transition: opacity 0.1s;
                  pointer-events: none;
                  outline: none !important;
               }

                .swiper-button-next:focus,
                .swiper-button-prev:focus {
                    outline: none !important;   /* tắt khi focus */
                    box-shadow: none !important;
     }

               .swiper:hover .swiper-button-next,
               .swiper:hover .swiper-button-prev {
                  opacity: 1;
                  pointer-events: auto;
               }       
            `}
         </style>

         <Swiper
            spaceBetween={50}
            slidesPerView={5}
            modules={[Navigation]}
            navigation={true}
            loop={true}
         >
            {dataLogos.map(item => (
               <SwiperSlide
                  key={item.id}
                  style={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
               >
                  <img
                     src={item.img}
                     alt={`brand-${item.id}`}
                     style={{
                        maxWidth: '100%',
                        objectFit: 'contain',
                        outline: 'none',
                        userSelect: 'none',
                        cursor: 'pointer',
                     }}
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}

export default Logos;
