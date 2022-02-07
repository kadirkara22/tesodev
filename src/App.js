import { useState } from 'react';
import './App.scss';
import Content from './components/content/Content';
import ListPage from './components/content/ListPage';
import Logo from './components/logo/Logo';



function App() {
  const [more, setMore] = useState(false);

  return (
    <div className="app">
      {
        more === false ?
          <>
            <Logo />
            <Content showMore={setMore} />
          </>
          :
          <ListPage />

      }


    </div>
  );
}

export default App;
