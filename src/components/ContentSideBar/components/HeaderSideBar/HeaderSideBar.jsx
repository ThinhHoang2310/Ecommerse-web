import styles from './styles.module.scss';

function HeaderSideBar({ icon, title }) {
   const { container, touchIcon } = styles;

   return (
      <div className={container}>
         <div className={touchIcon}>{icon}</div>

         <div>{title}</div>
      </div>
   );
}

export default HeaderSideBar;
