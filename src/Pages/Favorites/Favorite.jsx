import React, { useState } from 'react';
import './Favorite.css';
import { useNavigate } from 'react-router-dom';

const FavoritePage = () => {
  const navigate = useNavigate();

  // Dữ liệu mẫu sản phẩm yêu thích
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: 'Giày chạy bộ Nike Air Zoom Pegasus',
      image: 'https://via.placeholder.com/150',
      price: 2499000,
    },
    {
      id: 2,
      name: 'Áo thể thao Adidas nam',
      image: 'https://via.placeholder.com/150',
      price: 599000,
    },
  ]);

  // Xoá sản phẩm khỏi yêu thích
  const removeFavorite = (id) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="favorite-page container mt-4">
      <h2 className="mb-4">Sản phẩm yêu thích</h2>
      {favorites.length === 0 ? (
        <p>Bạn chưa có sản phẩm yêu thích nào.</p>
      ) : (
        <div className="favorite-list row">
          {favorites.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card favorite-card">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-danger fw-bold">{product.price.toLocaleString()} đ</p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      Xem chi tiết
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => removeFavorite(product.id)}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
