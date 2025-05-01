import useCart from '../hooks/useCart';
import { formatCurrency } from '../global/helpers';

const Cart = () => {
  const cart = useCart();

  if (!cart) {
    return <p>Loading...</p>;
  }

  const total = cart.items.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      <div>
        {cart.items.map((item: any) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>{formatCurrency(item.price * item.quantity)}</span>
          </div>
        ))}
      </div>
      <div className="text-right">
        <h2 className="font-bold">Total: {formatCurrency(total)}</h2>
      </div>
    </div>
  );
};

export default Cart;
