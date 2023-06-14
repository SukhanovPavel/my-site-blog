import {PageLayout} from "@/Components/PageLayout/PageLayout";

import styles from './page.module.css';

export default function Portfolio() {
    return (
        <PageLayout title="Portfolio">
            <div className={styles.grid}>
                <div className={styles.work}>
                    <img alt="sbos" src="/sbos.png" className={styles.img} />
                </div>
                <div className={styles.work}>
                    <img alt="sbos" src="/sbos.png" className={styles.img} />
                </div>
                <div className={styles.work}>
                    <img alt="sbos" src="/sbos.png" className={styles.img} />
                </div>
            </div>
        </PageLayout>
    )
}