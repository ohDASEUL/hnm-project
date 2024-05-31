import React from "react";
import { Button } from "react-bootstrap";

const LoginPage = () => {
  return (
    <div className="login-page-area">
      <h1>로그인</h1>
      <div className="login-section-group">
        <div className="input-group">
          <label>이메일</label>
          <input type="text" className="email-pw-input" />
        </div>
        <div className="input-group">
          <label>비밀번호</label>
          <input type="text" className="email-pw-input" />
        </div>
        <div className="login-memory-check-area">
          <input type="checkbox" />
          <div>로그인 상태 유지하기</div>
        </div>
        <Button variant="dark" className="login-section-button">로그인</Button>
        <Button variant="light" className="login-section-button">회원가입</Button>
      </div>
    </div>
  );
};

export default LoginPage;
