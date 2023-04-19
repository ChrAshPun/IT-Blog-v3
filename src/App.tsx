import './App.scss';
import Nav from './components/Nav';
import Header from './components/Header';
import ArticleCompact from './components/ArticleCompact';

function App() {
  const article = {
    title: 'title',
    description: 'descrip',
    category: 'Operating Systems',
    imgSrc: 'src',
    imgAlt: 'alt',
  }

  return (
    <div className="App">
      <Nav/>
      <Header/>
      <ArticleCompact props={article} />
    </div>
  );
}

export default App;
