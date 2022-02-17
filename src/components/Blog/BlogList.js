import BlogItem from './BlogItem';
import styles from './BlogList.module.css';

const BlogList = ({ blogPosts, numberOfVisiblePosts }) => {
    const blogPostsCopy = [...blogPosts];
    blogPostsCopy.reverse();
    
    return (
        <ul className={styles['blog-list']}>
            {blogPostsCopy.slice(0, numberOfVisiblePosts).map(post => (
                <BlogItem
                    key={post.postId}
                    postId={post.postId}
                    title={post.title}
                    date={post.date}
                    author={post.author}
                    text={post.text}
                    image={post.image}
                />
            ))}
        </ul>
    );
};

export default BlogList;