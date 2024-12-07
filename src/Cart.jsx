// import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart, clearCart, addPurchase } from "./store";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart); // Get cart items from Redux store
  const dispatch = useDispatch(); // Use dispatch to send actions

  // State variables for discounts and coupon codes
  const [discountPercentageAmount, setDiscountPercentageAmount] = useState(0); // Regular percentage discount
  const [couponCode, setCouponCode] = useState(''); // Track user-entered coupon code
  const [couponDiscountPercentage, setCouponDiscountPercentage] = useState(0); // Discount from coupon

  // Function to handle coupon application
  const handleApplyCoupon = () => {
    switch (couponCode) {
      case 'SA78610':
        setCouponDiscountPercentage(10);
        break;
      case 'SA78620':
        setCouponDiscountPercentage(20);
        break;
      case 'SS78630':
        setCouponDiscountPercentage(30);
        break;
      default:
        alert('Invalid coupon code');
        setCouponDiscountPercentage(0); // Reset coupon discount if invalid
    }
  };

  // Function to calculate total, discount, and net amount
  const calculateTotal = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0); // Sum of item prices * quantities
    const percentageDiscount = (total * discountPercentageAmount) / 100;
    const couponDiscount = (total * couponDiscountPercentage) / 100;
    const totalDiscount = percentageDiscount + couponDiscount;
    const finalAmount = total - totalDiscount;

    return { total, totalDiscount, finalAmount };
  };

  const handleCompletePurchase = () => {
    //taking the values
    const { finalAmount } = calculateTotal();
    const purchaseDate = new Date().toLocaleDateString();

    //using above values making the object
    const purchaseDetails = {
      date: purchaseDate,
      items: [...cartItems],
      totalDiscount: Number(finalAmount),
    };
    //dispatch the clear cart action to store
    dispatch(clearCart());
    //sending the object to addPurchase() reducer input
    dispatch(addPurchase(purchaseDetails));
  };

  // Only calculate the total, discounts, etc., when there are items in the cart
  const { total, totalDiscount, finalAmount } = cartItems.length > 0 ? calculateTotal() : { total: 0, totalDiscount: 0, finalAmount: 0 };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li key={item.name} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - Price: ${item.price.toFixed(2)}
                <div>
                  <button className="btn btn-warning btn-sm" onClick={() => dispatch(decrementQuantity(item))}>-</button>
                  <span className="mx-2"> Quantity: {item.quantity} </span>
                  <button className="btn btn-warning btn-sm" onClick={() => dispatch(incrementQuantity(item))}>+</button>
                  <button className="btn btn-danger btn-sm ml-2" onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          {/* Discount Calculation Section */}
          <div className="mb-4">
            <h3>Total before discounts: ${total.toFixed(2)}</h3>
            <button className="btn btn-primary me-2" onClick={() => setDiscountPercentageAmount(10)}>Apply 10% Discount</button>
            <button className="btn btn-primary me-2" onClick={() => setDiscountPercentageAmount(20)}>Apply 20% Discount</button>
            <button className="btn btn-primary" onClick={() => setDiscountPercentageAmount(30)}>Apply 30% Discount</button>
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter the coupon code"
            />
            <button className="btn btn-success mt-2" onClick={handleApplyCoupon}>Apply Coupon</button>
          </div>

          <div className="mb-4">
            <p>Regular Discount: {discountPercentageAmount}%</p>
            <p>Coupon Discount: {couponDiscountPercentage}%</p>
            <p>Total Discount Amount: ${totalDiscount.toFixed(2)}</p>
            <p><strong>Final Amount: ${finalAmount.toFixed(2)}</strong></p>
          </div>

          <button className="btn btn-success w-100" onClick={handleCompletePurchase}>Complete Purchase</button>
        </>
      )}
    </div>
  );
};

export default Cart;
