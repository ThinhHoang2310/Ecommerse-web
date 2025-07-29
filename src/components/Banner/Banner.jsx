import Button from '@components/Button/Button';
import styles from './styles.module.scss';

function Banner() {
   const { container, content, title, description } = styles;

   return (
      <div className={container}>
         <div className={content}>
            <h1 className={title}>WILL_T FASHION STORE</h1>
            <div className={description}>
               " You can have anything you want. If you dress for it"
            </div>

            <div
               style={{
                  width: '172px',
               }}
            >
               <Button content="Go to Shop" />
            </div>
         </div>
      </div>
   );
}

export default Banner;
