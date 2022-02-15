const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;

        const response = await fetch('https://open-blog-nextjs-default-rtdb.europe-west1.firebasedatabase.app/blog-posts.json', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        });

        res.status(201).json({ message: 'New post inserted' });
    }

    if (req.method === 'GET') {
        const response = await fetch('https://open-blog-nextjs-default-rtdb.europe-west1.firebasedatabase.app/blog-posts.json');
        const data = await response.json();

        res.status(201).json({ message: 'Fetched posts' });
    }

    if (req.method === 'DELETE') {
        const postId = req.body;
        
        const response = await fetch(`https://open-blog-nextjs-default-rtdb.europe-west1.firebasedatabase.app/blog-posts/${postId}.json`, {
            method: 'DELETE',
        });

        res.status(201).json({ message: 'Deleted post' });
    }
};

export default handler;