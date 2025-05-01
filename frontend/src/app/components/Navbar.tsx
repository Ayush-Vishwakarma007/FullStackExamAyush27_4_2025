import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">E-Commerce</Link>
        <div className="flex space-x-6">
          <Link href="/cart" className="text-xl">Cart</Link>
          <Link href="/report" className="text-xl">Report</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
