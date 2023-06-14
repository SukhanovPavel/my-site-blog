import {PageLayout} from "@/Components/PageLayout/PageLayout";

import styles from './page.module.css';

export default function Skills() {
    return (
        <PageLayout title="My skills">
            <div className={styles.centerDesc}>
                <p className={styles.green}>React</p>
                <p className={styles.green}>Next</p>
                <p className={styles.green}>Redux</p>
                <p className={styles.yellow}>Effector</p>
                <p className={styles.green}>Html</p>
                <p className={styles.green}>Css</p>
                <p className={styles.green}>JavaScript</p>
                <p className={styles.yellow}>TypeScript</p>
                <p className={styles.yellow}>Node.js</p>
                <p className={styles.green}>Git</p>
                <p className={styles.green}>Bootstrap</p>
                <p className={styles.yellow}>REST API</p>
                <p className={styles.yellow}>Supabase</p>
                <p className={styles.red}>PostgreSQL</p>
                <p className={styles.red}>Nest</p>
            </div>
        </PageLayout>
    )
}