import classes from './App.module.css';
import {SearchBar} from './components/SearchBar';
import {KeywordList} from './components/KeywordList';

function App () {
  return (
    <div>
      <SearchBar />
      <KeywordList />
    </div>
  );
}

export default App;
