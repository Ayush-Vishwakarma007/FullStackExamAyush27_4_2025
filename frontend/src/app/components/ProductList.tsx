import ProductCard from './ProductCard';

const ProductList = ({ products, totalPages, currentPage }: { products: any[], totalPages: number, currentPage: number }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-2">
          {currentPage > 1 && (
            <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => window.location.href = `/page/${currentPage - 1}`}>Previous</button>
          )}
          <span className="text-xl">{currentPage} / {totalPages}</span>
          {currentPage < totalPages && (
            <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => window.location.href = `/page/${currentPage + 1}`}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
