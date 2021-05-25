import React from 'react';
import { Link } from 'react-router-dom';
import { Reception4 } from 'react-bootstrap-icons';

const ListPlanosPC = (props) => {

  const { repos } = props;

  if (!repos || repos.length === 0) return <p style={{ color: 'white' }}>Sem dados no momento, desculpe.</p>;

  return (
      <div className="card-deck">

        {repos.map((repo) => {
            
            if (repo.aparelho.valorParcela == false) return (
            <div key={repo.sku} className='card'>
                <div className="card-body">
                    <h1 className='card-title'>{repo.franquia}</h1>
                    <p className='card-text'>R$ {repo.valor}</p>
                    <h5 className='card-text'>+ <Reception4 /> {repo.aparelho.nome}</h5>
                    <h5 className='card-text parcelas'>{repo.aparelho.numeroParcelas}x R$ {repo.aparelho.valor}</h5>
                    <h6 className='card-text'>ou R$ {repo.aparelho.valor} à vista</h6>
                    <Link to="/assinar" className="btn btn-success">Assinar</Link>
                </div>
            </div>
            );// end return

            if (repo.aparelho.valorParcela != false) return (
              <div key={repo.sku} className='card'>
                  <div className="card-body">
                      <h1 className='card-title'>{repo.franquia}</h1>
                      <p className='card-text'>R$ {repo.valor}</p>
                      <h5 className='card-text'>+ <Reception4 /> {repo.aparelho.nome}</h5>
                      <h5 className='card-text parcelas'>{repo.aparelho.numeroParcelas}x R$ {repo.aparelho.valorParcela}</h5>
                      <h6 className='card-text'>ou R$ {repo.aparelho.valor} à vista</h6>
                      <Link to="/assinar" className="btn btn-success">Assinar</Link>
                  </div>
              </div>
              );// end return

        })}

    </div>
  );
};

export default ListPlanosPC;
