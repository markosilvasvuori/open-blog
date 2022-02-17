// domain.com/new-post

import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import PostForm from "../../src/components/Blog/PostForm";
import styles from '../../styles/NewPostPage.module.css';

const CreatePost = () => {
    const router = useRouter();

    const addNewPostHandler = async (enteredPostData) => {
        const response = await fetch('/api/api/', {
            method: 'POST',
            body: JSON.stringify(enteredPostData),
            headers: {'Content-Type': 'application/json'}
        });

        if (!response.ok) {
            throw new Error('Something went wrong.');
        }

        router.push('/');
    };

    return (
        <Fragment>
            <Head>
                <title>Open Blog | New Post</title>
                <meta name='description' content='Got a topic you would like to blog about? Go for it!' />
            </Head>
            <h1 className={styles.title}>New Post</h1>
            <h2 className={styles['second-title']}>Got a topic you would like to blog about? Go for it!</h2>
            <PostForm onAddNewPost={addNewPostHandler} />
        </Fragment>
    );
};

export default CreatePost;