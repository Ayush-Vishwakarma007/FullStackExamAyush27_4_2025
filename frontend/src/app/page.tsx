
import { getProducts } from './services/productService';
import ProductCard from './components/ProductCard';

const Page = async () => {
  let data = { products: [] };
  try {
    data = await getProducts(1);
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Product Listing</h1>
      {Array.isArray(data?.products) && data?.products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data?.products.map((product: any, index: number) => (
            <ProductCard key={product.id || index} product={product} />
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default Page;


