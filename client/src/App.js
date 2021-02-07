import {SearchBar} from './components/SearchBar';
import {KeywordList} from './components/KeywordList';
import {VideoList} from './components/VideoList';
import {GlobalProvider} from './context/GlobalState';

function App () {

  return (
    <GlobalProvider>
      <SearchBar />
      <KeywordList />
      <VideoList />
    </GlobalProvider>
  );
}

export default App;
