import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card/Card";
import Navbar from "./Navbar/Navbar";
import Modal from "react-modal";
import { resetState } from "react-modal/lib/helpers/ariaAppHider";

Modal.setAppElement("#root");

function App() {
  const [bikes, setbikes] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(bikes);

  const handleAddToCart = (bike) => {
    const newCart = [...cart, bike];
    setCart(newCart);
  };


  const emptyCart = () => {
    console.log('Hello');
  };

  const chooseItem = () => {
    console.log(Math.floor(Math.random() * 13));
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setbikes(data));
  }, []);

  return (
    <div>
      <Navbar cart={cart}/>
      <div className="shop-container">
        <div className="card-container">
          {bikes.map((bike) => (
            <Card bike={bike} key={bike.id} handleAddToCart={handleAddToCart} />
          ))}
        </div>
        <div className="summary-container">
          <h1>Selected Bikes</h1>
          {cart.length === 0 && (
            <div className="cart-warning">
              <p> Cart is empty </p>
            </div>
          )}
          {cart.map((item) => (
            <h1>{item.name}</h1>
          ))}
          <button className="modal-close-button" onClick={chooseItem}>
            <h1 id="chooseForMe">Choose one for me</h1>
          </button>
          <button className="modal-close-button" onClick={emptyCart}>
            <h1 id="emptyCart">Empty Cart</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
