import { GetServerSideProps } from 'next';
import { getProductById } from '../services/productService';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  
  const product = await getProductById(id as string);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

const ProductDetail = ({ product }: { product: any }) => {
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center space-x-6">
        <img src={product.image} alt={product.name} className="w-48 h-48 object-cover" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg mt-2">{product.description}</p>
          <p className="text-xl mt-4">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
