import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();

  // Define tus propios productos aquí, igual que en Products.js
  const products = [
    {
      id: 1,
      title: 'Producto 1',
      description: 'Barritas fresa',
      price: 29.99,
      image: 'url_de_imagen_del_producto_1.jpg', // Reemplaza con la URL de tu imagen
    },
    {
      id: 2,
      title: 'Producto 2',
      description: 'Descripción del producto 2',
      price: 49.99,
      image: 'url_de_imagen_del_producto_2.jpg', // Reemplaza con la URL de tu imagen
    },
    {
      id: 3,
      title: 'Producto 3',
      description: 'Descripción del producto 3',
      price: 19.99,
      image: 'https://grupodjes.com/wp-content/uploads/2022/11/coca_600_ml-removebg-preview.png', // Reemplaza con la URL de tu imagen
    },
    // Agrega más productos según sea necesario
  ];

  // Busca el producto basado en el ID
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div className="product-detail-container">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ maxWidth: '200px', height: 'auto' }} />
      <p>{product.description}</p>
      <p className="price">Precio: ${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductDetail;
