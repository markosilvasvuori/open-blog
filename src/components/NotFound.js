import Link from 'next/link';

import styles from './NotFound.module.css';

const NotFound = ({ endpoint }) => {
    return (
        <div className={styles['not-found']}>
            <p>{endpoint} not found :(</p>
            <p>See all posts <Link href='/all-posts'><a>here</a></Link></p>
            <p>or write a new blog post <Link href='/new-post'><a>here</a></Link></p>
        </div>
    );
};

export default NotFound;