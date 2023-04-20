import styles from './ArticleCompact.module.scss';

interface ArticleProps {
  props: {
    title: string;
    objective: string;
    description: string;
    instructions: string[];
    category: string;
    imgSrc: string;
    imgAlt: string;
  }
}

const ArticleCompact: React.FC<ArticleProps> = ({ props }) => {
  return (
    <div className={styles.ArticleCompact}>
      <div className={styles.Article}>
        <div className={styles.Information}>
          <h1>{ props.title }</h1>
          <p className={styles.Description}>{ props.description }</p>
          <span className={styles.Category}>{ props.category }</span>
        </div>
        <div className={styles.ImgContainer}>
          <img src={props.imgSrc} alt={props.imgAlt}/>
        </div>
      </div>
      {/* <div className={styles.BorderLine}></div> */}
    </div>
  );
}

export default ArticleCompact;