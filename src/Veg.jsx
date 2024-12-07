import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function Veg(){
    const vegProducts = useSelector(state => state.products.veg)
    
    const dispatch = useDispatch()
    const items = vegProducts.map((product,index)=>
    <li  key ={index}>
        {product.name} - ${product.price.toFixed(2)}
        <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
    </li>)
    return(
        <>
        {/* <h3>The Veg component is a functional React component that displays a list of vegetable products in  application.
            The component uses the useSelector hook to retrieve vegetable products from the Redux store,Each vegetable product is rendered in a list format, showing the product name and price.
            Each product has an "Add to cart" button. When clicked, it dispatches the addToCart action, allowing users to add the selected product to their shopping cart.
            The component uses a unique identifier for each list item to optimize React's rendering process and improve performance.
            If there are no vegetable products available, the component displays a message indicating that no products are available.
        </h3>  */}
       <h1>veg products</h1>

        <ul>
            {items}
        </ul>
        </>
    )
}
export default Veg;