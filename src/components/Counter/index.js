import React from 'react';

import { FiMinus, FiPlus } from 'react-icons/fi';

import './styles.css';

const Counter = () => {
  const [quantidade, setQuantidade] = React.useState(0);

  return (
    <>
      <div className="couter">
        <div className="form">
          <button
            className="btn btn-circle"
            onClick={() => setQuantidade(quantidade > 0 ? quantidade - 1 : 0)}
          >
            <FiMinus size={15} />
          </button>
          <input
            type="text"
            value={quantidade}
            className="item"
            name="quantidade"
          />
          <button
            className="btn btn-circle"
            onClick={() => setQuantidade((quantidade) => quantidade + 1)}
          >
            <FiPlus size={15} />
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="btn btn-card btn-primary">Adcionar</button>
      </div>
    </>
  );
};

export default Counter;
