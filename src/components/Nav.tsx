import styles from './Nav.module.scss';
import { useState } from 'react';
import { ReactComponent as BarsIcon } from '../png/bars-solid.svg';
import { ReactComponent as NavArrow } from '../png/angle-down-solid.svg';
import { ReactComponent as SearchIcon } from '../png/magnifying-glass-solid.svg';

interface IProps {
  onHandleHeader: () => void
  onHandleNavigation: (category: string) => void,
  onHandleSearch: (value: string) => void
}

const Nav: React.FC<IProps> = ({ onHandleHeader, onHandleNavigation, onHandleSearch }) => { // use ES6 destructure
  const [input, setValue] = useState("");
  const [showMobileLinks, setShowMobileLinks] = useState(false);
  const [showArrowLinks, setShowArrowLinks] = useState(false);

  const handleNavigation = (category: string) => {
    setShowMobileLinks(false);
    setShowArrowLinks(false);
    onHandleNavigation(category);
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onHandleSearch(input)
      setValue("")
    }
  }
  
  const toggleMobileLinks = () => {
    setShowMobileLinks(!showMobileLinks)
  }

  const toggleArrowLinks = () => {
    setShowArrowLinks(!showArrowLinks);
  }

  return (
    <nav className={styles.Nav}>
      { showMobileLinks ? 
        <ul className={styles.MobileLinks}>
          <li onClick={() => handleNavigation('Operating Systems')}>Operating Systems</li>
          <li onClick={() => handleNavigation('Printers')}>Printers</li>
          <li onClick={() => handleNavigation('Outlook')}>Outlook</li>
          <li onClick={() => handleNavigation('Powerpoint')}>Powerpoint</li>
          <li onClick={() => handleNavigation('Active Directory')}>Active Directory</li>
          <li onClick={() => handleNavigation('Exchange')}>Exchange</li>
        </ul>
        : null
      }
      <div className={styles.NavLeftSection}>
          <BarsIcon className={styles.BarsIcon} onClick={toggleMobileLinks}/>
          <ul className={styles.Logo} onClick={() => onHandleHeader()}>
            <li>Help Desk Guide</li>
            <li>by Christina Punla</li>
          </ul>
          <div className={styles.Divider}></div>
          <ul className={styles.NavLinks}>
            <li className={styles.OS} onClick={() => handleNavigation('Operating Systems')}>Operating Systems</li>
            <li className={styles.Printers} onClick={() => handleNavigation('Printers')}>Printers</li>
            <li className={styles.Outlook} onClick={() => handleNavigation('Outlook')}>Outlook</li>
            <li className={styles.Powerpoint} onClick={() => handleNavigation('Powerpoint')}>Powerpoint</li>
            <li className={styles.AD} onClick={() => handleNavigation('Active Directory')}>Active Directory</li>
            <li className={styles.Exchange} onClick={() => handleNavigation('Exchange')}>Exchange</li>
          </ul>
          <div className={styles.NavArrow} onClick={toggleArrowLinks}>
            <NavArrow className={styles.NavArrowIcon}/>
            { showArrowLinks ? 
              <ul className={styles.ArrowLinks}>
                <li className={styles.Printers} onClick={() => handleNavigation('Printers')}>Printers</li>
                <li className={styles.Outlook} onClick={() => handleNavigation('Outlook')}>Outlook</li>
                <li className={styles.Powerpoint} onClick={() => handleNavigation('Powerpoint')}>Powerpoint</li>
                <li className={styles.AD} onClick={() => handleNavigation('Active Directory')}>Active Directory</li>
                <li className={styles.Exchange} onClick={() => handleNavigation('Exchange')}>Exchange</li>
              </ul>
              : null
            }
          </div>
      </div>
      <div className={styles.SearchBar}>
        <input type="text" value={input} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => handleKeyPress(e)}/>
        <SearchIcon className={styles.SearchIcon} onClick={() => onHandleSearch(input)}/>
      </div>   
    </nav>
  );
}

export default Nav;