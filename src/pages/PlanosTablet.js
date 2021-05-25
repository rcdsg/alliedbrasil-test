import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ListPlanosTablet from '../components/ListPlanosTablet';
import withListLoading from '../components/withListLoading';
import Header from '../components/Header';
import TitlePage from '../components/TitlePage';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function PlanosTablet() {

  const ListLoading = withListLoading(ListPlanosTablet);

  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://private-59658d-celulardireto2017.apiary-mock.com/planos/TBT01`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos.planos });
      });
  }, [setAppState]);
  
  return (
    <div className='App planos tablet'>

      <Header></Header>
      
      <div className='main'>
        <div className='container'>
          <header>
            <TitlePage title="Tablet" />
            <h4>Planos para o seu Tablet</h4>
          </header>
          <ListLoading isLoading={appState.loading} repos={appState.repos} />
          <footer><Link to="/" className='btn btn-success'>Voltar para Planos</Link></footer>
          
        </div>
      </div>

      <Footer></Footer>

    </div>
  );
}

export default PlanosTablet;
