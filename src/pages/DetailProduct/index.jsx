import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function DetailProduct() {
   const {
      container,
      navigateSection,
      contentSection,
      imageBox,
      infoBox,
      price,
      description,
      boxSize,
      size,
      titleSize,
      functionInfo,
      boxBtn,
      increasementAmount,
      orSection,
   } = styles;

   return (
      <div>
         <MyHeader />
         <div className={container}>
            <MainLayout>
               <div className={navigateSection}>
                  <div>Home {'>'} Men</div>
                  <div className="" style={{ cursor: 'pointer' }}>
                     {'<'} Return to previous page
                  </div>
               </div>

               <div className={contentSection}>
                  <div className={imageBox}>
                     <img
                        src="https://www.gorillawear.com/resize/90824800-crowley-oversized-mens-hoodie-washed-gray-11_5038763837848.jpg/0/1100/True/crowley-heren-oversized-hoodie-verwassen-grijs-l.jpg?_gl=1*5ih2qn*_up*MQ..*_ga*NTM3OTAzNDguMTc1NTg2MDI2OQ..*_ga_S0Q1DCMDE0*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxMzkyNDA0ODMy*_ga_KS4NJ6WEVP*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxNzA2ODM0NTM2.jpeg"
                        alt=""
                     />
                     <img
                        src="https://www.gorillawear.com/resize/90824800-crowley-oversized-mens-hoodie-washed-gray-11_5038763837848.jpg/0/1100/True/crowley-heren-oversized-hoodie-verwassen-grijs-l.jpg?_gl=1*5ih2qn*_up*MQ..*_ga*NTM3OTAzNDguMTc1NTg2MDI2OQ..*_ga_S0Q1DCMDE0*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxMzkyNDA0ODMy*_ga_KS4NJ6WEVP*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxNzA2ODM0NTM2.jpeg"
                        alt=""
                     />
                     <img
                        src="https://www.gorillawear.com/resize/90824800-crowley-oversized-mens-hoodie-washed-gray-11_5038763837848.jpg/0/1100/True/crowley-heren-oversized-hoodie-verwassen-grijs-l.jpg?_gl=1*5ih2qn*_up*MQ..*_ga*NTM3OTAzNDguMTc1NTg2MDI2OQ..*_ga_S0Q1DCMDE0*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxMzkyNDA0ODMy*_ga_KS4NJ6WEVP*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxNzA2ODM0NTM2.jpeg"
                        alt=""
                     />
                     <img
                        src="https://www.gorillawear.com/resize/90824800-crowley-oversized-mens-hoodie-washed-gray-11_5038763837848.jpg/0/1100/True/crowley-heren-oversized-hoodie-verwassen-grijs-l.jpg?_gl=1*5ih2qn*_up*MQ..*_ga*NTM3OTAzNDguMTc1NTg2MDI2OQ..*_ga_S0Q1DCMDE0*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxMzkyNDA0ODMy*_ga_KS4NJ6WEVP*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxNzA2ODM0NTM2.jpeg"
                        alt=""
                     />
                  </div>

                  <div className={infoBox}>
                     <h1>Title Product</h1>
                     <p className={price}>$123</p>
                     <p className={description}>This is a great product.</p>

                     <p className={titleSize}>Size</p>
                     <div className={boxSize}>
                        <div className={size}>S</div>
                        <div className={size}>M</div>
                        <div className={size}>L</div>
                     </div>

                     <div className={functionInfo}>
                        <div className={increasementAmount}>
                           <div>-</div>
                           <div>1</div>
                           <div>+</div>
                        </div>

                        <div className={boxBtn}>
                           <Button content={'ADD TO CART'} />
                        </div>
                     </div>

                     <div className={orSection}>
                        <div></div>
                        <span>OR</span>
                        <div></div>
                     </div>
                  </div>
               </div>
            </MainLayout>
         </div>
      </div>
   );
}

export default DetailProduct;
