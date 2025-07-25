import React, { useState, useEffect } from "react";
import "./UserListPage.css";

const dummyUsers = [
  {
    id: 1,
    fullName: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    roles: "ADMIN",
    phone: "0123456789",
    address: "Hà Nội",
    createdAt: "2023-01-01",
  },
  {
    id: 2,
    fullName: "Trần Thị B",
    email: "tranthib@example.com",
    roles: "USER",
    phone: "0987654321",
    address: "TP.HCM",
    createdAt: "2023-02-15",
  },
];

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(dummyUsers);
  }, []);

  return (
    <div className="admin-user-page">
      <div className="page-header">
        <ol className="breadcrumbs">
          <li>
            <a href="/admin">
              <i className="bx bx-home-alt"></i>
            </a>
          </li>
          <li>Danh sách tài khoản</li>
        </ol>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Danh sách tài khoản</h2>
        </div>

        <div className="card-body">
          <div className="toolbar mb-3">
            <a href="/admin/users/create" className="btn btn-primary">
              Thêm mới tài khoản <i className="fas fa-plus"></i>
            </a>
          </div>

          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Chức vụ</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Ngày tạo</th>
              </tr>
              <tr>
                <th></th>
                <th>
                  <input type="text" className="form-control search-input" placeholder="Tìm tên..." />
                </th>
                <th>
                  <input type="text" className="form-control search-input" placeholder="Tìm email..." />
                </th>
                <th>
                  <select className="form-control search-select">
                    <option value="">Tất cả</option>
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                </th>
                <th>
                  <input type="text" className="form-control search-input" placeholder="Tìm số điện thoại..." />
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user.roles}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>{user.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <nav className="mt-4">
            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default UserList;
