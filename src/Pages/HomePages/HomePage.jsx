import React from 'react';
import './HomePage.css';

const HomePage = () => {
  const newProducts = [
    {
      id: 1,
      name: 'Giày Nike Air Max',
      slug: 'giay-nike-air-max',
      images: '/shop/images/products/product1.jpg',
      price: 2000000,
      promotionPrice: 1800000,
      totalSold: 20,
      views: 150
    },
    {
      id: 2,
      name: 'Giày Adidas Ultra Boost',
      slug: 'giay-adidas-ultra-boost',
      images: '/shop/images/products/product2.jpg',
      price: 2500000,
      promotionPrice: null,
      totalSold: 35,
      views: 300
    }
  ];

  const bestSellerProducts = [
    {
      id: 3,
      name: 'Giày Puma RS-X',
      slug: 'giay-puma-rsx',
      images: '/shop/images/products/product3.jpg',
      price: 2100000,
      promotionPrice: 1900000,
      totalSold: 50,
      views: 420
    }
  ];

  const viewProducts = [
    {
      id: 4,
      name: 'Giày Converse Classic',
      slug: 'giay-converse-classic',
      images: '/shop/images/products/product4.jpg',
      price: 1200000,
      promotionPrice: 990000,
      totalSold: 80,
      views: 1000
    }
  ];

  const posts = [
    {
      id: 1,
      title: 'Mẹo chọn giày thể thao phù hợp',
      slug: 'meo-chon-giay-the-thao',
      thumbnail: '/shop/images/blog/post1.jpg',
      publishedAt: '2025-07-01',
      content: 'Bài viết chia sẻ cách chọn giày thể thao phù hợp với từng hoạt động.'
    },
    {
      id: 2,
      title: 'Xu hướng giày năm 2025',
      slug: 'xu-huong-giay-2025',
      thumbnail: '/shop/images/blog/post2.jpg',
      publishedAt: '2025-06-20',
      content: 'Cùng khám phá những mẫu giày nổi bật trong năm nay.'
    }
  ];

  return (
    <main className="main" id="main-content">
      {/* Slider */}
      <div className="home-slider owl-carousel owl-theme owl-carousel-lazy show-nav-hover nav-big mb-2 text-uppercase"
        data-owl-options='{"autoplay":true,"autoplayTimeout":10000,"loop":true}'>
        <div className="home-slide banner">
          <img className="owl-lazy slide-bg" src="/shop/images/slider/nike-just-do-it.jpg" alt="slider image" />
        </div>
        <div className="home-slide banner banner-md-vw">
          <img className="owl-lazy slide-bg" src="/shop/images/slider/nike-just-do-it (1).jpg" alt="slider image" />
        </div>
      </div>

      {/* Info Box */}
      <div className="info-boxes-row mb-2">
  <div className="info-box info-box-icon-left">
    <i className="icon-shipping"></i>
    <div className="info-box-content">
      <h4>FREE SHIPPING & RETURN</h4>
      <p className="text-body">Miễn phí ship cho đơn hàng trị giá trên 500k.</p>
    </div>
  </div>
  <div className="info-box info-box-icon-left">
    <i className="icon-money"></i>
    <div className="info-box-content">
      <h4>MONEY BACK GUARANTEE</h4>
      <p className="text-body">100% hoàn trả tiền nếu sai sót</p>
    </div>
  </div>
<div className="info-box info-box-icon-left">
    <i className="icon-support"></i>
    <div className="info-box-content">
      <h4>ONLINE SUPPORT 24/7</h4>
      <p className="text-body">Hỗ trợ 24/7.</p>
    </div>
  </div>
</div>

      {/* Sản phẩm mới */}
      <Section title="Sản phẩm mới" products={newProducts} />

      {/* Sản phẩm bán chạy */}
      <Section title="Sản phẩm mua nhiều" products={bestSellerProducts} showHot />

      {/* Sản phẩm xem nhiều */}
      <Section title="Sản phẩm xem nhiều" products={viewProducts} showViews />

      {/* Tin tức */}
      <section className="blog-section">
        <div className="container">
          <h2 className="section-title heading-border border-0 mb-2">Tin mới nhất</h2>
          <div className="owl-carousel owl-theme"
            data-owl-options='{"loop": false, "margin": 20, "autoHeight": true, "autoplay": false, "dots": false, "items": 2, "responsive": {"576": {"items": 3},"768": {"items": 4}}}'>
            {posts.map(post => (
              <article className="post" key={post.id}>
                <div className="post-media">
                  <a href={`/tin-tuc/${post.slug}/${post.id}`}>
                    <img src={post.thumbnail} alt="Post" width="225" height="280" />
                  </a>
                  <div className="post-date">
                    <span>{new Date(post.publishedAt).toLocaleDateString('vi-VN', { month: '2-digit', year: 'numeric' })}</span>
                  </div>
                </div>
                <div className="post-body">
                  <h2 className="post-title">
                    <a href={`/tin-tuc/${post.slug}/${post.id}`}>{post.title}</a>
                  </h2>
                  <div className="post-content">
                    <p>{post.content}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <hr className="mt-0 m-b-5" />
        </div>
      </section>
    </main>
  );
};

const Section = ({ title, products, showHot = false, showViews = false }) => (
  <section className="featured-products-section">
    <div className="container">
      <h2 className="section-title heading-border ls-20 border-0">{title}</h2>
      <div className="products-grid">
        {products.map(product => (
          <div className="product-default" key={product.id}>
            <figure>
              <a href={`/${product.slug}/${product.id}`}>
                <img style={{ height: 160 }} src={product.images} alt={product.name} />
              </a>
              {showHot && (
                <div className="label-group">
                  <div className="product-label label-hot">HOT</div>
                </div>
              )}
            </figure>
            <div className="product-details">
              <h3 className="product-title">
                <a href={`/${product.slug}/${product.id}`}>{product.name}</a>
              </h3>
<div className="price-box">
                {product.promotionPrice ? (
                  <>
                    <span className="product-price">{product.promotionPrice.toLocaleString()} đ</span>
                    <del className="old-price">{product.price.toLocaleString()} đ</del>
                  </>
                ) : (
                  <span className="product-price">{product.price.toLocaleString()} đ</span>
                )}
              </div>
              <div className="ratings-container">
                <p className="card-text sold">Đã bán {product.totalSold} đôi</p>
                {showViews && <p className="card-text sold">Số lượt xem: {product.views}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomePage;