import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbicon.svg';
import instaIcon from '@icons/svgs/instaicon.svg';
import ytbIcon from '@icons/svgs/ytbicon.svg';

function BoxIcon({ type, href }) {
   const { boxIcon } = styles;

   const handleRenderIcon = type => {
      switch (type) {
         case 'fb':
            return fbIcon;
         case 'insta':
            return instaIcon;
         case 'ytb':
            return ytbIcon;
      }
   };

   return (
      <div className={boxIcon}>
         <a href={href} target="_blank" style={{ display: 'flex' }}>
            <img src={handleRenderIcon(type)} alt={type} />
         </a>
      </div>
   );
}

export default BoxIcon;
