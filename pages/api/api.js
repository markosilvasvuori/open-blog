const handler = async (req, res) => {
    const URL = 'https://open-blog-nextjs-default-rtdb.europe-west1.firebasedatabase.app/blog-posts';

    const statusHandler = (response, statusCode, msg) => {
        if (response.ok) {
            res.status(statusCode).json({ message: msg });
        } else {
            res.status(404).json({ message: 'Something went wrong' });
        }
    };

    if (req.method === 'POST') {
        const data = req.body;

        const response = await fetch(URL + '.json', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        });

        statusHandler(response, 201, 'New post inserted');
    }

    if (req.method === 'GET') {
        const response = await fetch(URL + '.json');

        statusHandler(response, 200, 'Fetched posts');
    }

    if (req.method === 'PUT') {
        const data = req.body;
        
        const response = await fetch(`${URL}/${data.postId}.json`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        });

        statusHandler(response, 201, 'Updated post');
    }

    if (req.method === 'DELETE') {
        const postId = req.body;
        
        const response = await fetch(`${URL}/${postId}.json`, {
            method: 'DELETE',
        });

        statusHandler(response, 202, 'Deleted post');
    }
};

export default handler;