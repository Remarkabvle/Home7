import ProductCard from './ProductCard';
import './Products.css';

const cardImage = '/images/cardimg.png';

const products = [
  { id: 1, name: 'Spiced Mint', price: '9.99$', image: cardImage },
  { id: 2, name: 'Sweet Strawberry', price: '9.99$', image: cardImage },
  { id: 3, name: 'Cool Blueberries', price: '9.99$', image: cardImage },
  { id: 4, name: 'Juicy Lemon', price: '9.99$', image: cardImage },
  { id: 5, name: 'Fragrant Cinnamon', price: '9.99$', image: cardImage },
  { id: 6, name: 'Summer Cherries', price: '9.99$', image: cardImage },
  { id: 7, name: 'Clean Lavender', price: '9.99$', image: cardImage },
  { id: 8, name: 'Clean Lavender', price: '9.99$', image: cardImage },
];

const Products = () => {
  return (
    <div className="products-container container">
      <h1 className="title">Products</h1>
      <p className="subtitle">Order it for you or for your beloved ones</p>
      <div className="productsGrid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
