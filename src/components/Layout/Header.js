import { useState } from 'react';
import Link from 'next/link';

import HamburgerIcon from '../Navigation/HamburgerIcon';
import MainNavigation from '../Navigation/MainNavigation';
import MobileMenu from '../Navigation/MobileMenu';
import styles from './Header.module.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuOpenHandler = () => {
        document.body.classList.toggle('no-scroll');
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <Link href='/'>
                <a onClick={menuOpen ? menuOpenHandler : undefined}>
                    <span className={styles.logo}>OB</span>
                </a>
            </Link>
            <div className={styles['desktop-nav']}>
                <MainNavigation menuOpen={menuOpen} />
            </div>
            <div className={styles['mobile-nav']}>
                <HamburgerIcon 
                    toggleMenu={menuOpenHandler} 
                    menuOpen={menuOpen} 
                />
                <MobileMenu 
                    closeMenu={menuOpenHandler} 
                    menuOpen={menuOpen} 
                />
            </div>
        </header>
    );
};

export default Header;