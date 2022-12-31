import React from 'react';
import styles from './About.module.scss'
import githubIcon from '../../assets/img/about_footer/github.png';

export const About: React.FC = () => {

  const [timeIsEnd, setTimeEnd] = React.useState(false)

  React.useEffect(() => {
    window.scrollTo(0, 85)
    setTimeout(() => setTimeEnd(true), 1000)
    return () => {
      
    };
  }, [])

  return (
    <div className={styles.wrapper}>
    <section className={styles.start_content}>
        {timeIsEnd 
          ? 
          <div className={styles.center_text}>
            <h1>lorem ipsum</h1>
            <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
          </div> 
          : 
          ''}
        
    </section>
    <section className={styles.middle__content}>
      <div className={styles.middle__flexbox_wrapper}>
        <div className={styles.middle__block_wrap}>
          <h1>Lorem Ipsum</h1>
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        </div>
        <div className={styles.middle__block_wrap}>
          <img src='https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' />
        </div>
      </div>
      <div className={styles.middle__flexbox_wrapper}>
        
        <div className={styles.middle__block_wrap}>
          <img src='https://images.unsplash.com/photo-1582450871972-ab5ca641643d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
        </div>
        <div className={styles.middle__block_wrap}>
          <h1>Lorem Ipsum</h1>
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem <span className={styles.orange_text}>ipsum Lorem</span> ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        </div>
      </div>
      <div className={styles.middle__flexbox_wrapper}>
        <div className={styles.middle__block_wrap}>
          <h1>Lorem Ipsum</h1>
          <p>Lorem ipsum Lorem ipsum</p>
        </div>
        <div className={styles.middle__block_wrap}>
          <img src='https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80' />
        </div>
      </div>
      <div className={styles.middle__flexbox_wrapper}>
        
        <div className={styles.middle__block_wrap}>
          <img src='https://images.unsplash.com/photo-1624224701172-8499296e2cdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
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
        <li><a href="https://github.com/ScepticCute" target="_blank"> <img src={githubIcon} alt="github" /> </a> </li>
        <li><a href="https://github.com/ScepticCute" target="_blank"> <img src={githubIcon} alt="github" /> </a> </li>
        <li><a href="https://github.com/ScepticCute" target="_blank"> <img src={githubIcon} alt="github" /> </a> </li>
        <li><a href="https://github.com/ScepticCute" target="_blank"> <img src={githubIcon} alt="github" /> </a> </li>
      </ul>
    </footer>

  </div>)
};
