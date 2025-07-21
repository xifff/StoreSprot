import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.length === 0 ? (
        <p>Không có sản phẩm nào.</p>
      ) : (
        products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.thumbnail || "/placeholder.jpg"}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>{product.price}₫</strong></p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
