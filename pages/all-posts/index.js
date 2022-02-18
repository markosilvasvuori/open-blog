// domain.com/all-posts
import { Fragment, useState } from 'react';
import Head from 'next/head';

import BlogList from '../../src/components/Blog/BlogList';
import Button from '../../src/components/UI/Button';

const AllPosts = (props) => {
    const defaultVisiblePosts = 15;
    const [visiblePosts, setVisiblePosts] = useState(defaultVisiblePosts);

    const loadMorePosts = () => {
        if (props.blogPosts.length > visiblePosts) {
            setVisiblePosts(prevState => prevState + 10);
        } else {
            setVisiblePosts(defaultVisiblePosts);
        }
    };

    return (
        <Fragment>
            <Head>
                <title>Open Blog | All Posts</title>
            </Head>
            <main>
                <h1>All Posts</h1>
                {props.blogPosts &&
                    <Fragment>
                        <BlogList 
                            blogPosts={props.blogPosts} 
                            numberOfVisiblePosts={visiblePosts} 
                        />
                        {props.blogPosts.length > 15 &&
                            <div style={{ marginTop: '80px' }}>
                            <Button onClick={loadMorePosts}>
                                {props.blogPosts.length > visiblePosts ? 'Load More' : 'Show Less'}
                            </Button>
                            </div>
                        }
                    </Fragment>
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

export default AllPosts;