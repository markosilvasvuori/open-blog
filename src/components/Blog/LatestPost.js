import Link from 'next/link';

import styles from './LatestPost.module.css';

const LatestPost = ({ blogPosts }) => {
    const latestBlogPost = blogPosts[blogPosts.length - 1];

    return (
        <div className={styles.latest}>
                    <div className={styles['img-container']}>
                        <Link href={'/posts/' + latestBlogPost.postId}>
                            <a>
                                <img src={latestBlogPost.image} alt={latestBlogPost.title} />
                            </a>
                        </Link>
                    </div>
            <div className={styles.column}>
                <div className={styles.info}>
                    <p>{latestBlogPost.date}</p>
                    <p>{latestBlogPost.author}</p>
                </div>
                <Link href={'/posts/' + latestBlogPost.postId}>
                    <a>
                        <h2 className={styles.title}>{latestBlogPost.title}</h2>
                    </a>
                </Link>
                <p className={styles.excerpt}>{latestBlogPost.text}</p>
            </div>
        </div>
    );
};

export default LatestPost;