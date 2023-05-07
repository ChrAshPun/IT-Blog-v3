import styles from './Header.module.scss';

interface IProps {
  numArticles: number
}

const Header: React.FC<IProps> = ({ numArticles }) => { // use ES6 destructure
  return (
    <div className={styles.Header}>
      <div className={styles.MaxWidth}>
        <div className={styles.Heading}>
          <h1>Help Desk Technician Guide</h1>
          <p>A guide for help desk technicians and other IT professionals.</p>
        </div>
        <div className={styles.Profile}>
          <div className={styles.Avatar}>
            <img src={process.env.PUBLIC_URL + '/png/profile-pic.jpg'} alt="profile-pic.jpg" />
          </div>
          <div className={styles.Info}>
            <p>Christina Punla</p>
            <ul>
              <li>View to my web portfolio <a href='https://christinapunla.dev/portfolio' target='_blank' rel="noreferrer">christinapunla.dev </a></li>
              <li>
                <p>{ numArticles } articles</p>
                <p className={styles.Dot}></p>
                <p>May 7, 2023</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.Border}></div>
        <img className={styles.TechSupportPng} src={process.env.PUBLIC_URL + '/png/tech-support.png'} alt="tech-support.png" />
      </div>
    </div>
  );
}

export default Header;