import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { IArticle } from "./interfaces"
import styles from './App.module.scss';
import Nav from './components/Nav';
import Header from './components/Header';
import Article from './components/Article';
import FailedSearch from './components/FailedSearch';

function App() {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState<IArticle[]>([]);

  const handleHeader = () => {
    setSearch("");
    setCategory("");
  }
  
  const handleNavigation = (category: string) => {
    setSearch("");
    setCategory(category);
  }

  const handleSearch = (search: string) => {
    setCategory("");
    setSearch(search);
  }

  useEffect(() => {
    fetch('https://christinapunla.dev/api/itarticles/')
      .then(response => response.json())
      .then(json => setArticles(json))
      .catch(error => console.error(error));
  },[])
  
  // try to use useMemo over useEffect
  const filteredArticles: IArticle[] = useMemo(() => {
    const filterArticles = (category: string): IArticle[] => {
      if (search) {
        return articles.filter((article) => {
          const articleTitle = article.title.toLowerCase();
          return articleTitle.includes(search.toLowerCase());
        })
      } else if (category) {
        return articles.filter((article) => {
          return article.category === category;
        })
      } else {
        return articles
      }
    }

    return filterArticles(category)
  }, [category, search, articles]);

  // install react-router-dom, update basename, and homepage in package.json
  return (
    <BrowserRouter basename="/itblog"> 
      <div className={styles.App}>
        <Nav 
          onHandleHeader={handleHeader} 
          onHandleNavigation={handleNavigation} 
          onHandleSearch={handleSearch}
        />
        { category || search ? 
          <div className={styles.Spacer}></div> 
          : <Header numArticles={articles.length} /> 
        }
        {filteredArticles.length > 0 ? 
          (
            <>
              {filteredArticles.map((article, index) => (
                <Article
                  key={index}
                  {...article} // spread syntax
                />
              ))}
            </>
          ) : (
            <FailedSearch />
          )
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
