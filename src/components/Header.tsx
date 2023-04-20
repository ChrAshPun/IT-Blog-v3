import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Content}>
        <h1>Welcome to my IT Blog</h1>
        <p>This website is a collection of technical issues that I troubleshooted 
          through my career in the IT industry. Scroll down to see how I resolved 
          common IT problems or select a category from the navigation menu.</p>
      </div>
    </div>
  );
}

export default Header;