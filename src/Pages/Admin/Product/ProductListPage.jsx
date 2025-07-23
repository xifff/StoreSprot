import React, { useState } from "react";
import "./ProductListPage.css";

const ProductListPage = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Áo thể thao Nike",
      image: "https://via.placeholder.com/60",
      brand: { name: "Nike" },
      categories: [{ name: "Thể thao" }],
      price: 100000,
      salePrice: 150000,
      createdAt: "2023-07-01",
      modifiedAt: "2023-07-20",
      totalQuantity: 100,
      totalSold: 40,
      slug: "ao-the-thao-nike"
    }
    // Add more products as needed
  ]);

  return (
    <section className="content-body" id="main-content">
      <header className="page-header">
        <div className="right-wrapper text-right">
          <ol className="breadcrumbs">
            <li>
              <a href="/">
                <i className="bx bx-home-alt"></i>
              </a>
            </li>
            <li><span>Quản lý sản phẩm</span></li>
          </ol>
          <a className="sidebar-right-toggle">
            <i className="fas fa-chevron-left"></i>
          </a>
        </div>
      </header>

      <section className="card">
        <header className="card-header">
          <div className="card-actions">
            <a href="#" className="card-action card-action-toggle"></a>
            <a href="#" className="card-action card-action-dismiss"></a>
          </div>
          <h2 className="card-title">Danh sách sản phẩm</h2>
        </header>

        <div className="card-body">
          <div className="row mb-3">
            <div className="col-sm-6">
              <a href="/admin/products/create" className="btn btn-info">
                Thêm mới sản phẩm <i className="fas fa-plus"></i>
              </a>
              <a href="/admin/products" className="btn btn-primary ml-2">
                Refresh <i className="fas fa-redo-alt"></i>
              </a>
            </div>
          </div>

          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Ảnh</th>
                <th>Nhãn hiệu</th>
                <th>Danh mục</th>
                <th>Giá nhập</th>
                <th>Giá bán</th>
                <th>Ngày tạo</th>
                <th>Ngày sửa</th>
                <th>Tổng SL</th>
                <th>Đã bán</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>
                    <img src={product.image} width="60" height="60" alt="img" />
                  </td>
                  <td>{product.brand.name}</td>
                  <td>{product.categories.map((c) => c.name).join(", ")}</td>
                  <td className="money">{product.price.toLocaleString()}</td>
                  <td className="money">{product.salePrice.toLocaleString()}</td>
                  <td>{product.createdAt}</td>
                  <td>{product.modifiedAt}</td>
                  <td>{product.totalQuantity}</td>
                  <td>{product.totalSold}</td>
                  <td className="actions">
                    <a
                      href={`/admin/products/${product.slug}/${product.id}`}
                      className="on-default edit-row"
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    <a
                      href="#"
                      data-id={product.id}
                      className="on-default remove-row delete-product"
                    >
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

export default ProductListPage;
