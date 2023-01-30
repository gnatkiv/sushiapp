

import sushiImage from '../../assets/sushi.jpg';
import styles from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Kitchen</h1>
                <HeaderCardButton/>
            </header>
            <div className={styles['main-image']} >
                <img src={sushiImage} alt='JapanKitchen'/>
            </div>
        </>
    )
}

export default Header;