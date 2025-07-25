// src/Pages/Abouts/About.jsx
import React from 'react';
import './About.css'; // Đảm bảo import file CSS

const About = () => (
  <main className="main" id="main-content">
    {/* Breadcrumb - Thêm breadcrumb để người dùng dễ điều hướng */}
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/"><i className="icon-home"></i>Trang chủ</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Về Shop</li> {/* Đổi tiêu đề breadcrumb */}
        </ol>
      </div>
    </nav>

    <div className="container about-page-content">
      <h1 className="about-title">Khám Phá Shop Shoes</h1> {/* Đổi tiêu đề chính */}

      {/* Phần 1: Giới thiệu chung - Về Chúng Tôi */}
      <section className="about-section introduction">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-1 order-2"> {/* Đổi thứ tự trên mobile */}
            <h2>Chào mừng bạn đến với Shop Shoes!</h2>
            <p>Tại Shop Shoes, chúng tôi tin rằng mỗi bước chân đều kể một câu chuyện. Được thành lập vào năm 2023 bởi những người đam mê giày dép, chúng tôi ra đời với sứ mệnh mang đến những đôi giày chất lượng cao, phong cách đa dạng và trải nghiệm mua sắm tuyệt vời nhất cho khách hàng của mình.</p>
            <p>Chúng tôi không chỉ bán giày, chúng tôi bán sự tự tin, thoải mái và phong cách cho mọi hành trình của bạn, từ những bước chân đầu tiên đến những cuộc phiêu lưu không ngừng nghỉ.</p>
          </div>
          <div className="col-md-6 text-center order-md-2 order-1 mb-4 mb-md-0"> {/* Đổi thứ tự trên mobile */}
            <img src="https://via.placeholder.com/500x350?text=Shop+Shoes+Introduction" alt="Giới thiệu Shop Shoes" className="img-fluid about-image" />
          </div>
        </div>
      </section>

      {/* Phần 2: Sứ Mệnh & Tầm Nhìn */}
      <section className="about-section vision-mission">
        <h2 className="section-title">Sứ Mệnh & Tầm Nhìn Của Chúng Tôi</h2> {/* Cập nhật tiêu đề */}
        <div className="row">
          <div className="col-md-6">
            <h3>Sứ Mệnh Của Chúng Tôi</h3>
            <p>Cung cấp những sản phẩm giày dép chất lượng hàng đầu, phù hợp với mọi phong cách và nhu cầu, đồng thời xây dựng một cộng đồng yêu giày vững mạnh, nơi mọi người có thể chia sẻ niềm đam mê và tìm thấy cảm hứng cho phong cách cá nhân của mình.</p>
          </div>
          <div className="col-md-6">
            <h3>Tầm Nhìn Của Chúng Tôi</h3>
            <p>Trở thành thương hiệu giày dép hàng đầu Việt Nam, được khách hàng tin yêu và lựa chọn bởi sự đổi mới không ngừng, chất lượng vượt trội, dịch vụ chăm sóc khách hàng tận tâm và đóng góp tích cực cho cộng đồng.</p>
          </div>
        </div>
      </section>

      {/* Phần 3: Tại Sao Chọn Chúng Tôi? (New Section) */}
      <section className="about-section why-choose-us">
        <h2 className="section-title">Tại Sao Khách Hàng Lựa Chọn Shop Shoes?</h2>
        <div className="row">
          <div className="col-md-4 choice-item">
            <i className="icon-quality-alt"></i> {/* Icon mới */}
            <h3>Sản Phẩm Cao Cấp</h3>
            <p>Chúng tôi chỉ cung cấp giày dép từ các thương hiệu uy tín, đảm bảo chất liệu bền đẹp và công nghệ sản xuất tiên tiến.</p>
          </div>
          <div className="col-md-4 choice-item">
            <i className="icon-design-alt"></i> {/* Icon mới */}
            <h3>Thiết Kế Độc Đáo</h3>
            <p>Đa dạng mẫu mã, từ phong cách cổ điển đến xu hướng hiện đại, giúp bạn thể hiện cá tính riêng biệt.</p>
          </div>
          <div className="col-md-4 choice-item">
            <i className="icon-experience-alt"></i> {/* Icon mới */}
            <h3>Trải Nghiệm Mua Sắm Vượt Trội</h3>
            <p>Dịch vụ khách hàng chuyên nghiệp, tư vấn tận tình và chính sách đổi trả linh hoạt, mang lại sự hài lòng tuyệt đối.</p>
          </div>
          <div className="col-md-4 choice-item">
            <i className="icon-secure-payment"></i> {/* Icon mới */}
            <h3>Thanh Toán An Toàn</h3>
            <p>Hệ thống thanh toán đa dạng, bảo mật cao, giúp giao dịch của bạn luôn an toàn và tiện lợi.</p>
          </div>
          <div className="col-md-4 choice-item">
            <i className="icon-fast-shipping"></i> {/* Icon mới */}
            <h3>Giao Hàng Nhanh Chóng</h3>
            <p>Cam kết giao hàng đúng hẹn, đảm bảo sản phẩm đến tay bạn trong thời gian sớm nhất.</p>
          </div>
          <div className="col-md-4 choice-item">
            <i className="icon-support"></i> {/* Icon mới */}
            <h3>Hỗ Trợ Tận Tâm 24/7</h3>
            <p>Đội ngũ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc và hỗ trợ bạn mọi lúc, mọi nơi.</p>
          </div>
        </div>
      </section>

      {/* Phần 4: Giá Trị Cốt Lõi (Có sẵn, giữ nguyên) */}
      <section className="about-section values">
        <h2 className="section-title">Giá Trị Cốt Lõi Của Chúng Tôi</h2> {/* Cập nhật tiêu đề */}
        <div className="row">
          <div className="col-md-4 value-item">
            <i className="icon-quality"></i>
            <h3>Chất Lượng Hàng Đầu</h3>
            <p>Chúng tôi cam kết chỉ cung cấp những sản phẩm được làm từ vật liệu tốt nhất, đảm bảo độ bền và sự thoải mái tối đa.</p>
          </div>
          <div className="col-md-4 value-item">
            <i className="icon-style"></i>
            <h3>Phong Cách Đa Dạng</h3>
            <p>Luôn cập nhật xu hướng mới nhất và mang đến sự lựa chọn phong phú, từ giày thể thao năng động đến giày công sở lịch lãm.</p>
          </div>
          <div className="col-md-4 value-item">
            <i className="icon-customer-service"></i>
            <h3>Khách Hàng Là Trọng Tâm</h3>
            <p>Mọi hoạt động của chúng tôi đều hướng đến sự hài lòng của khách hàng, với dịch vụ tận tâm và chuyên nghiệp.</p>
          </div>
        </div>
      </section>

      {/* Phần 5: Câu Chuyện Thương Hiệu (New Section) */}
      <section className="about-section brand-story">
        <h2 className="section-title">Câu Chuyện Thương Hiệu Shop Shoes</h2>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="https://via.placeholder.com/500x350?text=Brand+Story" alt="Câu chuyện thương hiệu" className="img-fluid about-image" />
          </div>
          <div className="col-md-6">
            <h3>Hành Trình Khởi Nghiệp</h3>
            <p>Shop Shoes bắt đầu từ một cửa hàng nhỏ với niềm đam mê cháy bỏng về giày dép. Nhận thấy nhu cầu về những đôi giày không chỉ đẹp mà còn phải thoải mái và bền bỉ, chúng tôi đã không ngừng tìm kiếm, lựa chọn và hợp tác với các nhà sản xuất uy tín trên toàn thế giới.</p>
            <p>Từng bước một, chúng tôi đã xây dựng nên một thương hiệu được khách hàng tin yêu, không ngừng đổi mới để mang đến những bộ sưu tập đa dạng, phù hợp với mọi lứa tuổi và phong cách sống.</p>
            <p>Đến nay, Shop Shoes tự hào là điểm đến tin cậy cho hàng ngàn tín đồ giày dép, và chúng tôi vẫn đang tiếp tục viết nên câu chuyện của mình với sự ủng hộ của bạn.</p>
          </div>
        </div>
      </section>

      {/* Phần 6: Đội Ngũ Của Chúng Tôi (Có sẵn, giữ nguyên) */}
      <section className="about-section team">
        <h2 className="section-title">Đội Ngũ Của Chúng Tôi</h2>
        <div className="row">
          <div className="col-md-12">
            <p>Đội ngũ Shop Shoes là tập hợp những con người đam mê thời trang, sáng tạo và luôn nỗ lực không ngừng để mang đến những giá trị tốt nhất cho khách hàng. Chúng tôi cùng nhau xây dựng một môi trường làm việc thân thiện, chuyên nghiệp và đầy cảm hứng.</p>
            <p>Mỗi thành viên từ bộ phận tư vấn, kho vận đến marketing đều làm việc với sự tận tâm cao nhất, đảm bảo bạn luôn có trải nghiệm tốt nhất khi ghé thăm Shop Shoes.</p>
            {/* Bạn có thể thêm ảnh hoặc thông tin các thành viên cụ thể nếu muốn */}
          </div>
        </div>
      </section>

      {/* Phần 7: Lời Kêu Gọi Hành Động (Call to Action) */}
      <section className="about-section call-to-action text-center">
        <p>Hãy để Shop Shoes đồng hành cùng bạn trên mọi nẻo đường. Khám phá ngay bộ sưu tập giày dép đa dạng và chất lượng hàng đầu của chúng tôi!</p>
        <a href="/products" className="btn btn-primary-about">Khám phá sản phẩm của chúng tôi</a>
      </section>

    </div> {/* end container about-page-content */}
    <div className="mb-8"></div> {/* Khoảng cách cuối trang */}
  </main>
);

export default About;