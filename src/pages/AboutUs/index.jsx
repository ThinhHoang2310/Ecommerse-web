import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import { useState } from 'react';

import styles from './styles.module.scss';

import Logos from '@/pages/AboutUs/components/Logos';

function AboutUs() {
   const {
      container,
      functionBox,
      specialText,
      btnBack,
      containerTitle,
      line,
      title,
      textS,
      textL,
      containerContent,
      des,
      containerFaq,
      faqList,
      faqItem,
      faqQuestion,
      faqAnswer,
      faqIcon,
   } = styles;

   const dataContent = [
      {
         id: 1,
         url: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-min.jpg',
         des: 'Every piece begins with precision. Skilled hands and modern sewing machines bring fabrics to life, ensuring each stitch reflects quality and care.',
      },
      {
         id: 2,
         url: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-2-min.jpg',
         des: 'Attention to detail is at the heart of craftsmanship. Each fabric is carefully checked for texture and comfort, promising garments that feel as good as they look.',
      },
      {
         id: 3,
         url: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-min.jpg',
         des: 'Accuracy defines excellence. With every measurement perfected, we create clothing that fits seamlessly and elevates every moment.',
      },
   ];

   const faqData = [
      {
         id: 1,
         q: 'Feugiat purus mi nisl dolor pellentesque tellus?',
         a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
         id: 2,
         q: 'Suspendisse nunc sagittis adipiscing imperdiet turpis sodales massa convallis sit?',
         a: 'Aliquam erat volutpat. Donec at orci vitae nunc malesuada.',
      },
      {
         id: 3,
         q: 'Facilisis adipiscing lacus, nisl at in consectetur in?',
         a: 'Ut sit amet justo at sapien gravida aliquet.',
      },
      {
         id: 4,
         q: 'Pellentesque egestas eget amet erat leo arcu?',
         a: 'Cras viverra ligula sit amet augue varius tristique.',
      },
      {
         id: 5,
         q: 'Pellentesque pulvinar nibh suspendisse faucibus libero condimentum phasellus.',
         a: 'Etiam tincidunt leo sed sapien pulvinar, sed aliquam ligula bibendum.',
      },
      {
         id: 6,
         q: 'Hendrerit commodo id mattis consequat.',
         a: 'Integer ultricies metus sit amet sem sollicitudin, non pretium risus finibus.',
      },
   ];

   const [openId, setOpenId] = useState([]);

   const toggleFAQ = id => {
      if (openId.includes(id)) {
         setOpenId(openId.filter(item => item !== id));
      } else {
         setOpenId([...openId, id]);
      }
   };

   return (
      <>
         <MyHeader />
         <MainLayout>
            <div className={container}>
               <div className={functionBox}>
                  <div>
                     Home &gt; <span className={specialText}>About Us</span>
                  </div>
                  <div className={btnBack} onClick={() => handleBackPrevious()}>
                     &lt; Return to Previous page
                  </div>
               </div>

               <div className={containerTitle}>
                  <div className={line}>
                     <div className={title}>
                        <div className={textS}>
                           We try our best to provide the best service.
                        </div>
                        <div className={textL}>
                           Welcome to WILL_T FASHION STORE
                        </div>
                     </div>
                  </div>
               </div>

               <div className={containerContent}>
                  {dataContent.map(item => (
                     <div key={item.id}>
                        <img src={item.url} alt="About Us" />
                        <div className={des}>{item.des}</div>
                     </div>
                  ))}
               </div>
            </div>

            <Logos />

            {/* FAQ Section */}
            <div className={containerFaq}>
               <div className={line}>
                  <div className={title}>
                     <div className={textS}>we are happy to help you</div>
                     <div className={textL}>Have Any Questions?</div>
                  </div>
               </div>

               <div className={faqList}>
                  {faqData.map(item => {
                     const isOpen = openId.includes(item.id);

                     return (
                        <div key={item.id} className={faqItem}>
                           <div
                              className={faqQuestion}
                              onClick={() => toggleFAQ(item.id)}
                           >
                              <span>{item.q}</span>
                              <span
                                 className={faqIcon}
                                 style={{
                                    transform: isOpen
                                       ? 'rotate(45deg)'
                                       : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                 }}
                              >
                                 {isOpen ? '−' : '+'}
                              </span>
                           </div>

                           <div
                              className={faqAnswer}
                              style={{
                                 maxHeight: isOpen ? '200px' : '0px',
                                 opacity: isOpen ? 1 : 0,
                                 padding: isOpen ? '20px' : '0 20px',
                                 overflow: 'hidden',
                                 transition:
                                    'max-height 0.4s ease-out, opacity 0.3s ease-out, padding 0.3s ease-out',
                                 backgroundColor: '#f8f9fa',
                                 borderTop: isOpen
                                    ? '1px solid #e9ecef'
                                    : 'none',
                              }}
                           >
                              {item.a}
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </MainLayout>
         <MyFooter />
      </>
   );
}

export default AboutUs;
