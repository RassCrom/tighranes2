import styles from './Author.module.scss'

const Author = ({ref}) => {
  return (
    <div className={styles.author} ref={ref}>
      <h1 className={styles.footerHeading}>
          Author
      </h1>
      <div className={styles.footerText}>
          <div className={styles.footerTextLinks}>
              <h2 className={styles.footerSubheading}><a href='https://www.linkedin.com/in/karasu/'>Alihan Beisenbay</a></h2>
              <p>design, web development, text editor, infographics, map design</p>
          </div>
          <div className={styles.footerTextLinks}>
              <h2 className={styles.footerSubheading}><a href='https://www.linkedin.com/in/tolegen-akynzhanov/'>Tolegen Akynzhanov</a></h2>
              <p>spatial data, text editor, data collection</p>
          </div>
          <div className={styles.footerTextLinks}>
              <h2 className={styles.footerSubheading}>Darina Uspanova</h2>
              <p>Infographic</p>
          </div>
      </div>
    </div>
  );
};

export default Author;