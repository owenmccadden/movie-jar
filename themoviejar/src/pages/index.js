// pages/index.js
import { useRouter } from 'next/router';
import CreateJarForm from '../components/createJarForm';
import styles from '../styles/home.module.css';

export default function Home() {
  const router = useRouter();

  const handleCreateJar = async (title) => {
    try {
      console.log('Creating jar with title:', title);

      const url = "https://4vssm6i3i7.execute-api.us-east-1.amazonaws.com/dev/jar/create";
      const data = { title };
      const headers = {
        'Content-Type': 'application/json',
      };

      console.log('Sending request to create jar:', { url, data, headers });

      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });

      console.log('Received response from create jar API:', response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      const newJarId = JSON.parse(result.body).id

      console.log('Successfully created jar with ID:', newJarId);

      // Navigate to the jar page with the new jar ID
      router.push(`/jars/${newJarId}`);
    } catch (error) {
      console.error('Error creating jar:', error);
      // Handle error accordingly (e.g., show an error message to the user)
    }
  };

  return <CreateJarForm onCreateJar={handleCreateJar} />;
}
