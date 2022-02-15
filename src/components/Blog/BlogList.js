import BlogItem from './BlogItem';
import styles from './BlogList.module.css';

const BlogList = ({ blogPosts }) => {
    return (
        <ul className={styles['blog-list']}>
            {blogPosts.map(post => (
                <BlogItem
                    key={post.id}
                    id={post.id}
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