// components/CreateJarForm.js
import { useState } from 'react';
import styles from '../styles/CreateJarForm.module.css';

export default function CreateJarForm({ onCreateJar }) {
    const [jarTitle, setJarTitle] = useState('');

    const handleCreateJar = () => {
        // Pass the jarTitle to the parent component
        onCreateJar(jarTitle);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Create a New Jar</h1>
            <label className={styles.label}>
                Jar Title:
                <input
                    className={styles.input}
                    type="text"
                    value={jarTitle}
                    onChange={(e) => setJarTitle(e.target.value)}
                />
            </label>
            <button className={styles.button} onClick={handleCreateJar}>
                Create Jar
            </button>
        </div>
    );
}
