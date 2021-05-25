import React from 'react';
import LoderImg from '../loader-200.svg';
import '../App.css';

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px', color: 'white' }}>
        <img src={LoderImg} className="loader" /> Carregando...
      </p>
    );
  };
}
export default WithListLoading;
