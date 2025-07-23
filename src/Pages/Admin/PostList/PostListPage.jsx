import React, { useState } from "react";
import "./PostListPage.css";

const PostListPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Cách chọn giày chạy bộ phù hợp",
      thumbnail: "/images/post1.jpg",
      status: 1,
      createdAt: "2025-07-10",
      publishedAt: "2025-07-12",
      slug: "chon-giay-chay-bo",
    },
    {
      id: 2,
      title: "Mẹo tập gym cho người mới",
      thumbnail: "/images/post2.jpg",
      status: 0,
      createdAt: "2025-07-08",
      publishedAt: "2025-07-10",
      slug: "meo-tap-gym",
    },
  ]);

  return (
    <section className="main-content">
      <header className="page-header">
        <div className="right-wrapper">
          <ol className="breadcrumbs">
            <li>
              <a href="/">
                <i className="bx bx-home-alt"></i>
              </a>
            </li>
            <li><span>Quản lý bài viết</span></li>
          </ol>
        </div>
      </header>

      <section className="card">
        <header className="card-header d-flex justify-content-between align-items-center">
          <h2 className="card-title">Danh sách bài viết</h2>
          <div>
            <a href="/admin/posts/create" className="btn btn-primary me-2">
              Thêm mới bài viết <i className="fas fa-plus"></i>
            </a>
            <a href="/admin/posts" className="btn btn-primary me-2">
              Refresh <i className="fas fa-redo-alt"></i>
            </a>
            <button className="btn btn-primary">
              Tìm kiếm <i className="fas fa-search"></i>
            </button>
          </div>
        </header>

        <div className="card-body">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Tên bài viết</th>
                <th>Ảnh</th>
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
                <th>Ngày sửa</th>
                <th>Thao tác</th>
              </tr>
              <tr>
                <th><input type="text" className="form-control" placeholder="Tìm theo tên" /></th>
                <th></th>
                <th>
                  <select className="form-control">
                    <option value="">Tất cả</option>
                    <option value="0">Nháp</option>
                    <option value="1">Công khai</option>
                  </select>
                </th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>
                    <img src={post.thumbnail} alt="thumb" width="50" height="50" />
                  </td>
                  <td>
                    {post.status === 1 ? (
                      <span className="text-success">Công khai</span>
                    ) : (
                      <span className="text-secondary">Nháp</span>
                    )}
                  </td>
                  <td>{post.createdAt}</td>
                  <td>{post.publishedAt}</td>
                  <td>
                    <a
                      href={`/admin/posts/${post.slug}/${post.id}`}
                      className="text-primary me-2"
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    <a href="#" className="text-danger">
                      <i className="far fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Placeholder */}
          <nav className="mt-3" aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <span className="page-link">«</span>
              </li>
              <li className="page-item active">
                <span className="page-link">1</span>
              </li>
              <li className="page-item">
                <span className="page-link">2</span>
              </li>
              <li className="page-item">
                <span className="page-link">»</span>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </section>
  );
};

export default PostListPage;
