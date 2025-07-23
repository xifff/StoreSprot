import React, { useEffect } from "react";

const AdminDashboard = () => {
  useEffect(() => {
    // TODO: Fetch data to populate charts and stats like product-count, etc.
  }, []);

  return (
    <section role="main" className="content-body" id="main-content">
      <header className="page-header">
        <div className="right-wrapper text-right">
          <ol className="breadcrumbs">
            <li>
              <a href="/admin">
                <i className="bx bx-home-alt"></i>
              </a>
            </li>
            <li><span>Trang chủ</span></li>
          </ol>
          <a className="sidebar-right-toggle" data-open="sidebar-right">
            <i className="fas fa-chevron-left"></i>
          </a>
        </div>
      </header>

      <div className="row">
        {[
          {
            title: "Số lượng sản phẩm",
            icon: "fas fa-life-ring",
            id: "product-count",
            color: "primary",
            link: "/admin/products"
          },
          {
            title: "Tổng số danh mục",
            icon: "fas fa-certificate",
            id: "category-count",
            color: "warning",
            link: "/admin/categories"
          },
          {
            title: "Tổng số bài viết",
            icon: "fas fa-mail-bulk",
            id: "post-count",
            color: "success",
            link: "/admin/posts"
          },
          {
            title: "Tổng số đơn hàng",
            icon: "fas fa-shopping-cart",
            id: "order-count",
            color: "secondary",
            link: "/admin/orders"
          },
         
          {
            title: "Tổng số user",
            icon: "fas fa-user-injured",
            id: "countUser",
            color: "danger",
            link: "/admin/users"
          }
        ].map((item, idx) => (
          <div className="col-xl-4" key={idx}>
            <section className={`card card-featured-left card-featured-${item.color} mb-3`}>
              <div className="card-body">
                <div className="widget-summary">
                  <div className="widget-summary-col widget-summary-col-icon">
                    <div className={`summary-icon bg-${item.color}`}>
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <div className="widget-summary-col">
                    <div className="summary">
                      <h4 className="title">{item.title}</h4>
                      <div className="info">
                        <strong className="amount" id={item.id}></strong>
                      </div>
                    </div>
                    <div className="summary-footer">
                      <a className="text-muted text-uppercase" href={item.link}>
                        (Xem chi tiết)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>

      <div className="row pt-4">
        <div className="col-lg-7 mb-4 mb-lg-0">
          <section className="card">
            <header className="card-header">
              <div className="card-actions">
                <a href="#" className="card-action card-action-toggle" data-card-toggle></a>
                <a href="#" className="card-action card-action-dismiss" data-card-dismiss></a>
              </div>
              <h2 className="card-title">Thống kê doanh số</h2>
              <div className="row mt-4">
                <div className="col-md-3">
                  <input type="date" id="datepicker" className="form-control" />
                </div>
                <div className="col-md-3">
                  <input type="date" id="datepicker2" className="form-control" />
                </div>
                <div className="col-md-3">
                  <button type="button" id="btn-dashboard-filter" className="btn btn-primary btn-sm">
                    Lọc kết quả
                  </button>
                  <a href="/admin" className="btn btn-primary btn-sm">
                    Refesh
                  </a>
                </div>
              </div>
            </header>
            <div className="card-body">
              <div className="chart chart-md" id="chart"></div>
            </div>
          </section>
        </div>

        <div className="col-lg-5">
          <section className="card">
            <header className="card-header">
              <div className="card-actions">
                <a href="#" className="card-action card-action-toggle" data-card-toggle></a>
                <a href="#" className="card-action card-action-dismiss" data-card-dismiss></a>
              </div>
              <h2 className="card-title">Số lượng Sản phẩm được mua theo danh mục</h2>
            </header>
            <div className="card-body">
              <canvas id="barChart"></canvas>
            </div>
          </section>
        </div>
      </div>

      <div className="row pt-4">
        <div className="col-lg-5 mb-4 mb-lg-0">
          <section className="card">
            <header className="card-header">
              <div className="card-actions">
                <a href="#" className="card-action card-action-toggle" data-card-toggle></a>
                <a href="#" className="card-action card-action-dismiss" data-card-dismiss></a>
              </div>
              <h2 className="card-title">Số lượng sản phẩm được mua theo nhãn hiệu</h2>
            </header>
            <div className="card-body">
              <canvas id="doughnutBrand"></canvas>
            </div>
          </section>
        </div>

        <div className="col-lg-7">
          <section className="card">
            <header className="card-header">
              <div className="card-actions">
                <a href="#" className="card-action card-action-toggle" data-card-toggle></a>
                <a href="#" className="card-action card-action-dismiss" data-card-dismiss></a>
              </div>
              <h2 className="card-title">10 Sản phẩm bán chạy nhất trong tháng</h2>
            </header>
            <div className="card-body">
              <canvas id="myChartProduct"></canvas>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;