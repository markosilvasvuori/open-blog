import Link from 'next/link';

import styles from './BlogItem.module.css';

const BlogItem = ({ postId, image, title, date, author, text }) => {
    return (
        <li className={styles['blog-item']}>
            <Link href={'/posts/' + postId}>
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