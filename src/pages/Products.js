import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'; // Asegúrate de crear este archivo CSS

const Products = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      title: 'Barritas',
      description: 'Barritas energéticas de sabor a chocolate.',
      price: 29.99,
      image: 'https://www.loveandlemons.com/wp-content/uploads/2022/09/protein-bars.jpg',
    },
    {
      id: 2,
      title: 'Galletas',
      description: 'Galletas de vainilla con chispas de chocolate.',
      price: 19.99,
      image: 'https://www.dreamsavant.com/wp-content/uploads/2020/05/chocolate-chip-cookies.jpg',
    },
    {
      id: 3,
      title: 'Azúcar',
      description: 'Azúcar granulada de 1 kg.',
      price: 35.50,
      image: 'https://www.thecountrycook.net/wp-content/uploads/2022/06/powdered-sugar.jpg',
    },
    {
      id: 4,
      title: 'Arroz',
      description: 'Arroz de grano largo de 1 kg.',
      price: 20.00,
      image: 'https://www.seriouseats.com/thmb/J-wfM7KfPpYmEJfLA8jExOsNU7Q=/1500x0/filters:no_upscale/quality:90/Serious_Eats_The_Best_Basmati_Rice_Horizontal_3a2de3de1c0c4145930f0b8bc37cf7e0.jpg',
    },
    {
      id: 5,
      title: 'Frijoles Negros',
      description: 'Frijoles negros enlatados, 400 g.',
      price: 25.00,
      image: 'https://www.thecountrycook.net/wp-content/uploads/2020/03/canned-black-beans.jpg',
    },
    {
      id: 6,
      title: 'Aceite de Oliva',
      description: 'Aceite de oliva extra virgen de 500 ml.',
      price: 95.00,
      image: 'https://cdn.shopify.com/s/files/1/0003/7784/1677/products/AceiteDeOlivaExtraVirgen_2_1600x.jpg?v=1612267043',
    },
    {
      id: 7,
      title: 'Sal',
      description: 'Sal de mesa de 1 kg.',
      price: 10.00,
      image: 'https://www.healthline.com/hlcmsresource/images/AN_images/salt-spray-1296x728-header-1296x728.jpg',
    },
    {
      id: 8,
      title: 'Pasta',
      description: 'Pasta de trigo duro, 500 g.',
      price: 18.00,
      image: 'https://www.simplyrecipes.com/thmb/XF9Iip-8TcYFnWnB1HNHl4xHqCo=/1500x0/filters:no_upscale/quality:90/simplyrecipes.com/recipes/spaghetti_alla_puttanesca_3f8c79f43070400368da97c2982e2768.jpg',
    },
    {
      id: 9,
      title: 'Leche',
      description: 'Leche entera de 1 litro.',
      price: 22.00,
      image: 'https://www.milkmeansmore.org/wp-content/uploads/2020/03/milk-3.jpg',
    },
    {
      id: 10,
      title: 'Yogur',
      description: 'Yogur natural, 200 g.',
      price: 15.00,
      image: 'https://www.loveandlemons.com/wp-content/uploads/2021/01/yogurt.jpg',
    },
    {
      id: 11,
      title: 'Huevos',
      description: 'Caja de 12 huevos grandes.',
      price: 40.00,
      image: 'https://www.verywellfit.com/thmb/VD3zMFsAhGlcqa3NiZTxhM5wFug=/1500x0/filters:no_upscale/quality:90/12-large-eggs-in-a-carton-1210978520-5d8535a8a4b0690018b1d00d.jpg',
    },
    {
      id: 12,
      title: 'Pan de caja',
      description: 'Pan de caja, 500 g.',
      price: 25.00,
      image: 'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/4920.jpg?itok=dZoW3Ov0',
    },
    {
      id: 13,
      title: 'Mermelada',
      description: 'Mermelada de fresa, 300 g.',
      price: 30.00,
      image: 'https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe/recipe-image-legacy-id-14116_11.jpg',
    },
    {
      id: 14,
      title: 'Salsas',
      description: 'Salsa de tomate, 400 g.',
      price: 20.00,
      image: 'https://cdn.shopify.com/s/files/1/0003/7784/1677/products/SalsaDeTomate_4_1200x.jpg?v=1612267415',
    },
    {
      id: 15,
      title: 'Gaseosa',
      description: 'Gaseosa de cola, 1.5 litros.',
      price: 20.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Coca-Cola_2L.jpg',
    },
    {
      id: 16,
      title: 'Cereal',
      description: 'Cereal de maíz, 300 g.',
      price: 45.00,
      image: 'https://cdn.shopify.com/s/files/1/0182/1204/products/Cereal-Kellogg-s-Mais-500gr-1_800x.jpg?v=1623358235',
    },
    {
      id: 17,
      title: 'Atún',
      description: 'Lata de atún en agua, 170 g.',
      price: 25.00,
      image: 'https://www.starkist.com/asset/image/93046/atunns-8216_02_cropped.jpg',
    },
    {
      id: 18,
      title: 'Jugo',
      description: 'Jugo de naranja, 1 litro.',
      price: 30.00,
      image: 'https://www.donaldson.com/content/dam/ocp/donaldson/en/recipes/ORANGE_JUICE_1.jpg',
    },
    {
      id: 19,
      title: 'Chocolate',
      description: 'Tableta de chocolate, 100 g.',
      price: 20.00,
      image: 'https://cdn.shopify.com/s/files/1/0980/9923/products/Chocolate-Dulce-de-Leche-1_800x.jpg?v=1612989242',
    },
    {
      id: 20,
      title: 'Café',
      description: 'Café molido, 250 g.',
      price: 60.00,
      image: 'https://i.imgur.com/5j6J8bp.jpg',
    },
    {
      id: 21,
      title: 'Té',
      description: 'Té de hierbas, 20 bolsas.',
      price: 30.00,
      image: 'https://cdn.shopify.com/s/files/1/0003/7784/1677/products/Tea_1200x.jpg?v=1612267043',
    },
    {
      id: 22,
      title: 'Gelatina',
      description: 'Gelatina de sabor, 90 g.',
      price: 10.00,
      image: 'https://www.taste.com.au/images/4d213408aa47b2a86d9534aa6501f2e6.jpg',
    },
    {
      id: 23,
      title: 'Chocolate en polvo',
      description: 'Chocolate en polvo, 400 g.',
      price: 50.00,
      image: 'https://i.imgur.com/fPckICF.jpg',
    },
    {
      id: 24,
      title: 'Sopa instantánea',
      description: 'Sopa instantánea de pollo, 60 g.',
      price: 15.00,
      image: 'https://www.ourbestbites.com/wp-content/uploads/2021/01/ChickenNoodleSoup.jpg',
    },
    {
      id: 25,
      title: 'Papas fritas',
      description: 'Papas fritas de sabor original, 200 g.',
      price: 25.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Chips_Potato.jpg/640px-Chips_Potato.jpg',
    },
    {
      id: 26,
      title: 'Chicles',
      description: 'Chicles de menta, paquete de 10.',
      price: 15.00,
      image: 'https://cdn.shopify.com/s/files/1/0003/7784/1677/products/Gum_1200x.jpg?v=1612267043',
    },
    {
      id: 27,
      title: 'Tortillas',
      description: 'Tortillas de maíz, paquete de 1 kg.',
      price: 30.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tortilla-Mexican-cuisine.jpg/640px-Tortilla-Mexican-cuisine.jpg',
    },
    {
      id: 28,
      title: 'Cebolla',
      description: 'Cebolla blanca, 1 kg.',
      price: 15.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Onions.jpg/640px-Onions.jpg',
    },
    {
      id: 29,
      title: 'Ajo',
      description: 'Cabeza de ajo, 200 g.',
      price: 12.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Garlic.jpg/640px-Garlic.jpg',
    },
    {
      id: 30,
      title: 'Mantequilla',
      description: 'Mantequilla, 200 g.',
      price: 45.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Butter.jpg/640px-Butter.jpg',
    },
    {
      id: 31,
      title: 'Sardinas',
      description: 'Lata de sardinas en aceite, 125 g.',
      price: 20.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sardines_in_a_can.jpg/640px-Sardines_in_a_can.jpg',
    },
    {
      id: 32,
      title: 'Mostaza',
      description: 'Mostaza, 500 g.',
      price: 25.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Mustard.jpg/640px-Mustard.jpg',
    },
    {
      id: 33,
      title: 'Mayonesa',
      description: 'Mayonesa, 400 g.',
      price: 30.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Mayonnaise.jpg/640px-Mayonnaise.jpg',
    },
    {
      id: 34,
      title: 'Ketchup',
      description: 'Ketchup, 500 g.',
      price: 25.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Ketchup.jpg/640px-Ketchup.jpg',
    },
    {
      id: 35,
      title: 'Vinagre',
      description: 'Vinagre blanco, 500 ml.',
      price: 15.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Vinegar.jpg/640px-Vinegar.jpg',
    },
    {
      id: 36,
      title: 'Cereal integral',
      description: 'Cereal integral, 300 g.',
      price: 60.00,
      image: 'https://cdn.shopify.com/s/files/1/0003/7784/1677/products/WholeGrainCereal_1200x.jpg?v=1612267043',
    },
    {
      id: 37,
      title: 'Gel antibacterial',
      description: 'Gel antibacterial, 250 ml.',
      price: 50.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Antibacterial_Gel.jpg/640px-Antibacterial_Gel.jpg',
    },
    {
      id: 38,
      title: 'Detergente',
      description: 'Detergente para ropa, 1.5 litros.',
      price: 85.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Laundry_Detergent.jpg/640px-Laundry_Detergent.jpg',
    },
    {
      id: 39,
      title: 'Papel higiénico',
      description: 'Paquete de 12 rollos de papel higiénico.',
      price: 60.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Toilet_Paper.jpg/640px-Toilet_Paper.jpg',
    },
    {
      id: 40,
      title: 'Fideos',
      description: 'Fideos de trigo, 500 g.',
      price: 20.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Pasta.jpg/640px-Pasta.jpg',
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Precio: ${product.price.toFixed(2)}</p>
          </Link>
          <button className="add-to-cart" onClick={() => addToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
