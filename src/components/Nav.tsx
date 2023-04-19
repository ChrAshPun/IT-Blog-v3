import styles from './Nav.module.scss';

function Nav() {
  return (
    <nav className={styles.Nav}>
      <div className={styles.MaxWidth}>
        <div className={styles.NavLeftSection}>
          <ul className={styles.Logo}>
            <li>IT Blog</li>
            <li>by Christina Punla</li>
          </ul>
          <ul className={styles.NavLinks}>
            <li>Operating Systems</li>
            <li>Printers</li>
            <li>Outlook</li>
            <li>Powerpoint</li>
            <li>Active Directory</li>
            <li>Exchange</li>
          </ul>
        </div>
          <div>searchbar</div>
      </div>
    </nav>
  );
}

export default Nav;