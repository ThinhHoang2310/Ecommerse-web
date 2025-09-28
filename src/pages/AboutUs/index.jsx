import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import { useState } from 'react';

import styles from './styles.module.scss';

import Logos from '@/pages/AboutUs/components/Logos';
import AccordionMenu from '@components/AccordionMenu';

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
      containerFaqContent,
   } = styles;

   // const [menuSelected, setMenuSelected] = useState(1);

   // const handleSetMenuSelected = id => {
   //    setMenuSelected(id);
   // };

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

   const dataFaq = [
      {
         id: 1,
         q: 'What is the purpose of this service?',
         a: 'This service is designed to provide you with seamless solutions tailored to your needs.',
      },
      {
         id: 2,
         q: 'How can I get started quickly?',
         a: 'Getting started is easy! Simply follow the step-by-step instructions to set up your account.',
      },
      {
         id: 3,
         q: 'Is my information kept secure?',
         a: 'Absolutely! We take data privacy seriously and implement top-notch security measures.',
      },
      {
         id: 4,
         q: 'Can I customize the features according to my needs?',
         a: 'Yes, our platform offers flexible options that allow you to customize features effortlessly.',
      },
      {
         id: 5,
         q: 'What support options are available?',
         a: 'We provide 24/7 customer support to help you with any questions or issues that may arise.',
      },
      {
         id: 6,
         q: 'How do I track my progress or usage?',
         a: 'You can easily monitor your activities and progress through your personalized dashboard.',
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

               <div className={containerFaqContent}>
                  {dataFaq.map((item, index) => (
                     <AccordionMenu
                        titleMenu={item.q}
                        contentJsx={item.a}
                        key={index}
                        isSelected={openId.includes(item.id)}
                        onClick={() => toggleFAQ(item.id)}
                        containerClass={styles.customContainer}
                        titleClass={styles.customTitle}
                        contentClass={styles.customContent}
                     />
                  ))}
               </div>
            </div>
         </MainLayout>
         <MyFooter />
      </>
   );
}

export default AboutUs;
