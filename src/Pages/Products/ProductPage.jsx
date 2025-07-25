import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // ✅ Dữ liệu sản phẩm giả
  const mockProducts = [
    {
      id: 1,
      name: "Giày Sneaker Nam",
      description: "Thiết kế trẻ trung, phù hợp đi chơi và đi học.",
      price: 350000,
      thumbnail: "https://via.placeholder.com/250x180?text=Giay+Sneaker+Nam",
    },
    {
      id: 2,
      name: "Giày Thể Thao Nữ",
      description: "Êm ái, hỗ trợ tập luyện thể thao.",
      price: 420000,
      thumbnail: "https://via.placeholder.com/250x180?text=Giay+The+Thao+Nu",
    },
    {
      id: 3,
      name: "Dép Sandal",
      description: "Phong cách năng động, chất liệu bền bỉ.",
      price: 250000,
      thumbnail: "https://via.placeholder.com/250x180?text=Dep+Sandal",
    },
    {
      id: 4,
      name: "Giày Da Cao Cấp",
      description: "Chất liệu da thật, sang trọng.",
      price: 850000,
      thumbnail: "https://via.placeholder.com/250x180?text=Giay+Da+Cao+Cap",
    },
    {
      id: 5,
      name: "Sneaker Màu Trắng",
      description: "Thiết kế tối giản, dễ phối đồ.",
      price: 500000,
      thumbnail: "https://via.placeholder.com/250x180?text=Sneaker+Trang",
    },
  ];

  // ✅ Gọi API và fallback mock data
  useEffect(() => {
    const fetchProducts = async (page) => {
      try {
        const response = await fetch(`http://localhost:8080/api/products?page=${page}`);
        if (!response.ok) throw new Error("API lỗi hoặc chưa có dữ liệu");

        const data = await response.json();
        if (data.content && data.content.length > 0) {
          setProducts(data.content);
          setTotalPages(data.totalPages || 1);
        } else {
          setProducts(mockProducts);
          setTotalPages(1);
        }
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
        setProducts(mockProducts);
        setTotalPages(1);
      }
    };

    fetchProducts(currentPage);
  }, );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="main product-page">
      {/* ... các component khác */}
      <div className="content">
        {products.length === 0 ? (
          <p>Không có sản phẩm.</p>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.thumbnail} alt={product.name} />
                <div className="product-info">
                  <h4>{product.name}</h4>
<p className="desc">{product.description}</p>
                  <p className="price">{product.price.toLocaleString()}₫</p>
                  <div className="action-buttons">
                    <button className="btn-favorite">
                      <FontAwesomeIcon icon={faHeart} /> Yêu thích
                    </button>
                    <button className="btn-buy">
                      <FontAwesomeIcon icon={faShoppingCart} /> Mua ngay
                    </button>
                  </div>
                </div>
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
  );
};

export default ProductPage;