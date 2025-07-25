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
    <div className="account-page container mt-4">
  <h2 className="mb-4">Tài Khoản Của Tôi</h2>
  <div className="row">
    {/* Avatar & nút bên trái */}
    <div className="col-md-4">
      <div className="account-left">
        <img src={user.avatar} alt="Avatar" className="account-avatar" />
        <h5>{user.hoten}</h5>
        <p>{user.email}</p>
        <button className="btn btn-outline-primary mb-2">Cập nhật thông tin</button>
        <br />
        <Link to="/tai-khoan/lich-su-giao-dich" className="btn btn-outline-secondary">
          Xem chi tiết đơn hàng
        </Link>
      </div>
    </div>

    {/* Thông tin & địa chỉ bên phải */}
    <div className="col-md-8">
      <div className="account-section">
        <h5>Thông Tin Cá Nhân</h5>
        <div className="info-row"><strong>Họ tên:</strong> {user.hoten}</div>
        <div className="info-row"><strong>Email:</strong> {user.email}</div>
        <div className="info-row"><strong>Số điện thoại:</strong> {user.sdt}</div>
        <div className="info-row"><strong>CCCD:</strong> {user.cmnd}</div>
      </div>

      <div className="account-section">
        <h5>Địa Chỉ Giao Hàng</h5>
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
        <button className="btn btn-success">Thêm địa chỉ mới</button>
      </div>
    </div>
  </div>
</div>

  );
};

export default AccountPage;
