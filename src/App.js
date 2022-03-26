import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card/Card";
import Navbar from "./Navbar/Navbar";
import Modal from "react-modal";
import { CgCloseR } from "react-icons/cg";

Modal.setAppElement("#root");

function App() {
  const [bikes, setbikes] = useState([]);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  console.log(bikes);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "500px",
      width: "600px",
      overflow: "auto",
    },
  };

  const handleAddToCart = (bike) => {
    const newCart = [...cart, bike];
    setCart(newCart);
  };

  const toggleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const emptyModal = () => {
    setModal(false);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setbikes(data));
  }, []);

  return (
    <div>
      <Navbar cart={cart} toggleModal={toggleModal} />
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
            <h1>Name: {item.name}</h1>
          ))}
          <button className="modal-close-button" onClick={closeModal}>
            <h1 id="chooseForMe">Choose one for me</h1>
          </button>
          <button className="modal-close-button" onClick={emptyModal}>
            <h1 id="emptyCart">Empty Cart</h1>
          </button>
        </div>
      </div>
      <Modal isOpen={modal} onRequestClose={closeModal} style={customStyles}>
        <button className="modal-close-button" onClick={closeModal}>
          <CgCloseR size={25} />
        </button>
        {cart.length === 0 && (
          <div className="cart-warning">
            <p> Cart is empty </p>
          </div>
        )}
        {cart.map((item) => (
          <h1>Name: {item.name}</h1>
        ))}
        <button className="modal-close-button" onClick={closeModal}>
          <h1 id="chooseForMe">Choose one for me</h1>
        </button>
        <button className="modal-close-button" onClick={emptyModal}>
          <h1 id="emptyCart">Empty Cart</h1>
        </button>
      </Modal>
    </div>
  );
}

export default App;
