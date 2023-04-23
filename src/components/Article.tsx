import styles from './Article.module.scss';
import { IArticle } from "../interfaces"

const ArticleCompact: React.FC<IArticle> = ({ 
    category,
    title, 
    instructions,
    notes, 
  }) => {
  return (
    <div className={styles.Article}>
      <div className={styles.Information}>
        <span className={styles.Category}>{ category }</span>
        <h1>{ title }</h1>
        <div className={styles.InnerBorderLine}></div>
        { instructions.map((item, index) => {
          return <div key={index}>
            <p className={styles.Objective}>{ item.objective }</p>
            <p className={styles.Description}>{ item.overview }</p>
            <ul className={styles.Instructions}>
              { item.steps.map((listItem, index) => {
                return <li key={index}>{ listItem }</li>
              }) }
            </ul>
            { item.imgSrc ? 
              <div className={styles.ImgContainer}>
                <img src={process.env.PUBLIC_URL + item.imgSrc} alt={ item.imgAlt }/>
              </div>
              : null
            }
          </div>
        })}
      </div>
      <div className={styles.BottomBorderLine}></div>
    </div>
  );
}

export default ArticleCompact;