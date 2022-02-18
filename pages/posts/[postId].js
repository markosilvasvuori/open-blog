// domain.com/[postId]
import { useState, Fragment } from 'react';
import { useRouter } from "next/router";
import Head from "next/head";

import PostForm from '../../src/components/Blog/PostForm';
import styles from '../../styles/SinglePostPage.module.css';
import NotFound from '../../src/components/NotFound';

const PostPage = ({ blogPosts }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const router = useRouter();
    const { postId } = router.query;
    const post = blogPosts[postId]; 

    const editPostHandler = () => {
        setIsEditing(!isEditing);
    };

    const saveEditedPostHandler = async (enteredPostData) => {
        const response = await fetch('/api/api', {
            method: 'PUT',
            body: JSON.stringify(enteredPostData),
            headers: {'Content-Type': 'application/json'}
        });

        if (!response.ok) {
            throw new Error('Something went wrong.');
        }

        router.push(postId);
    };

    const confirmDeleteHandler = () => {
        setConfirmDelete(true);
    };

    const cancelDelete = () => {
        setConfirmDelete(false);
    };

    const deleteHandler = async () => {
        const response = await fetch('/api/api/', {
            method: 'DELETE',
            body: postId,
        });

        router.push('/');
    };

    return (
        <Fragment>
            <Head>
                <title>{post ? post.title : 'Open Blog'}</title>
                <meta 
                    name="description" 
                    content={post ? post.text.substring(0, 50) : 'Blog posts by anyone'} 
                />
            </Head>
            {isEditing &&
                <Fragment>
                    <h2 className={styles['edit-title']}>Edit post</h2>
                    <PostForm 
                        closeEditing={editPostHandler} 
                        isEditing={isEditing} 
                        postData={post} 
                        postId={postId} 
                        saveEditedPost={saveEditedPostHandler} 
                    />
                </Fragment>
            }
            {!isEditing &&
                <Fragment>
                    {post && 
                        <article>
                            <div className={styles['img-container']}>
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className={styles.info}>
                                {!confirmDelete &&
                                    <p>{
                                        post.date} 
                                        <span className={styles.separator}>|</span> 
                                        {post.editedDate && <span className={styles['edited-date']}>{`Edited: ${post.editedDate}`}</span>} 
                                        {post.editedDate && <span className={styles.separator}>|</span>} 
                                        {post.author}
                                    </p>
                                }
                                {!confirmDelete &&
                                    <div className={styles.actions}>
                                        <button 
                                            className={styles['action-button']} 
                                            onClick={editPostHandler}
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            className={styles['action-button']} 
                                            onClick={confirmDeleteHandler}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                }
                                {confirmDelete && 
                                    <div className={styles['confirm-delete']}>
                                        <p>Are you sure you want to delete this post?</p>
                                        <button onClick={cancelDelete}>No</button>
                                        <button onClick={deleteHandler}>Yes</button>
                                    </div>
                                }
                            </div>
                            <h1 className={styles.title}>{post.title}</h1>
                            <p className={styles.text}>{post.text}</p>
                        </article>
                    }
                    {!post && 
                        <NotFound endpoint='Post' />
                    }
                </Fragment>
            }
        </Fragment>
    );
};

export const getServerSideProps = async () => {
    const response = await fetch('https://open-blog-nextjs-default-rtdb.europe-west1.firebasedatabase.app/blog-posts.json');
    const blogPosts = await response.json();

    if (!response.ok) {
        throw new Error('Something went wrong!');
    }

    return {
        props: {
            blogPosts
        }
    }
};

export default PostPage;