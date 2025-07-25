import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faUndo,
  faTimesCircle,
  faTimes,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

const OrderDetailPage = () => {
  const [order] = useState({
    id: 1001,
    statusText: "Đang xử lý",
    productImg: "/images/demo-product.jpg",
    productName: "Giày thể thao nam",
    sizeVn: "42",
    productPrice: 500000,
    totalPrice: 450000,
    receiverName: "Nguyễn Văn A",
    receiverAddress: "123 Nguyễn Trãi, Hà Nội",
    receiverPhone: "0901234567",
    canCancel: true,
    canCompleted: true,
  });

  const [note, setNote] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(order.statusText);
  const [error, setError] = useState("");

  const cancelOrder = () => {
    setStatus("Đã hủy");
  };

  const confirmReturn = () => {
    if (!note.trim()) {
      setError("Vui lòng nhập lý do trả hàng");
      return;
    }
    setStatus("Yêu cầu trả hàng");
    setShowModal(false);
  };

  return (
    <div className="order-detail-page">
      <h2>
        <FontAwesomeIcon icon={faTruck} className="me-2 text-primary" />
        Chi tiết đơn hàng #{order.id}
      </h2>

      <div className="order-status">
        Trạng thái: <span className="status">{status}</span>
      </div>

      <div className="order-content">
        <div className="product">
          <img src={order.productImg} alt="product" />
          <div className="product-info">
            <h4>{order.productName}</h4>
            <p>Size: {order.sizeVn}</p>
            <p>Giá: {order.productPrice.toLocaleString()}₫</p>
          </div>
        </div>

        <div className="shipping-info">
          <h4>Thông tin giao hàng</h4>
          <p>Người nhận: {order.receiverName}</p>
          <p>Địa chỉ: {order.receiverAddress}</p>
          <p>SĐT: {order.receiverPhone}</p>
        </div>

        <div className="total-price">
          <p>Tạm tính: {order.productPrice.toLocaleString()}₫</p>
          <p>Giảm giá: {(order.productPrice - order.totalPrice).toLocaleString()}₫</p>
          <p>
            <strong>
              Thành tiền: {order.totalPrice.toLocaleString()}₫
            </strong>
          </p>
        </div>

        <div className="order-actions">
          {order.canCompleted && (
            <button className="btn btn-danger" onClick={() => setShowModal(true)}>
              <FontAwesomeIcon icon={faUndo} className="me-2" />
              Yêu cầu trả hàng
            </button>
          )}
          {order.canCancel && (
            <button className="btn btn-warning" onClick={cancelOrder}>
              <FontAwesomeIcon icon={faTimesCircle} className="me-2" />
              Hủy đơn hàng
            </button>
          )}
        </div>
      </div>

      {/* Modal trả hàng */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h5>
              <FontAwesomeIcon icon={faUndo} className="me-2 text-primary" />
              Lý do trả hàng
            </h5>
            <input
              type="text"
              placeholder="Nhập lý do trả hàng..."
              value={note}
              onChange={(e) => {
                setNote(e.target.value);
                setError("");
              }}
            />
            {error && <div className="error">{error}</div>}
            <div className="modal-buttons">
              <button className="btn" onClick={() => setShowModal(false)}>
                <FontAwesomeIcon icon={faTimes} className="me-1" />
                Đóng
              </button>
              <button className="btn btn-primary" onClick={confirmReturn}>
                <FontAwesomeIcon icon={faCheckCircle} className="me-1" />
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailPage;
