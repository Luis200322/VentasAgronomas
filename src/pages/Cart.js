import React from 'react';
import './Cart.css';

function Cart({ cart, setCart }) {
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; // Evitar cantidades negativas
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const proceedToCheckout = () => {
    alert(`Total a pagar: $${totalPrice.toFixed(2)}. ¡Gracias por tu compra!`);
  };

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      <div className="cart-content">
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{product.title}</h3>
                  <p>Precio: ${product.price.toFixed(2)}</p>
                  <p>
                    Cantidad:
                    <button onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</button>
                    {product.quantity}
                    <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
                  </p>
                  <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-summary">
          {cart.length > 0 && (
            <>
              <h2>Resumen de Compra</h2>
              <p>Total: ${totalPrice.toFixed(2)}</p>
              <button className="checkout-button" onClick={proceedToCheckout}>
                Proceder al pago
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
