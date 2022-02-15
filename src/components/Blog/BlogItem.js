import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './BlogItem.module.css';

const BlogItem = ({ id, image, title, date, author, text }) => {
    const router = useRouter();

    return (
        <li className={styles['blog-item']}>
            <Link href={'/posts/' + id}>
                <a>
                    <div className={styles['img-container']}>
                        <img src={image} alt={title} />
                    </div>
                    <div className={styles.info}>
                        <p>{date}</p>
                        <p>{author}</p>
                    </div>
                    <h3 className={styles.title}>{title}</h3>
                </a>
            </Link>
                    <p className={styles.excerpt}>{text}</p>
        </li>
    );
};

export default BlogItem;