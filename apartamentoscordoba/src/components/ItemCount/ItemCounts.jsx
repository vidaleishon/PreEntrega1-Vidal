import { useState } from 'react';

const ItemCounts = ({ initial = 1, stock = 30, onAdd }) => {
  const [count, setCount] = useState(initial);

  const incrementCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="card mt-5 w-50" id="itemcount">
      <div className="card-body row">
        <div className="col">
          <button className="btn btn-outline-dark w-100" onClick={incrementCount}> + </button>
        </div>
        <div className="col">
          <center>
            <label>{count}</label>
          </center>
        </div>
        <div className="col">
          <button className="btn btn-outline-dark w-100" onClick={decrementCount}> - </button>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-outline-dark w-100" onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCounts;