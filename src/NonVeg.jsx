 import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store';



function NonVeg() {
  // Select nonveg products from the Redux store
  const nonvegProducts = useSelector((state) => state.products.nonVeg); 
  const dispatch = useDispatch()

  // Map over products and render them as list items
  const items = nonvegProducts.map((product, index) => (
    <li key={index}>
      {product.name} - ${product.price.toFixed(2)}
      <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
    </li>
  ));

  return (
    <>
    {/* <h3>The NonVeg component is a functional React component that displays a list of Nonvegetable products in  application.
            The component uses the useSelector hook to retrieve Nonvegetable products from the Redux store,Each Nonvegetable product is rendered in a list format, showing the product name and price.
            Each product has an "Add to cart" button. When clicked, it dispatches the addToCart action, allowing users to add the selected product to their shopping cart.
            The component uses a unique identifier for each list item to optimize React's rendering process and improve performance.
            If there are no Nonvegetable products available, the component displays a message indicating that no products are available.
        </h3> */}
      <h1>This is the NonVeg Page</h1>
      <ul>{items}</ul> {/* Render the list of items inside an unordered list */}
    </>
  );
}

export default NonVeg;
// function NonVeg(){
//     const nonvegProducts = useSelector((state) => state.products.nonveg)
//     const items = nonvegProducts.map((product, index)=>(
//     <li  key ={index}>
//         {product.name} - ${product.price.toFixed(2)}
//         <button>Add to cart</button>
        
//     </li>
//     ))
//     return(
//         <>
//         <h1>This is NonVeg page</h1>
//         <ul>{items}</ul> 
//         </>
//     );
// }
// export default NonVeg;


