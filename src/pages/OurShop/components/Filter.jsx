import { TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { FaList } from 'react-icons/fa';
import styles from '../styles.module.scss';
import cls from 'classnames';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import SelectBox from '@pages/OurShop/components/SelectBox';

function Filter() {
   const { containerFilter, boxIcon, boxLeft, selectBox, sort, show } = styles;

   const { showOptions, sortOptions, setSortId, setShowId, setIsShowGrid } =
      useContext(OurShopContext);

   const getValueSelect = (value, type) => {
      if (type === 'sort') {
         setSortId(value);
      } else {
         setShowId(value);
      }
   };

   const handleGetShowGrid = type => {
      setIsShowGrid(type === 'grid');
   };

   return (
      <div className={containerFilter}>
         <div className={boxLeft}>
            <SelectBox
               options={sortOptions}
               getValue={getValueSelect}
               type="sort"
            />

            <div className={boxIcon}>
               <TfiLayoutGrid4Alt
                  style={{
                     fontSize: '22px',
                     color: '#404040',
                     cursor: 'pointer',
                  }}
                  onClick={() => handleGetShowGrid('grid')}
               />
               <div
                  style={{
                     height: '22px',
                     width: '1px',
                     backgroundColor: '#e1e1e1',
                  }}
               />
               <FaList
                  style={{
                     fontSize: '21px',
                     color: '#404040',
                     cursor: 'pointer',
                  }}
                  onClick={() => handleGetShowGrid('list')}
               />
            </div>
         </div>

         <div className={boxLeft}>
            <div style={{ color: '#555' }}> Show</div>
            {/* <select className={cls(selectBox, show)}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
            </select> */}

            <SelectBox
               options={showOptions}
               getValue={getValueSelect}
               type="show"
            />
         </div>
      </div>
   );
}

export default Filter;
