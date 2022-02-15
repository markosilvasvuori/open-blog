import { useState } from 'react';

import Button from '../UI/Button';
import styles from './NewPostForm.module.css';

const NewPostForm = ({ onAddNewPost }) => {
    const [enteredDetails, setEnteredDetails] = useState({
        title: '',
        author: '',
        image: '',
        text: '',
    });
    const [errors, setErrors] = useState({
        isError: false,
        title: '',
        author: '',
        image: '',
        text: '',
    });

    const getDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    };

    const validateUrl = (string) => {
        if (string.trim().substring(0, 7) == 'http://' || string.trim().substring(0, 8) == 'https://') {
            return true;
        } else {
            return false;
        }
    };

    const onChangeDetail = (detail, event) => {
        setEnteredDetails(prevState => ({
            ...prevState,
            [detail]: event.target.value
        }));
    };

    const validateEnteredInputs = (event) => {
        event.preventDefault();

        const validImageUrl = validateUrl(enteredDetails.image)

        if (enteredDetails.title.trim().length === 0 ||
            enteredDetails.author.trim().length === 0 ||
            enteredDetails.text.trim().length < 10 ||
            !validImageUrl
        ) {
            setErrors({
                isError: true,
                title: enteredDetails.title.length ? '' : 'Enter title',
                author: enteredDetails.author.length ? '' : 'Enter author',
                text: enteredDetails.text.length >= 10 ? '' : 'Text must be at least 10 characters long',
                image: validImageUrl ? '' : 'Enter valid URL'
            });

            return;
        }

        submitHandler();
    };

    const submitHandler = () => {
        const enteredPostData = {
            title: enteredDetails.title,
            author: enteredDetails.author,
            image: enteredDetails.image,
            text: enteredDetails.text,
            date: getDate(),
        };

        onAddNewPost(enteredPostData);
    };

    return (
        <form className={styles.form}>
            <label htmlFor='title'>Title</label>
            <input 
                id='title' 
                className={errors.title ? styles.error : ''} 
                name='title' 
                value={enteredDetails.title} 
                onChange={(event) => onChangeDetail('title', event)} 
                placeholder='Title' 
            />
            {errors.title &&
                <div className={styles['error-msg']}>{errors.title}</div>
            }
            <label htmlFor='author'>Author</label>
            <input
                id='author' 
                className={errors.author ? styles.error : ''} 
                name='author' value={enteredDetails.author} 
                onChange={(event) => onChangeDetail('author', event)} 
                placeholder='Author' 
            />
            {errors.author &&
                <div className={styles['error-msg']}>{errors.author}</div>
            }
            <label htmlFor='image'>Image URL</label>
            <input 
                id='image' 
                className={errors.image ? styles.error : ''} 
                name='image' value={enteredDetails.image} 
                onChange={(event) => onChangeDetail('image', event)} 
                placeholder='URL'
            />
            {errors.image &&
                <div className={styles['error-msg']}>{errors.image}</div>
            }
            <label htmlFor='text'>Text</label>
            <textarea 
                id='text' className={errors.text ? styles.error : ''} 
                name='text' value={enteredDetails.text} 
                onChange={(event) => onChangeDetail('text', event)} 
                placeholder='Text...'
            />
            {errors.text &&
                <div className={styles['error-msg']}>{errors.text}</div>
            }
            <Button onClick={validateEnteredInputs}>Publish</Button>
        </form>
    );
};

export default NewPostForm;