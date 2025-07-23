import React from "react";
import "./ProductDetail.css";

const ProductDetail = () => {
  const product = {
    id: 1,
    name: "Giày thể thao nam Nike Air Zoom",
    price: 2500000,
    description:
      "Giày thể thao nam Nike Air Zoom với thiết kế hiện đại, nhẹ và thoáng khí. Phù hợp cho các hoạt động chạy bộ, gym, hoặc thời trang thường ngày.",
    imageUrl: "https://via.placeholder.com/300x300",
    category: "Giày thể thao",
    stock: 12,
    isActive: true,
  };

  return (
    <div className="product-detail-container">
      <h2 className="product-title">{product.name}</h2>
      <div className="product-content">
        <div className="product-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-info">
          <p className="product-price">
            Giá: {product.price.toLocaleString()} đ
          </p>
          <p className="product-category">
            Danh mục: <strong>{product.category}</strong>
          </p>
          <p className="product-stock">
            Tồn kho: {product.stock > 0 ? `${product.stock} sản phẩm` : "Hết hàng"}
          </p>
          <p className={`product-status ${product.isActive ? "active" : "inactive"}`}>
            Trạng thái: {product.isActive ? "Đang kinh doanh" : "Ngừng bán"}
          </p>
          <div className="product-description">
            <h4>Mô tả sản phẩm</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
