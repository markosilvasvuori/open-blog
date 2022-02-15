import MainNavigation from "./MainNavigation";
import styles from './MobileMenu.module.css';

const MobileMenu = ({ menuOpen, closeMenu }) => {
    const classes = `${styles.menu} ${menuOpen ? styles.open : ''}`;

    const closeMenuHandler = () => {
        closeMenu();
    };

    return (
        <div className={classes}>
            <MainNavigation 
                closeMenu={closeMenuHandler} 
                menuOpen={menuOpen} 
            />
        </div>
    );
};

export default MobileMenu;