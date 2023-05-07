import styles from './FailedSearch.module.scss';

const FailedSearch: React.FC = () => { 
  return (
    <div className={styles.FailedSearch}>
      <div className={styles.Message}>
        <h1>Oops! We couldn't find a match</h1>
        <p>Try selecting a category or searching again.</p>
      </div>
    </div>
  );
}

export default FailedSearch;