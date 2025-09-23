import "./checkout-row.styles.scss";

const CheckoutRow = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;

  return (
    <tr>
      <td>
        <img src={imageUrl} alt={name} />
      </td>
      <td>
        {name}
      </td>
      <td>
        {quantity}
      </td>
      <td>
        {price}
      </td>
      <td>
        Delete
      </td>
    </tr>
  );
};

export default CheckoutRow;
