import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form, Alert, Spinner, Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "./Login.css"; // Tách riêng phần CSS

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Xử lý đăng nhập ở đây
    setTimeout(() => {
      setLoading(false);
      // navigate('/home');
    }, 1500);
  };

  const signInWithGoogle = () => {
    alert("Chưa kết nối Google");
  };

  return (
    <div className="login-container">
      <ToastContainer autoClose={5000} draggable limit={1} pauseOnFocusLoss={false} pauseOnHover={false} />

      <Card className="login-card p-4 shadow-lg">
        <h2 className="text-center mb-4">Đăng Nhập</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mật Khẩu</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Nhớ tài khoản"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
          </Form.Group>

          {error && <Alert variant="danger">{error}</Alert>}

          <Row className="mb-3">
            <Col>
              <Button onClick={signInWithGoogle} variant="outline-secondary" className="w-100">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.HG6XtzIxf4Nbo_vZt8T3EAHaHa&pid=Api"
                  alt="Google"
                  className="icon-btn"
                />
                Google
              </Button>
            </Col>
            <Col>
              <Button onClick={signInWithGoogle} variant="outline-secondary" className="w-100">
                <img
                  src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
                  alt="Facebook"
                  className="icon-btn"
                />
                Facebook
              </Button>
            </Col>
          </Row>

          <Button type="submit" variant="primary" className="login-btn w-100" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Đăng Nhập"}
          </Button>

          <div className="mt-3 text-center">
            <span>Bạn chưa có tài khoản? </span>
            <button className="btn btn-link p-0" onClick={() => navigate("/buyer/register")}>Đăng kí</button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
