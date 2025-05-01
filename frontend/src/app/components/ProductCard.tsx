
import Link from 'next/link';

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
      <p className="text-gray-500 mt-2">{product.description}</p>
      <p className="font-bold mt-4">${product.price}</p>
      <Link href={`/product/${product.id}`} className="text-blue-600 mt-4 block">View Product</Link>
    </div>
  );
};

export default ProductCard;
