import React, { useState } from 'react';
import './Cart.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Giày chạy bộ Nike Pegasus',
      image: 'https://via.placeholder.com/150',
      price: 2499000,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Áo thể thao Adidas nam',
      image: 'https://via.placeholder.com/150',
      price: 599000,
      quantity: 2,
    },
  ]);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page container mt-4">
      <h2 className="mb-4">Giỏ Hàng Của Bạn</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống.</p>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table cart-table align-middle">
              <thead>
                <tr>
                  <th>Hình ảnh</th>
                  <th>Sản phẩm</th>
                  <th>Đơn giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.name} className="cart-img" />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price.toLocaleString()} đ</td>
                    <td>
                      <div className="qty-control">
                        <button onClick={() => decreaseQty(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQty(item.id)}>+</button>
                      </div>
                    </td>
                    <td className="text-danger fw-bold">
                      {(item.price * item.quantity).toLocaleString()} đ
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cart-summary text-end">
            <h5 className="mt-3">
              Tổng cộng:{' '}
              <span className="text-danger">
                {totalAmount.toLocaleString()} đ
              </span>
            </h5>
            <button className="btn btn-primary mt-2">Thanh toán</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
