import React from 'react';
import { Link } from 'react-router-dom';

const ListPlanosTablet = (props) => {

  const { repos } = props;

  if (!repos || repos.length === 0) return <p style={{ color: 'white' }}>Sem dados no momento, desculpe.</p>;

  return (
      <div className="card-deck">
        {repos.map((repo) => {
            return (
            <div key={repo.sku} className='card'>
                <div className="card-body">
                    <h1 className='card-title'>{repo.franquia}</h1>
                    <p className='card-text'>R$ {repo.valor}</p>
                    <Link to="/assinar" className="btn btn-success">Assinar</Link>
                </div>
            </div>
            );
        })}
    </div>
  );
};

export default ListPlanosTablet;
