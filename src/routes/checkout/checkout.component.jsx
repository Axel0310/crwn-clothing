import "./checkout.styles.scss";
import CheckoutRow from "../../components/checkout-row/checkout-row.component";
import { use } from "react";
import { CartContext } from "../../context/cart.context";

const Checkout = () => {
    const {cartItems, cartTotalPrice} = use(CartContext);

    return (
        <div className="products-list-container">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems && cartItems.map((item) => <CheckoutRow item={item} key={item.id}/>)}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total price</th>
                        <td>{cartTotalPrice}€</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
};

export default Checkout;