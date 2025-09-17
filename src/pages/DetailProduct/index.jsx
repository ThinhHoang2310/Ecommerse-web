import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

import heartIcon from '@icons/svgs/hearticon.svg';
import realoadIcon from '@icons/svgs/reloadicon.svg';
import cartIcon from '@icons/svgs/carticon.svg';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import AccordionMenu from '@components/AccordionMenu';
import { useEffect, useState } from 'react';
import ReviewProduct from '@/pages/DetailProduct/components/Review';
import InformationProduct from '@/pages/DetailProduct/components/Information';
import MyFooter from '@components/Footer/Footer';
import SliderComon from '@components/SliderComon/SliderComon';

import ReactImageMagnifier from 'simple-image-magnifier/react';
import { data, useParams } from 'react-router-dom';
import cls from 'classnames';
import { getDetailProduct } from '@/apis/productsService';

const tempDataSize = [
   {
      name: 'M',
      amount: '1000',
   },
   {
      name: 'L',
      amount: '1000',
   },
];

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
      addFunction,
      info,
      active,
      clear,
      activeDisabledBtn,
   } = styles;

   const INCREASEMENT = 'increasement';
   const DECREASEMENT = 'decreasement';

   const [menuSelected, setMenuSelected] = useState(1);

   const [sizeSelected, setSizeSelected] = useState('');

   const [quantity, setQuantity] = useState(1);

   const [data, setData] = useState();

   const [isLoading, setIsLoading] = useState(false);

   const param = useParams();

   const dataAccordionMenu = [
      {
         id: 1,
         titleMenu: 'ADDITIONAL INFORMATION',
         content: <InformationProduct />,
      },
      {
         id: 2,
         titleMenu: 'REVIEW (0)',
         content: <ReviewProduct />,
      },
   ];

   const dataImageDetail = [
      'https://www.gorillawear.com/resize/90824800-crowley-oversized-mens-hoodie-washed-gray-11_5038763837848.jpg/0/1100/True/crowley-heren-oversized-hoodie-verwassen-grijs-l.jpg?_gl=1*5ih2qn*_up*MQ..*_ga*NTM3OTAzNDguMTc1NTg2MDI2OQ..*_ga_S0Q1DCMDE0*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxMzkyNDA0ODMy*_ga_KS4NJ6WEVP*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxNzA2ODM0NTM2.jpeg',
      'https://www.gorillawear.com/resize/90824800-crowley-oversized-mens-hoodie-washed-gray-11_5038763837848.jpg/0/1100/True/crowley-heren-oversized-hoodie-verwassen-grijs-l.jpg?_gl=1*5ih2qn*_up*MQ..*_ga*NTM3OTAzNDguMTc1NTg2MDI2OQ..*_ga_S0Q1DCMDE0*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxMzkyNDA0ODMy*_ga_KS4NJ6WEVP*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxNzA2ODM0NTM2.jpeg',
      'https://www.gorillawear.com/resize/90824800-crowley-oversized-mens-hoodie-washed-gray-11_5038763837848.jpg/0/1100/True/crowley-heren-oversized-hoodie-verwassen-grijs-l.jpg?_gl=1*5ih2qn*_up*MQ..*_ga*NTM3OTAzNDguMTc1NTg2MDI2OQ..*_ga_S0Q1DCMDE0*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxMzkyNDA0ODMy*_ga_KS4NJ6WEVP*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxNzA2ODM0NTM2.jpeg',
      'https://www.gorillawear.com/resize/90824800-crowley-oversized-mens-hoodie-washed-gray-11_5038763837848.jpg/0/1100/True/crowley-heren-oversized-hoodie-verwassen-grijs-l.jpg?_gl=1*5ih2qn*_up*MQ..*_ga*NTM3OTAzNDguMTc1NTg2MDI2OQ..*_ga_S0Q1DCMDE0*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxMzkyNDA0ODMy*_ga_KS4NJ6WEVP*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxNzA2ODM0NTM2.jpeg',
   ];

   const handleRenderZoomImage = src => {
      return (
         <ReactImageMagnifier
            srcPreview={src}
            srcOriginal={src}
            width={295}
            height={300}
         />
      );
   };

   const handleSetMenuSelected = id => {
      setMenuSelected(id);
   };

   const temptDataSlider = [
      {
         image: 'https://www.gorillawear.com/resize/90824800-crowley-oversized-mens-hoodie-washed-gray-11_5038763837848.jpg/0/1100/True/crowley-heren-oversized-hoodie-verwassen-grijs-l.jpg?_gl=1*5ih2qn*_up*MQ..*_ga*NTM3OTAzNDguMTc1NTg2MDI2OQ..*_ga_S0Q1DCMDE0*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxMzkyNDA0ODMy*_ga_KS4NJ6WEVP*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxNzA2ODM0NTM2.jpeg',
         name: 'Product 01',
         price: '$123',
         size: [{ name: 'L' }, { name: 'S' }],
      },
      {
         image: 'https://www.gorillawear.com/resize/90824800-crowley-oversized-mens-hoodie-washed-gray-11_5038763837848.jpg/0/1100/True/crowley-heren-oversized-hoodie-verwassen-grijs-l.jpg?_gl=1*5ih2qn*_up*MQ..*_ga*NTM3OTAzNDguMTc1NTg2MDI2OQ..*_ga_S0Q1DCMDE0*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxMzkyNDA0ODMy*_ga_KS4NJ6WEVP*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxNzA2ODM0NTM2.jpeg',
         name: 'Product 01',
         price: '$123',
         size: [{ name: 'L' }, { name: 'S' }],
      },
      {
         image: 'https://www.gorillawear.com/resize/90824800-crowley-oversized-mens-hoodie-washed-gray-11_5038763837848.jpg/0/1100/True/crowley-heren-oversized-hoodie-verwassen-grijs-l.jpg?_gl=1*5ih2qn*_up*MQ..*_ga*NTM3OTAzNDguMTc1NTg2MDI2OQ..*_ga_S0Q1DCMDE0*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxMzkyNDA0ODMy*_ga_KS4NJ6WEVP*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxNzA2ODM0NTM2.jpeg',
         name: 'Product 01',
         price: '$123',
         size: [{ name: 'L' }, { name: 'S' }],
      },
      {
         image: 'https://www.gorillawear.com/resize/90824800-crowley-oversized-mens-hoodie-washed-gray-11_5038763837848.jpg/0/1100/True/crowley-heren-oversized-hoodie-verwassen-grijs-l.jpg?_gl=1*5ih2qn*_up*MQ..*_ga*NTM3OTAzNDguMTc1NTg2MDI2OQ..*_ga_S0Q1DCMDE0*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxMzkyNDA0ODMy*_ga_KS4NJ6WEVP*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxNzA2ODM0NTM2.jpeg',
         name: 'Product 01',
         price: '$123',
         size: [{ name: 'L' }, { name: 'S' }],
      },
      {
         image: 'https://www.gorillawear.com/resize/90824800-crowley-oversized-mens-hoodie-washed-gray-11_5038763837848.jpg/0/1100/True/crowley-heren-oversized-hoodie-verwassen-grijs-l.jpg?_gl=1*5ih2qn*_up*MQ..*_ga*NTM3OTAzNDguMTc1NTg2MDI2OQ..*_ga_S0Q1DCMDE0*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxMzkyNDA0ODMy*_ga_KS4NJ6WEVP*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxNzA2ODM0NTM2.jpeg',
         name: 'Product 01',
         price: '$123',
         size: [{ name: 'L' }, { name: 'S' }],
      },
      {
         image: 'https://www.gorillawear.com/resize/90824800-crowley-oversized-mens-hoodie-washed-gray-11_5038763837848.jpg/0/1100/True/crowley-heren-oversized-hoodie-verwassen-grijs-l.jpg?_gl=1*5ih2qn*_up*MQ..*_ga*NTM3OTAzNDguMTc1NTg2MDI2OQ..*_ga_S0Q1DCMDE0*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxMzkyNDA0ODMy*_ga_KS4NJ6WEVP*czE3NTU4NjAyNjckbzEkZzAkdDE3NTU4NjAyNjckajYwJGwwJGgxNzA2ODM0NTM2.jpeg',
         name: 'Product 01',
         price: '$123',
         size: [{ name: 'L' }, { name: 'S' }],
      },
   ];

   const handleSelectedSize = size => {
      setSizeSelected(size);
   };

   const handleClearSizeSelected = () => {
      setSizeSelected('');
   };

   const handleSetQuantity = type => {
      if (quantity < 1) return;

      setQuantity(prev =>
         type === INCREASEMENT ? (prev += 1) : quantity === 1 ? 1 : (prev -= 1)
      );
   };

   const fetchDataDetail = async id => {
      setIsLoading(true);
      try {
         const data = await getDetailProduct(id);
         setData(data);
         setIsLoading(false);
      } catch (error) {
         console.log(error);
         setIsLoading(false);
      }
   };

   useEffect(() => {
      if (param.id) {
         fetchDataDetail(param.id);
      }
   }, [param]);

   console.log(data);

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
                     {dataImageDetail.map(src => handleRenderZoomImage(src))}
                  </div>

                  <div className={infoBox}>
                     <h1>Title Product</h1>
                     <p className={price}>$123</p>
                     <p className={description}>This is a great product.</p>
                     <p className={titleSize}>Size : {sizeSelected}</p>
                     <div className={boxSize}>
                        {tempDataSize.map((ItemSize, index) => {
                           return (
                              <div
                                 className={cls(size, {
                                    [active]: sizeSelected === ItemSize.name,
                                 })}
                                 key={index}
                                 onClick={() =>
                                    handleSelectedSize(ItemSize.name)
                                 }
                              >
                                 {ItemSize.name}
                              </div>
                           );
                        })}
                     </div>
                     {sizeSelected && (
                        <p className={clear} onClick={handleClearSizeSelected}>
                           Clear
                        </p>
                     )}

                     <div className={functionInfo}>
                        <div className={increasementAmount}>
                           <div onClick={() => handleSetQuantity(DECREASEMENT)}>
                              -
                           </div>
                           <div>{quantity}</div>
                           <div onClick={() => handleSetQuantity(INCREASEMENT)}>
                              +
                           </div>
                        </div>

                        <div className={boxBtn}>
                           <Button
                              content={'ADD TO CART'}
                              customClassName={
                                 !sizeSelected && activeDisabledBtn
                              }
                           />
                        </div>
                     </div>
                     <div className={orSection}>
                        <div></div>
                        <span>OR</span>
                        <div></div>
                     </div>
                     <div>
                        <Button
                           content={'BUY NOW'}
                           customClassName={!sizeSelected && activeDisabledBtn}
                        />
                     </div>
                     <div className={addFunction}>
                        <div>
                           <img src={heartIcon} alt="" />
                        </div>
                        <div>
                           <img src={realoadIcon} alt="" />
                        </div>
                     </div>
                     <div>
                        <PaymentMethods />
                     </div>
                     <div className={info}>
                        <div>
                           Brand: <span>Brand 01</span>
                        </div>
                        <div>
                           SKU: <span> 01</span>
                        </div>
                        <div>
                           Category: <span>Men</span>
                        </div>
                     </div>
                     {dataAccordionMenu.map((item, index) => (
                        <AccordionMenu
                           titleMenu={item.titleMenu}
                           contentJsx={item.content}
                           key={index}
                           onClick={() => {
                              handleSetMenuSelected(item.id);
                           }}
                           isSelected={menuSelected === item.id}
                        />
                     ))}
                  </div>
               </div>

               <div>
                  <h2>RELATED PRODUCTS</h2>

                  <SliderComon
                     data={temptDataSlider}
                     isProductItem
                     showItem={4}
                     showDots={false}
                  />
               </div>
            </MainLayout>
         </div>

         <MyFooter />
      </div>
   );
}

export default DetailProduct;
