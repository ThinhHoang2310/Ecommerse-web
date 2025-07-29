import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { TfiReload } from 'react-icons/tfi';
import realoadIcon from '@icons/svgs/reloadicon.svg';

import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function Compare() {
   const { container, boxContent } = styles;

   return (
      <div className={container}>
         <div className={boxContent}>
            <HeaderSideBar
               icon={
                  <img
                     width={21}
                     height={21}
                     src={realoadIcon}
                     alt="realoadIcon"
                  />

                  // <TfiReload style={{ fontSize: '20px' }}/>
               }
               title="COMPARE"
            />
            <ItemProduct />
         </div>

         <div>
            <Button content={'VIEW COMPARE'} />
         </div>
      </div>
   );
}

export default Compare;
