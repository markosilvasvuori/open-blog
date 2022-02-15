import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles['page-wrapper']}>
            <Header />
                <div className={styles.container}>
                    {children}
                </div>
            <Footer />
        </div>
    );
};

export default Layout;