import styles from './HamburgerIcon.module.css'; 

const HamburgerIcon = ({ toggleMenu, menuOpen }) => {
    const classes = `${styles.hamburger} ${menuOpen ? styles.open : ''}`;

    const toggleMenuHandler = () => {
        toggleMenu();
    };

    return (
        <button 
            className={classes} 
            onClick={toggleMenuHandler}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default HamburgerIcon;