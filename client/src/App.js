import classes from './App.module.css';
import {SearchBar} from './components/SearchBar';
import {KeywordList} from './components/KeywordList';
import {VideoList} from './components/VideoList';

function App () {
  return (
    <div>
      <SearchBar />
      <KeywordList />
      <VideoList />
    </div>
  );
}

export default App;
