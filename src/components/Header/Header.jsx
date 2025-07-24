import BoxIcon from './Boxicon/Boxicon';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import Logo from '@icons/images/LOGO-WILL_T-STORE.png';
import realoadIcon from '@icons/svgs/reloadicon.svg';
import heartIcon from '@icons/svgs/hearticon.svg';
import cartIcon from '@icons/svgs/carticon.svg';

function MyHeader() {
  const {
    container,
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
  } = styles;
  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map(item => {
              return <BoxIcon type={item.type} href={item.href} />;
            })}
          </div>

          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map(item => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <img
            src={Logo}
            alt="logo"
            style={{
              width: '160px',
              height: '53px',
            }}
          />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map(item => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>

          <div className={containerBoxIcon}>
            <img width={21} height={21} src={realoadIcon} alt="realoadIcon" />
            <img width={21} height={21} src={heartIcon} alt="heartIcon" />
            <img width={21} height={21} src={cartIcon} alt="cartIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
