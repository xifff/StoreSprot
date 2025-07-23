import React, { useState } from "react";
import "./OrderListPage.css";

const OrderListPage = () => {
  const [orders, setOrders] = useState([
    {
      id: 101,
      receiverName: "Nguyễn Văn A",
      receiverPhone: "0123456789",
      status: 1,
      product: { name: "Giày thể thao Adidas" },
      createdAt: "2025-07-20 10:30",
      modifiedAt: "2025-07-21 12:00",
      totalPrice: 1500000,
    },
    {
      id: 102,
      receiverName: "Trần Thị B",
      receiverPhone: "0987654321",
      status: 3,
      product: { name: "Áo thể thao Nike" },
      createdAt: "2025-07-18 09:15",
      modifiedAt: "2025-07-19 14:00",
      totalPrice: 950000,
    },
  ]);

  const renderStatus = (status) => {
    switch (status) {
      case 1:
        return <span className="badge bg-warning text-dark">Chờ lấy hàng</span>;
      case 2:
        return <span className="badge bg-primary">Đang giao hàng</span>;
      case 3:
        return <span className="badge bg-success">Đã giao hàng</span>;
      case 4:
        return <span className="badge bg-danger">Đơn hàng bị trả lại</span>;
      case 5:
        return <span className="badge bg-secondary">Đơn hàng bị hủy</span>;
      case 6:
        return <span className="badge bg-success">Bán hàng tại quầy</span>;
      default:
        return <span className="badge bg-light text-dark">Không xác định</span>;
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Danh sách đơn hàng</h2>
        <div>
          <button className="btn btn-primary me-2">Thêm mới đơn hàng</button>
          <button className="btn btn-primary me-2">Refresh</button>
          <button className="btn btn-primary">Tìm kiếm</button>
        </div>
      </div>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Mã đơn hàng</th>
            <th>Người nhận</th>
            <th>Điện thoại</th>
            <th>Trạng thái</th>
            <th>Sản phẩm</th>
            <th>Ngày tạo</th>
            <th>Ngày sửa</th>
            <th>Tổng tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>
                <a href={`/admin/orders/update/${order.id}`}>{order.id}</a>
              </td>
              <td>{order.receiverName}</td>
              <td>{order.receiverPhone}</td>
              <td>{renderStatus(order.status)}</td>
              <td>{order.product.name}</td>
              <td>{order.createdAt}</td>
              <td>{order.modifiedAt}</td>
              <td>{order.totalPrice.toLocaleString()}đ</td>
              <td>
                <a
                  href={`/admin/orders/update/${order.id}`}
                  className="text-primary"
                >
                  <i className="fas fa-pencil-alt"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Placeholder */}
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item disabled">
            <span className="page-link">«</span>
          </li>
          <li className="page-item active">
            <span className="page-link">1</span>
          </li>
          <li className="page-item">
            <span className="page-link">2</span>
          </li>
          <li className="page-item">
            <span className="page-link">»</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default OrderListPage;
