"use client";
import { useParams } from 'next/navigation';
import products from '../../../data/products';
import Image from 'next/image';
import { useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [subscription, setSubscription] = useState(false);
  const [frequency, setFrequency] = useState('4 weeks');
  const product = products.find(item => item.id === parseInt(id, 10));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="productDetail">
      <div className="productDetailContainer">
        <div className="productDetailLeft">
          <Image src={product.image} alt={product.name} width={300} height={400} />
        </div>
        <div className="productDetailRight">
          <h3 className="productName">{product.name}</h3>
          <p className="productPrice">{product.price}</p>
          <div className="quantityControl">
            <button onClick={() => setQuantity(q => Math.max(q - 1, 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
          <div className="subscription">
            <label>
              <input
                type="radio"
                name="purchaseType"
                checked={!subscription}
                onChange={() => setSubscription(false)}
              />
              One time purchase
            </label>
            <label>
              <input
                type="radio"
                name="purchaseType"
                checked={subscription}
                onChange={() => setSubscription(true)}
              />
              Subscribe and delivery every
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
              >
                <option value="2 weeks">2 weeks</option>
                <option value="4 weeks">4 weeks</option>
                <option value="6 weeks">6 weeks</option>
              </select>
            </label>
            {subscription && (
              <p>Subscribe now and get 10% off on every recurring order.</p>
            )}
          </div>
          <button className="addToCart">
            <IoCartOutline /> Add to Cart
          </button>
        </div>
      </div>
      <p className="productDetailText">
        All hand-made with natural soy wax, Candleaf is made for your pleasure moments.
      </p>
      <p className="freeShipping">🚚 FREE SHIPPING</p>
    </div>
  );
};

export default ProductDetail;
