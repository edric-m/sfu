import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sydney Fixer Uppers</title>
        <link rel="icon" href="/syd.jpg" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Placeholder!</a>
        </h1>

        <p className={styles.description}>
          Data visualisations for Sydney CBD bus shelters
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <iframe src="https://public.tableau.com/views/SuburbDashboard/SuburbDashboard?:language=en-GB&:sid=&:display_count=n&:origin=viz_share_link:showVizHome=no&:embed=true" width="1010" height="850"></iframe>
          </a>

          <a className={styles.card}>
            <iframe src="https://public.tableau.com/views/WeatherDashboard_17144372001070/WeatherDashboard?:language=en-GB&publish=yes&:sid=&:display_count=n&:origin=viz_share_link:showVizHome=no&:embed=true" width="1050" height="850"></iframe>
          </a>

          <a
            className={styles.card}
          >
            <h3>Example Card</h3>
            <p>Stuff goes here.</p>
          </a>
        </div>
      </main>

      <footer>
        <div>Footer / credits</div>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
