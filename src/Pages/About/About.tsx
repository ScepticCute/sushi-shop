import React from 'react';
import styles from './About.module.scss'
import githubIcon from '../../assets/img/about_footer/github.png';
import middleImg1 from '../../assets/img/about_middle/middle_image_1.jpg';
import middleImg2 from '../../assets/img/about_middle/middle_image_2.jpg';
import middleImg3 from '../../assets/img/about_middle/middle_image_3.jpg';
import middleImg4 from '../../assets/img/about_middle/middle_image_4.jpg';

export const About: React.FC = () => {
  const [timeIsEnd, setTimeEnd] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 85);
    setTimeout(() => setTimeEnd(true), 1000);
    return () => {};
  }, []);

  return (
    <div className={styles.wrapper}>
      <section className={styles.start_content}>
        {timeIsEnd ? (
          <div className={styles.center_text}>
            <h1>lorem ipsum</h1>
            <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
          </div>
        ) : (
          ''
        )}
      </section>
      <section className={styles.middle__content}>
        <div className={styles.middle__flexbox_wrapper}>
          <div className={styles.middle__block_wrap}>
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
          </div>
          <div className={styles.middle__block_wrap}>
            <img src={middleImg1} />
          </div>
        </div>
        <div className={styles.middle__flexbox_wrapper}>
          <div className={styles.middle__block_wrap}>
            <img src={middleImg2} />
          </div>
          <div className={styles.middle__block_wrap}>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem <span className={styles.orange_text}>ipsum Lorem</span> ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{' '}
            </p>
          </div>
        </div>
        <div className={styles.middle__flexbox_wrapper}>
          <div className={styles.middle__block_wrap}>
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum Lorem ipsum</p>
          </div>
          <div className={styles.middle__block_wrap}>
            <img src={middleImg3} />
          </div>
        </div>
        <div className={styles.middle__flexbox_wrapper}>
          <div className={styles.middle__block_wrap}>
            <img src={middleImg4} />
          </div>
          <div className={styles.middle__block_wrap}>
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footer__text}>
          <h2>Наши контакты:</h2>
          <p> lorem ipsum lorem ipsum </p>
        </div>
        <ul className={styles.footer__icons}>
          <li>
            <a href="https://github.com/ScepticCute" target="_blank">
              {' '}
              <img src={githubIcon} alt="github" />{' '}
            </a>{' '}
          </li>
          <li>
            <a href="https://github.com/ScepticCute" target="_blank">
              {' '}
              <img src={githubIcon} alt="github" />{' '}
            </a>{' '}
          </li>
        </ul>
      </footer>
    </div>
  );
};
