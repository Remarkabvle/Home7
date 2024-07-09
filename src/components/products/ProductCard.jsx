import Link from 'next/link';
import Image from 'next/image';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} passHref>
      <div className="card">
        <Image src={product.image} alt={product.name} width={150} height={200} />
        <div>
          <h3 className="productName">{product.name}</h3>
          <p className="productPrice">{product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
