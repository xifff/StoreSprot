import React, { useState } from "react";
import "./Category.css";

const CategoryListPage = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Áo thể thao", status: true },
    { id: 2, name: "Quần thể thao", status: true },
    { id: 3, name: "Giày sneaker", status: false },
  ]);

  const [newCategory, setNewCategory] = useState("");
  const [newStatus, setNewStatus] = useState(true);
  const [editCategory, setEditCategory] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    const newCat = {
      id: categories.length + 1,
      name: newCategory,
      status: newStatus,
    };
    setCategories([...categories, newCat]);
    setNewCategory("");
    setNewStatus(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setCategories(
      categories.map((cat) =>
        cat.id === editCategory.id ? editCategory : cat
      )
    );
    setEditCategory(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa không?")) {
      setCategories(categories.filter((cat) => cat.id !== id));
    }
  };

  return (
    <div className="category-page container mt-4">
      <h2>Danh sách danh mục (Dữ liệu mẫu)</h2>

      <form onSubmit={handleAdd} className="form-inline mb-3">
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Tên danh mục mới"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <label className="mr-2">
          Trạng thái:
          <input
            type="checkbox"
            className="ml-2"
            checked={newStatus}
            onChange={(e) => setNewStatus(e.target.checked)}
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Thêm mới
        </button>
      </form>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên danh mục</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
              <td>{cat.status ? "Hiển thị" : "Ẩn"}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning mr-2"
                  onClick={() => setEditCategory({ ...cat })}
                >
                  Sửa
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(cat.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editCategory && (
        <div className="edit-modal">
          <h4>Sửa danh mục</h4>
          <form onSubmit={handleUpdate}>
            <input
              className="form-control mb-2"
              value={editCategory.name}
              onChange={(e) =>
                setEditCategory({ ...editCategory, name: e.target.value })
              }
            />
            <label>
              Trạng thái:
              <input
                type="checkbox"
                className="ml-2"
                checked={editCategory.status}
                onChange={(e) =>
                  setEditCategory({
                    ...editCategory,
                    status: e.target.checked,
                  })
                }
              />
            </label>
            <div className="mt-2">
              <button className="btn btn-success mr-2" type="submit">
                Lưu
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setEditCategory(null)}
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CategoryListPage;
