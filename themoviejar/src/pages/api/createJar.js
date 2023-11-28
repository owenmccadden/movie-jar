// pages/api/createJar.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    try {
        console.log('Received request to create a jar:', req.body);

        const baseUrl = process.env.BACKEND_API_URL;
        const url = baseUrl + "/jar/create";
        const data = JSON.parse(req.body);
        const headers = {
            'Content-Type': 'application/json',
        };

        console.log('Sending request to AWS Lambda:', { url, data, headers });

        const apiResponse = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(data),
        });

        console.log('Received response from AWS Lambda:', apiResponse);

        if (!apiResponse.ok) {
            throw new Error(`HTTP error! Status: ${apiResponse.status}`);
        }

        const result = await apiResponse.json();
        const newJarId = result.data.id;

        console.log('Successfully created jar with ID:', newJarId);

        res.status(200).json({ newJarId });
    } catch (error) {
        console.error('Error creating jar:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
