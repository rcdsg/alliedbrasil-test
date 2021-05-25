import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';
import Header from './components/Header';
import TitlePage from './components/TitlePage';
import Footer from './components/Footer';

function App() {

  const ListLoading = withListLoading(List);

  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://private-59658d-celulardireto2017.apiary-mock.com/plataformas`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos.plataformas });
      });
  }, [setAppState]);
  
  return (
    <div className='App home'>

      <Header></Header>
      
      <div className='main'>
        <div className='container'>
          <header>
            <TitlePage title="Nossas Plataformas" />
            <h4 className=''>Escolha o plano que você deseja:</h4>
          </header>
          <ListLoading isLoading={appState.loading} repos={appState.repos} />
        </div>
      </div>

      <Footer></Footer>

    </div>
  );
}

export default App;
