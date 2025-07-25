import React, { useState } from "react";
import "./PromotionList.css";

const PromotionList = () => {
  const [promotions] = useState([
    {
      id: 1,
      couponCode: "KM2025",
      name: "Khuyến mãi Tết",
      public: true,
      active: true,
      discountType: 1,
      discountValue: 15,
      expiredAt: "2025-12-31",
    },
    {
      id: 2,
      couponCode: "SALE50",
      name: "Siêu giảm giá",
      public: false,
      active: false,
      discountType: 2,
      discountValue: 50000,
      expiredAt: "2025-08-15",
    },
  ]);

  return (
    <section className="content-body">
      <header className="page-header">
        <div className="right-wrapper text-right">
          <ol className="breadcrumbs">
            <li>
              <a href="/admin">
                <i className="bx bx-home-alt"></i>
              </a>
            </li>
            <li><span>Quản lý khuyến mại</span></li>
          </ol>
        </div>
      </header>

      <section className="card">
        <header className="card-header">
          <h2 className="card-title">Danh sách khuyến mại</h2>
          <a href="/admin/promotions/create" className="btn btn-primary mt-3">
            Thêm mới khuyến mại <i className="fas fa-plus"></i>
          </a>
        </header>

        <div className="card-body">
          <table className="table table-bordered table-striped mb-0">
            <thead>
              <tr>
                <th>Mã khuyến mại</th>
                <th>Tên khuyến mại</th>
                <th>Loại</th>
                <th>Trạng thái</th>
                <th>Giá trị</th>
                <th>Ngày hết hạn</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {promotions.map((promo) => (
                <tr key={promo.id}>
                  <td>
                    <a href={`/admin/promotions/update/${promo.id}`}>
                      {promo.couponCode}
                    </a>
                  </td>
                  <td>{promo.name}</td>
                  <td>
                    <span className={`badge ${promo.public ? "badge-success" : "badge-danger"}`}>
                      {promo.public ? "Công khai" : "Ẩn"}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${promo.active ? "badge-success" : "badge-danger"}`}>
                      {promo.active ? "Kích hoạt" : "Vô hiệu hóa"}
                    </span>
                  </td>
                  <td>
                    {promo.discountType === 1
                      ? `${promo.discountValue} %`
                      : `${promo.discountValue.toLocaleString()} đ`}
                  </td>
                  <td>{promo.expiredAt}</td>
                  <td>
                    <a href={`/admin/promotions/update/${promo.id}`} className="edit-row">
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    <a href="#" data-id={promo.id} className="delete-row ml-2">
                      <i className="far fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default PromotionList;
