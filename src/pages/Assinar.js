import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Header from '../components/Header';
import TitlePage from '../components/TitlePage';
import Form from '../components/Form';
import Footer from '../components/Footer';

class Assinar extends Component {
 render() {
    return (
        <div className="App checkout">

            <Header></Header>

            <div className='main'>
            <div className='container'>
            <header>
                <TitlePage title="Checkout" />
                <h4>Preencha o formulário para concluir seu pedido:</h4>
            </header>
            
            <div className="plano-escolhido">Plano escolhido: <strong>PC</strong> | 2GB</div>

            <Form></Form>

            <footer><Link to="/" className='btn btn-success'>Voltar para Planos</Link></footer>
            
            </div>
        </div>

        <Footer></Footer>

        </div>
    );
 }
}
export default Assinar;