import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hi! I'm Junior Frontend developer.
          {/*<code className={styles.code}>src/app/page.tsx</code>*/}
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
          </a>
        </div>
      </div>

      <Link href="/">
        <div className={styles.center}>
          <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
          />
          Pavel Sukhanov
        </div>
      </Link>

      <div className={styles.grid}>
        <Link
          href="/skills"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Skills <span>-&gt;</span>
          </h2>
          <p>My skills</p>
        </Link>

        <Link
          href="portfolio"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Portfolio <span>-&gt;</span>
          </h2>
          <p>My works</p>
        </Link>

        <Link
          href="web3"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Web3 <span>-&gt;</span>
          </h2>
          <p>My hobby</p>
        </Link>

        <Link
          href="blog"
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
