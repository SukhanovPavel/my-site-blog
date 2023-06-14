import React, {FC} from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./PageLayout.module.css";

type Props = {
    text?: string;
    title: string;
    children?: React.ReactNode;
}

export const PageLayout: FC = ({text, title, children}: Props) => {
    return (
        <main className={styles.main}>
            {text && <div className={styles.description}>
                <p>
                    {text}
                </p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{' '}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                        {/*<img alt="photo" src="/photo.jpg" className={styles.photo}/>*/}
                    </a>
                </div>
            </div>}


            <div className={styles.center}>
                <Link className={styles.titleCenter} href="/" rel="noopener noreferrer">
                    {title}
                </Link>
                {children}
            </div>


            <div className={styles.grid}>
                <Link
                    href="/"
                    className={styles.card}
                    rel="noopener noreferrer"
                >
                    <h2>
                        Home <span>-&gt;</span>
                    </h2>
                    <p>Go home</p>
                </Link>
                <Link
                    href="/skills"
                    className={styles.card}
                    rel="noopener noreferrer"
                >
                    <h2>
                        Skills <span>-&gt;</span>
                    </h2>
                    <p>My skills</p>
                </Link>

                <Link
                    href="/portfolio"
                    className={styles.card}
                    // target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Portfolio <span>-&gt;</span>
                    </h2>
                    <p>My works</p>
                </Link>

                {/*<Link*/}
                {/*    href="/web3"*/}
                {/*    className={styles.card}*/}
                {/*    // target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*>*/}
                {/*    <h2>*/}
                {/*        Web3 <span>-&gt;</span>*/}
                {/*    </h2>*/}
                {/*    <p>My hobby</p>*/}
                {/*</Link>*/}

                <Link
                    href="/blog"
                    className={styles.card}
                    // target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Blog <span>-&gt;</span>
                    </h2>
                    <p>
                        Coming soon...
                    </p>
                </Link>
            </div>
        </main>
    )
}