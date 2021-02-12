import {useContext} from 'react';
import {SearchBar} from './components/SearchBar';
import {KeywordList} from './components/KeywordList';
import {VideoList} from './components/VideoList';
import {GlobalProvider} from './context/GlobalState';
import {GlobalContext} from './context/GlobalState';

function App () {
  const {loading} = useContext(GlobalContext);

  return (
    <GlobalProvider>
      <SearchBar />
      <KeywordList />
      <VideoList />
    </GlobalProvider>
  );
}

export default App;
