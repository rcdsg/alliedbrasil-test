import React from 'react';
import { Link } from 'react-router-dom';
import ImgPlanosTablet from '../planos-tablet.png';
import ImgPlanosPC from '../planos-pc.png';
import ImgPlanosWifi from '../planos-wifi.png';

const List = (props) => {

  const { repos } = props;

  if (!repos || repos.length === 0) return <p style={{ color: 'white' }}>Sem dados no momento, desculpe.</p>;

  return (
      <div className="card-deck">
        
        {repos.map((repo) => {
          
            // Condition Tablet
            if (repo.sku == 'TBT01') return (
            <div key={repo.sku} className='card'>
                <Link to="/planos/tablet">
                <img className="card-img-top" src={ImgPlanosTablet} alt="Planos Tablet" />
                </Link>
                <div className="card-body">
                    <h3 className='card-title'>{repo.nome}</h3>
                    <p className='card-text'>{repo.descricao}</p>
                    
                    <Link to="/planos/tablet" className="btn btn-success">Escolher</Link>
                </div>
            </div>
            );// end return
            
            // Condition PC
            if (repo.sku == 'CPT02') return (
              <div key={repo.sku} className='card'>
                  <Link to="/planos/pc" >
                  <img className="card-img-top" src={ImgPlanosPC} alt="Planos PC" />
                  </Link>
                  <div className="card-body">
                      <h3 className='card-title'>{repo.nome}</h3>
                      <p className='card-text'>{repo.descricao}</p>
                      <Link to="/planos/pc" className="btn btn-success">Escolher</Link>
                  </div>
              </div>
              );// end return

              // Condition Wifi
              if (repo.sku == 'WF03') return (
                <div key={repo.sku} className='card'>
                    <Link to="/planos/wifi" >
                    <img className="card-img-top" src={ImgPlanosWifi} alt="Planos Wifi" />
                    </Link>
                    <div className="card-body">
                        <h3 className='card-title'>{repo.nome}</h3>
                        <p className='card-text'>{repo.descricao}</p>
                        <Link to="/planos/wifi" className="btn btn-success">Escolher</Link>
                    </div>
                </div>
                );// end return

        })}

    </div>
  );
};

export default List;
