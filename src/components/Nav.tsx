import styles from './Nav.module.scss';
import { ReactComponent as SearchIcon } from '../png/magnifying-glass-solid.svg';

// interface IProps {
//   handleClick: () => void
// }

// const Nav: React.FC<IProps> = ({ handleClick }) => {
//   return (
//     <li onClick={handleClick}>Operating Systems</li>
//     ...

interface IProps {
  handleClick: (category: string) => void
}

const Nav: React.FC<IProps> = ({ handleClick }) => {
  return (
    <nav className={styles.Nav}>
      <div className={styles.MaxWidth}>
        <div className={styles.NavLeftSection}>
          <ul className={styles.Logo}>
            <li>IT Blog</li>
            <li>by Christina Punla</li>
          </ul>
          <ul className={styles.NavLinks}>
            <li onClick={() => handleClick('Operating Systems')}>Operating Systems</li>
            <li onClick={() => handleClick('Printers')}>Printers</li>
            <li onClick={() => handleClick('Outlook')}>Outlook</li>
            <li onClick={() => handleClick('Powerpoint')}>Powerpoint</li>
            <li onClick={() => handleClick('Active Directory')}>Active Directory</li>
            <li onClick={() => handleClick('Exchange')}>Exchange</li>
          </ul>
        </div>
          <div className={styles.SearchBar}>
            <input type="text" placeholder="Search"/>
            <SearchIcon className={styles.SearchIcon}/>
          </div>
      </div>
    </nav>
  );
}

export default Nav;