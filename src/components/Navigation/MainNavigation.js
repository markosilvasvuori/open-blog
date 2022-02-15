import Link from 'next/link';

import Button from '../UI/Button';
import styles from './MainNavigation.module.css';

const MainNavigation = ({ closeMenu, menuOpen }) => {
    const closeMenuHandler = () => {
        closeMenu();
    };

    return (
        <nav className={styles.nav}>
            <Link href='/all-posts'>
                <a onClick={menuOpen ? closeMenuHandler : undefined}>All Posts</a>
            </Link>
            <Link href='/about'>
            <a onClick={menuOpen ? closeMenuHandler : undefined}>About</a>
            </Link>
            <Link href='/new-post'>
                <a>
                    <Button onClick={menuOpen ? closeMenuHandler : undefined}>Create a Post</Button>
                </a>
            </Link>
        </nav>
    );
};

export default MainNavigation;