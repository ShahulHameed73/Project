// import { useDispatch, useSelector } from "react-redux";
// import { incrementQuantity, decrementQuantity, removeFromCart } from "./store";
// import { useState } from "react";
// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart); 
//   const dispatch = useDispatch();
//   //taking the variable to maintain the data
//   const [discountPercentageAmount, setDiscountPercentageAmount] = useState(0);
//   // const handleDiscountPercentage = (discountValue)=>{
//   //   setDiscountPercentageAmount(discountAmount);
//   // }
//     //calculating the discount
//     const [couponCode,setCouponCode] = useState(' ');
//     const [couponDiscountPercentage,setCouponDiscountPercentage] = useState(0);
//     const handleApplyCoupon = ()=>{
//       switch(couponCode){
//       case 'A786S10':
//         setCouponDiscountPercentage(10);
//         case 'SA78620':
//           setCouponDiscountPercentage(20);
//           case 'S786H10':
//             setCouponDiscountPercentage(30);
//             default:
//               alert('invalid coupon code');
//               setCouponDiscountPercentage(0);
  
  
//       }
//     }

//  //calculating the logics
//   const calculateTotal = () => {
//     const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity,0);
//     const discountAmount = (total * discountPercentageAmount) / 100;
// const couponDiscount = (total * couponDiscountPercentage) / 100;
   
// const totalDiscount = discountAmount + couponDiscount;
// const netAmount = total - totalDiscount;

//     return { total, totalDiscount, netAmount};
//   };

//  const { total , 
//   discountAmount, netAmount } = calculateTotal();
//  return (
//     <>
//       <h2>Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.name}>
//               {item.name} - Price: ${item.price}
//                 <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
//                 <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
//                  Quantity: {item.quantity}
//                 {/* <button onClick={() => dispatch(removeFromCart(item))}>Remove</button> */}
            
//             </li>
//           ))}
//         </ul>
//       )}

//       <h3>Total before discounts: ${total.toFixed(2)}</h3>
//       <button onClick={() => setDiscountPercentageAmount(10)}>Apply 10% Discount</button>
//         <button onClick={() => setDiscountPercentageAmount(20)}>Apply 20% Discount</button>
//         <button onClick={() => setDiscountPercentageAmount(30)}>Apply 30% Discount</button>
//         <input type="text" value={couponCode} onChange={(e)=>setCouponCode(e.target.value)} placeholder="Enter the coupon code"/>
//         <button onClick={handleApplyCoupon}>Apply Coupon</button>
//        <p>Discount Percentage Applied: {discountPercentageAmount}%</p>
//           <p>Coupon Discount: {couponDiscountPercentage}%</p>
//       <p>Discount Amount: ${discountAmount.toFixed(2)}</p>
//       <p>Final Amount after Discount: ${netAmount.toFixed(2)}</p>
//     </>
//   );
// };
// export default Cart;

import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "./store";
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
      case 'A786S10':
        setCouponDiscountPercentage(10);
        break;
      case 'SA78620':
        setCouponDiscountPercentage(20);
        break;
      case 'S786H10':
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
    const netAmount = total - totalDiscount;

    return { total, totalDiscount, netAmount };
  };

  const { total, totalDiscount, netAmount } = calculateTotal();

  return (
    <>
      <h2>Shopping Cart</h2>
      {/* <h3>Increment Button (+): Increases the quantity of a specific item in the cart.When clicked, its triggers an action to update the item quantity in the state
           Decrement Button (-): Decreases the quantity of a specific item in the cart.When clicked, it dispatch an action to reduce the item quantity in the state.
                                     If the quantity reaches zero, it may be removed from the cart entirely.
           Remove Button: Allows users to delete an item from the cart.
                             Clicking this button dispatches an action to remove the item from the cart state.
           Apply discount : Users can apply fixed percentage discounts (10%, 20%, 30%) by clicking buttons.
                              These discounts reduce the total price before applying any coupon codes.
          Apply Coupon Code : Users can enter a coupon code to receive additional discounts.</h3> */}

  
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.name}>
              {item.name} - Price: ${item.price.toFixed(2)}
             
                <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
                <span> Quantity: {item.quantity} </span>
                <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
                <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
             
            </li>
          ))}
        </ul>
      )}
 <h3>Total before discounts: ${total.toFixed(2)}</h3>
      <button onClick={() => setDiscountPercentageAmount(10)}>Apply 10% Discount</button>
        <button onClick={() => setDiscountPercentageAmount(20)}>Apply 20% Discount</button>
        <button onClick={() => setDiscountPercentageAmount(30)}>Apply 30% Discount</button>
   
 <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Enter the coupon code" />
        <button onClick={handleApplyCoupon}>Apply Coupon</button>
      <p>Regular Discount: {discountPercentageAmount}%</p>
      <p>Coupon Discount: {couponDiscountPercentage}%</p>
      <p>Total Discount Amount: ${totalDiscount.toFixed(2)}</p>
      <p>Final Amount after Discount: ${netAmount.toFixed(2)}</p>
    </>
  );
};

export default Cart;
