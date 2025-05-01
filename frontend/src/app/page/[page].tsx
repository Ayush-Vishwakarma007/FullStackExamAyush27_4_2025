import { GetServerSideProps } from 'next';
import ProductList from '../components/ProductList';
import { getProducts } from '../services/productService';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = 1 } = context.params!;
  
  const data = await getProducts(Number(page));

  return {
    props: {
      products: data.products,
      totalPages: data.totalPages,
      currentPage: Number(page),
    },
  };
};

const PaginatedPage = ({ products, totalPages, currentPage }: { products: any[], totalPages: number, currentPage: number }) => {
  return <ProductList products={products} totalPages={totalPages} currentPage={currentPage} />;
};

export default PaginatedPage;
