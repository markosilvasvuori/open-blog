// domain.com/
import { Fragment } from 'react';
import Link from 'next/link';

import LatestPost from '../src/components/Blog/LatestPost';
import BlogList from '../src/components/Blog/BlogList';
import Button from '../src/components/UI/Button';
import styles from '../styles/HomePage.module.css';

const Home = (props) => {
    return (
        <Fragment>
            <main>
                <h1 className={styles.title}>Open Blog</h1>
                <h2 className={styles['second-title']}>Blog posts by anyone.</h2>
                {props.blogPosts.length > 0 &&
                    <Fragment>
                        <LatestPost blogPosts={props.blogPosts} />
                        <BlogList blogPosts={props.blogPosts} numberOfVisiblePosts={15} />
                        <div className={styles.buttons}>
                            <Link href='/all-posts'>
                                <a>
                                    <Button>All Posts</Button>
                                </a>
                            </Link>
                            <Link href='/new-post'>
                                <a>
                                    <Button>Create a Post</Button>
                                </a>
                            </Link>
                        </div>
                    </Fragment>
                }
                {props.blogPosts.length === 0 &&
                    <h2>
                        <span>No blog posts yet.</span> 
                        <br />
                        <span>Be the first one to blog what ever you want!</span>
                    </h2>
                }
            </main>
        </Fragment>
    )
};

export const getServerSideProps = async () => {
    const response = await fetch('https://open-blog-nextjs-default-rtdb.europe-west1.firebasedatabase.app/blog-posts.json');
    const data = await response.json();
    const blogPosts = [];

    if (!response.ok) {
        throw new Error('Something went wrong!');
    }

    if (data) {
        Object.entries(data).map(post => {
            post[1].postId = post[0];
            blogPosts.push(post[1]);
        });
    }

    return {
        props: {
            blogPosts
        }
    }
};

export default Home;