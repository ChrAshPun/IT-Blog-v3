import styles from './Article.module.scss';

interface IArticle {
  category: string;
  title: string;
  instructions: IInstructions[];
  notes?: string[];
}

interface IInstructions {
  objective: string;
  description: string;
  list: string[];
  imgSrc?: string;
  imgAlt?: string;
}

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
        { instructions.map((item) => {
          return <>
            <p className={styles.Objective}>{ item.objective }</p>
            <p className={styles.Description}>{ item.description }</p>
            <ul className={styles.Instructions}>
              { item.list.map((listItem) => {
                return <li>{ listItem }</li>
              }) }
            </ul>
            { item.imgSrc ? 
              <div className={styles.ImgContainer}>
                <img src={ item.imgSrc } alt={ item.imgAlt }/>
              </div>
              : null
            }
          </>
        })}
      </div>
      <div className={styles.BottomBorderLine}></div>
    </div>
  );
}

export default ArticleCompact;