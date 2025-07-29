import heartIcon from '@icons/svgs/hearticon.svg';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function WishList() {
   const { container, boxBtn } = styles;
   return (
      <div className={container}>
         <div>
            <HeaderSideBar
               icon={
                  <img width={21} height={21} src={heartIcon} alt="heartIcon" />

                  // <TfiReload style={{ fontSize: '20px' }} />
               }
               title="WISHLIST"
            />

            <ItemProduct />
         </div>
         <div className={boxBtn}>
            <Button content={'VIEW WISHLIST'} />
            <Button content={'ADD ALL TO CART'} isPrimary={false} />
         </div>
      </div>
   );
}

export default WishList;
