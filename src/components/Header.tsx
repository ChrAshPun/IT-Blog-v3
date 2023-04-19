import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Content}>
        <h1>Welcome to my IT Blog</h1>
        <p>This website is a recollection of technical issues I resolved when I 
          worked in the IT industry. Scroll down to see how I troubleshooted common 
          IT issues or select a category from the navigation menu.</p>
      </div>
    </div>
  );
}

export default Header;