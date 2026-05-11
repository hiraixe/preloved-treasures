function Cart({ cart, removeItem, total, checkout }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>No items yet</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              {item.name} × {item.quantity}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}

          <h3>Total: ₱{total}</h3>

          <button onClick={checkout}>Checkout 💳</button>
        </>
      )}
    </div>
  );
}

export default Cart;