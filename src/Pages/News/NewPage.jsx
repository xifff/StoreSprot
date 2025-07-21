import React, { useState } from 'react';
import './NewsPage.css'; // Assuming you have a CSS file for styling
const fakePosts = [
  {
    id: 1,
    title: 'Top 5 đôi giày chạy bộ đáng mua nhất 2025',
    slug: 'top-giay-chay-bo-2025',
    thumbnail: 'https://via.placeholder.com/600x400?text=Giay+Chay+Bo',
    content: 'Đây là những đôi giày được các runner đánh giá cao về độ êm và độ bền...',
    publishedAt: '2025-07-10T10:00:00Z',
    createdBy: { fullName: 'Minh Vận Động' },
  },
  {
    id: 2,
    title: 'Hướng dẫn chọn quần áo thể thao phù hợp mùa hè',
    slug: 'chon-quan-ao-mua-he',
    thumbnail: 'https://via.placeholder.com/600x400?text=Quan+Ao+The+Thao',
    content: 'Thời tiết nóng bức khiến bạn cần chọn trang phục thoáng mát, thấm hút tốt...',
    publishedAt: '2025-07-08T08:15:00Z',
    createdBy: { fullName: 'Hà Sporty' },
  },
  {
    id: 3,
    title: 'Găng tay tập gym nào phù hợp cho người mới?',
    slug: 'gang-tay-gym-cho-nguoi-moi',
    thumbnail: 'https://via.placeholder.com/600x400?text=Gang+Tay+Gym',
    content: 'Việc sử dụng găng tay giúp bảo vệ da tay, tránh chấn thương khi tập luyện...',
    publishedAt: '2025-07-06T14:00:00Z',
    createdBy: { fullName: 'Ngọc Fit' },
  },
];

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  // Tính tổng số trang
  const totalPages = Math.ceil(fakePosts.length / postsPerPage);

  // Lấy dữ liệu theo trang
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = fakePosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="main" id="main-content">
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/"><i className="icon-home"></i></a></li>
            <li className="breadcrumb-item active" aria-current="page">Tin tức</li>
          </ol>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {currentPosts.map((post) => (
              <article className="post" key={post.id}>
                <div className="post-media">
                  <a href={`/tin-tuc/${post.slug}/${post.id}`}>
                    <img src={post.thumbnail} alt={post.title} />
                  </a>
                </div>

                <div className="post-body">
                  <div className="post-date">
                    <span className="month">
                      {new Date(post.publishedAt).toLocaleDateString('vi-VN', {
                        month: '2-digit',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  <h2 className="post-title">
                    <a href={`/tin-tuc/${post.slug}/${post.id}`}>{post.title}</a>
                  </h2>

                  <div className="post-content">
                    <p>{post.content}</p>
                    <a href={`/tin-tuc/${post.slug}/${post.id}`} className="read-more">
                      Đọc thêm <i className="icon-angle-double-right"></i>
                    </a>
                  </div>

                  <div className="post-meta">
                    <i className="icon-calendar"></i>
                    <span>{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
                    <span><i className="icon-user"></i> By <a>{post.createdBy.fullName}</a></span>
                  </div>
                </div>
              </article>
            ))}

            {/* Pagination */}
            <nav aria-label="Page navigation">
              <ul className="pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <li
                    key={page}
                    className={`page-item ${page === currentPage ? 'active' : ''}`}
                    onClick={() => handlePageClick(page)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="page-link">{page}</span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsPage;
