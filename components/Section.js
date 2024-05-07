import { useMemo } from "react";
import styles from '../styles/Home.module.css';

export default function Section({dashboard, textsections, image}) {
  const r = useMemo(() => {
    if (dashboard) {
      return (
        <div className={styles.grid}>
          <a className={styles.card}>
            <iframe src={dashboard} width="1050" height="850"></iframe>
          </a>
          <div style={{display:'grid'}}>
            {
              textsections && textsections.map((textsection) => {
                return (
                  <a className={styles.card}>
                    {/* <h3>Sample Heading</h3> */}
                    <p>{textsection}</p>
                  </a>
                )
              })
            }
          </div>
        </div>
      )
    } 
    if (image) {
      return (
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src={image} style={{width: "-webkit-fill-available"}}/>
          </div>
          <div style={{display:'grid'}}>
            {
              textsections && textsections.map((textsection) => {
                return (
                  <a className={styles.card}>
                    {/* <h3>Sample Heading</h3> */}
                    <p>{textsection}</p>
                  </a>
                )
              })
            }
          </div>
        </div>
      )
    } else {
      return (textsections && textsections.map((textsection) => {
        return (
          <a className={styles.card}>
            {/* <h3>Sample Heading</h3> */}
            <p>{textsection}</p>
          </a>
        )
        })
      )
    }
  }, [dashboard, textsections]);


  return <>{r}</>;
}
