import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

class Form extends Component {

    constructor(props){
        super(props)
        this.state = { email:'',name:'',nascimento:'',cpf:'',tel:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

      
    handleSubmit(event){
        const { email, name, nascimento, cpf, tel } = this.state
        event.preventDefault()
        console.log("%cAssinatura realizada com sucesso! ","color: #003b71; font-size: 1.5em; font-weight: bold;");
        console.log("%cDados do Solcitante: ","color: #666; font-size: 1em;");
        console.log(`
        Nome : ${name}
        E-mail : ${email}
        Data de Nascimento : ${nascimento}
        CPF : ${cpf}
        Telefone : ${tel}
        
        `)
    }

    handleChange(event){
        this.setState({
        [event.target.name] : event.target.value
        })
    }

    render() {
        return (
            <div className="formSection">
                <form className="lightSkin" onSubmit={this.handleSubmit} >

                    <div className="form-row">
                        
                        <div className="form-group col-md-6">
                            <label for="inputNome">Nome</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="inputNome" placeholder="Nome"></input>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputEmail">E-mail</label>
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="inputEmail" placeholder="E-mail"></input>
                        </div>
                        
                    </div>

                    <div className="form-row">
                        
                        <div className="form-group col-md-4">
                            <label for="inputNasc">Nascimento</label>
                            <input type="text" name="nascimento" value={this.state.nascimento} onChange={this.handleChange} className="form-control" id="inputNasc" placeholder="dd/mm/aa"></input>
                        </div>

                        <div className="form-group col-md-4">
                            <label for="inputCPF">CPF</label>
                            <input type="text" name="cpf" value={this.state.cpf} onChange={this.handleChange} className="form-control" id="inputCPF" placeholder="000.000.000-00"></input>
                        </div>

                        <div className="form-group col-md-4">
                            <label for="inputTel">Telefone</label>
                            <input type="tel" name="tel" value={this.state.tel} onChange={this.handleChange} className="form-control" id="inputTel" placeholder="(DDD) + Número"></input>
                        </div>
                        
                    </div>

                    <button type="submit" className="btn btn-primary">ASSINAR</button>

                </form>
            </div>
        );console.log('Solicitante: ' + this.state.nomeUser);
    }

}

export default Form;