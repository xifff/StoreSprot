import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (page) => {
    try {
      const response = await fetch(`http://localhost:8080/api/products?page=${page}`);
      const data = await response.json();
      setProducts(data.content || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Lỗi khi tải sản phẩm:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="main">
      <div className="breadcrumb">
        <a href="/">Trang chủ</a> / <span>Sản phẩm</span>
      </div>

      <div className="container">
        <div className="row">
          {/* Sidebar lọc */}
          <div className="sidebar">
            <h3>Lọc sản phẩm</h3>
            <label>
              <input type="checkbox" /> Sản phẩm mới
            </label><br />
            <label>
              <input type="checkbox" /> Khuyến mãi
            </label>
          </div>

          {/* Danh sách sản phẩm */}
          <div className="content">
            {products.length === 0 ? (
              <p>Không có sản phẩm.</p>
            ) : (
              <div className="product-grid">
                {products.map((product) => (
                  <div className="product-card" key={product.id}>
                    <img
                      src={product.thumbnail || "/placeholder.jpg"}
                      alt={product.name}
                    />
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <p className="price">{product.price}₫</p>
                  </div>
                ))}
              </div>
            )}

            {/* Phân trang */}
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={page === currentPage ? "active" : ""}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
