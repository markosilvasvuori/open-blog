import styles from './Footer.module.css';

const Footer = () => {
    const getYear = () => {
        const date = new Date();
        return date.getFullYear();
    }

    return (
        <footer className={styles.footer}>
            <p>&copy; Marko Silvasvuori {getYear()}</p>
        </footer>
    );
};

export default Footer;