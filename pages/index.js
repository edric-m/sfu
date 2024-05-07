import Head from 'next/head';
import styles from '../styles/Home.module.css';
import dataLoader from '../lib/dataLoader';
import Section from '../components/Section';
import { useMemo } from 'react';

const segments = dataLoader();
// console.log(data);

export default function Home() {
  const contentSegments = useMemo(() => {
    return (
      segments.map((segment) => {
        return <Section dashboard={segment.dashboard} textsections={segment.textsections} image={segment.image} />
      })
    )}, [segments]
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Sydney Fixer Uppers</title>
        <link rel="icon" href="/syd.jpg" />
      </Head>

      <main>
        <h1 className={styles.title}>
          This is <a>Placeholder!</a>
        </h1>

        <p className={styles.description}>
          subtitle goes here
        </p>

        <div className={styles.basecontainer}>
          {contentSegments}
        </div>
      </main>

      <footer>
        <div>Footer / credits</div>
        <button style={{margin:'20px'}}>edit</button>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
