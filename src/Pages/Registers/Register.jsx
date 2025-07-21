import React, { useState } from 'react';
import './Register.css'; // Tách CSS nếu cần

const Register = () => {
  const [hoTen, setHoTen] = useState('');
  const [email, setEmail] = useState('');
  const [matKhau, setMatKhau] = useState('');
  const [sdt, setSdt] = useState('');
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!hoTen) newErrors.hoTen = 'Họ tên là bắt buộc';
    if (!email) newErrors.email = 'Email là bắt buộc';
    if (!matKhau) newErrors.matKhau = 'Mật khẩu là bắt buộc';
    if (!sdt) newErrors.sdt = 'Số điện thoại là bắt buộc';
    if (!file) newErrors.file = 'Vui lòng chọn ảnh đại diện';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append('hoTen', hoTen);
    formData.append('email', email);
    formData.append('matKhau', matKhau);
    formData.append('sdt', sdt);
    formData.append('file', file);

    // TODO: Gửi formData đến API backend
    console.log("Gửi dữ liệu đăng ký:", {
      hoTen, email, matKhau, sdt, file
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Tạo Tài Khoản</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Họ tên</label>
          <input type="text" className="form-control" value={hoTen} onChange={(e) => setHoTen(e.target.value)} />
          {errors.hoTen && <p className="text-danger">{errors.hoTen}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Mật khẩu</label>
          <input type="password" className="form-control" value={matKhau} onChange={(e) => setMatKhau(e.target.value)} />
          {errors.matKhau && <p className="text-danger">{errors.matKhau}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Số điện thoại</label>
          <input type="text" className="form-control" value={sdt} onChange={(e) => setSdt(e.target.value)} />
          {errors.sdt && <p className="text-danger">{errors.sdt}</p>}
        </div>
        <button type="submit" className="btn btn-primary w-100">Tạo tài khoản</button>
      </form>
    </div>
  );
};

export default Register;
