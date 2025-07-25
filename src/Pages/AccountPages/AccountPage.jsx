import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AccountPage.css';

const AccountPage = () => {
  const [user] = useState({
    hoten: 'Nguyễn Văn A',
    email: 'vana@gmail.com',
    sdt: '0987654321',
    cmnd: '123456789012',
    avatar: 'https://via.placeholder.com/120',
    diachi: [
      {
        id: 1,
        diachiDetail: '123 Đường ABC',
        nameProvince: 'TP.HCM',
        nameDistrict: 'Quận 1',
        nameWard: 'Phường Bến Nghé',
      },
      {
        id: 2,
        diachiDetail: '456 Đường XYZ',
        nameProvince: 'Hà Nội',
        nameDistrict: 'Quận Cầu Giấy',
        nameWard: 'Phường Dịch Vọng',
      },
    ],
  });

  return (
    <div className="account-page mt-4">
      <h2 className="mb-4 text-center">Tài Khoản Của Tôi</h2>
      <div className='container'>
        <div className="row">
          <div className="col-md-4">
  <div className="user-sidebar text-center p-4">
    <img src={user.avatar} alt="Avatar" className="avatar mb-3" />
    <h5 className="user-name">{user.hoten}</h5>
    <p className="user-email">{user.email}</p>

    <button className="btn btn-outline-primary w-100 mb-2">
      Cập nhật thông tin
    </button>

    <Link to="/tai-khoan/lich-su-giao-dich" className="btn btn-outline-secondary w-100">
      Xem chi tiết đơn hàng
    </Link>
  </div>
</div>

          <div className="col-md-8">
            <div className="info-box mb-4">
  <h5>Thông Tin Cá Nhân</h5>
  <div className="table-container">
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th>Họ tên</th>
          <td>{user.hoten}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{user.email}</td>
        </tr>
        <tr>
          <th>Số điện thoại</th>
          <td>{user.sdt}</td>
        </tr>
        <tr>
          <th>CCCD</th>
          <td>{user.cmnd}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


            <div className="info-box">
  <h5>Địa Chỉ Giao Hàng</h5>
  <div className="table-container">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>STT</th>
          <th>Chi tiết</th>
          <th>Tỉnh</th>
          <th>Quận</th>
          <th>Phường</th>
        </tr>
      </thead>
      <tbody>
        {user.diachi.map((addr, index) => (
          <tr key={addr.id}>
            <td>{index + 1}</td>
            <td>{addr.diachiDetail}</td>
            <td>{addr.nameProvince}</td>
            <td>{addr.nameDistrict}</td>
            <td>{addr.nameWard}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <button className="btn btn-success mt-3">Thêm địa chỉ mới</button>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};


export default AccountPage;
