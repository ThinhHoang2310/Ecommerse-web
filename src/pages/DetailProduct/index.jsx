import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

import heartIcon from '@icons/svgs/hearticon.svg';
import realoadIcon from '@icons/svgs/reloadicon.svg';
import cartIcon from '@icons/svgs/carticon.svg';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import AccordionMenu from '@components/AccordionMenu';
import { useContext, useEffect, useState } from 'react';
import ReviewProduct from '@/pages/DetailProduct/components/Review';
import InformationProduct from '@/pages/DetailProduct/components/Information';
import MyFooter from '@components/Footer/Footer';
import SliderComon from '@components/SliderComon/SliderComon';

import ReactImageMagnifier from 'simple-image-magnifier/react';
import { useNavigate, useParams } from 'react-router-dom';
import cls from 'classnames';
import { getDetailProduct, getRelatedProduct } from '@/apis/productsService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { toast } from 'react-toastify';
import { handleAddProductToCartCommon } from '@/ultis/helper';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import Cookies from 'js-cookie';

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
      loading,
      emtyData,
   } = styles;

   const INCREASEMENT = 'increasement';
   const DECREASEMENT = 'decreasement';

   const [menuSelected, setMenuSelected] = useState(1);

   const [sizeSelected, setSizeSelected] = useState('');

   const [quantity, setQuantity] = useState(1);

   const [data, setData] = useState();

   const [isLoading, setIsLoading] = useState(false);

   const [relatedData, setRelatedData] = useState([]);

   const param = useParams();

   const navigate = useNavigate();

   const { setIsOpen, setType, handleGetListProductCart } =
      useContext(SideBarContext);

   const { toast } = useContext(ToastContext);

   const userId = Cookies.get('userId');

   const [isLoadingBtn, setIsLoadingBtn] = useState(false);

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
         toast.error('Get detail product failed');
         setIsLoading(false);
      }
   };

   const fetchDataRelatedProduct = async id => {
      setIsLoading(true);
      try {
         const data = await getRelatedProduct(id);
         setRelatedData(data);
         setIsLoading(false);
      } catch (error) {
         toast.error('Get detail product failed');
         setRelatedData([]);
         setIsLoading(false);
      }
   };

   const handleAdd = () => {
      handleAddProductToCartCommon(
         userId,
         setIsOpen,
         setType,
         toast,
         sizeSelected,
         param.id,
         quantity,
         setIsLoadingBtn,
         handleGetListProductCart
      );
   };

   useEffect(() => {
      if (param.id) {
         fetchDataDetail(param.id);
         fetchDataRelatedProduct(param.id);
      }
   }, [param]);

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

               {isLoading ? (
                  <div className={loading}>
                     <LoadingTextCommon />
                  </div>
               ) : (
                  <>
                     {!data ? (
                        <div className={emtyData}>
                           <p>NO RESULT</p>
                           <div>
                              <Button
                                 content={'Back to Our Shop'}
                                 onClick={() => navigate('/shop')}
                              />
                           </div>
                        </div>
                     ) : (
                        <div className={contentSection}>
                           <div className={imageBox}>
                              {data?.images.map(src =>
                                 handleRenderZoomImage(src)
                              )}
                           </div>

                           <div className={infoBox}>
                              <h1>{data?.name}</h1>
                              <p className={price}>${data?.price}</p>
                              <p className={description}>{data?.description}</p>
                              <p className={titleSize}>Size : {sizeSelected}</p>
                              <div className={boxSize}>
                                 {data?.size.map((ItemSize, index) => {
                                    return (
                                       <div
                                          className={cls(size, {
                                             [active]:
                                                sizeSelected === ItemSize.name,
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
                                 <p
                                    className={clear}
                                    onClick={handleClearSizeSelected}
                                 >
                                    Clear
                                 </p>
                              )}

                              <div className={functionInfo}>
                                 <div className={increasementAmount}>
                                    <div
                                       onClick={() =>
                                          handleSetQuantity(DECREASEMENT)
                                       }
                                    >
                                       -
                                    </div>
                                    <div>{quantity}</div>
                                    <div
                                       onClick={() =>
                                          handleSetQuantity(INCREASEMENT)
                                       }
                                    >
                                       +
                                    </div>
                                 </div>

                                 <div className={boxBtn}>
                                    <Button
                                       content={
                                          isLoadingBtn ? (
                                             <LoadingTextCommon />
                                          ) : (
                                             'ADD TO CART'
                                          )
                                       }
                                       customClassName={
                                          !sizeSelected && activeDisabledBtn
                                       }
                                       onClick={handleAdd}
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
                                    customClassName={
                                       !sizeSelected && activeDisabledBtn
                                    }
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
                     )}
                  </>
               )}

               {relatedData.length ? (
                  <div>
                     <h2>RELATED PRODUCTS</h2>

                     <SliderComon
                        data={relatedData}
                        isProductItem
                        showItem={4}
                        showDots={false}
                     />
                  </div>
               ) : (
                  <></>
               )}
            </MainLayout>
         </div>

         <MyFooter />
      </div>
   );
}

export default DetailProduct;
