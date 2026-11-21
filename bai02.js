// bai02.js - Web Server với module http
const http = require("http");

const PORT = 3000;

// ===== ĐỔI THÔNG TIN THEO BẠN =====
const MA_SV = "SV01";
const HO_TEN = "Nguyễn Văn An";
const LOP = "CĐCNTT 18B";
const TRUONG = "Cao đẳng Công nghệ thông tin";

const server = http.createServer((req, res) => {
  // Header UTF-8 để hiển thị tiếng Việt đúng
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/" || req.url === "/index") {
    // ===== Trang chủ =====
    res.statusCode = 200;
    res.end(`
      <!DOCTYPE html>
      <html lang="vi">
      <head><meta charset="UTF-8"><title>Trang chủ</title></head>
      <body style="font-family: Arial; padding: 20px;">
        <h1 style="color: #2196F3;">Xin chào!</h1>
        <p><strong>Mã sinh viên:</strong> ${MA_SV}</p>
        <p><strong>Họ tên:</strong> ${HO_TEN}</p>
        <hr>
        <p><a href="/">Trang chủ</a> | <a href="/about">Giới thiệu</a></p>
      </body>
      </html>
    `);
  } else if (req.url === "/about") {
    // ===== Trang giới thiệu =====
    res.statusCode = 200;
    res.end(`
      <!DOCTYPE html>
      <html lang="vi">
      <head><meta charset="UTF-8"><title>Giới thiệu</title></head>
      <body style="font-family: Arial; padding: 20px;">
        <h1 style="color: #4CAF50;"> Giới thiệu bản thân</h1>
        <ul>
          <li><strong>Họ tên:</strong> ${HO_TEN}</li>
          <li><strong>Mã sinh viên:</strong> ${MA_SV}</li>
          <li><strong>Lớp:</strong> ${LOP}</li>
          <li><strong>Trường:</strong> ${TRUONG}</li>
          <li><strong>Sở thích:</strong> Lập trình, đọc sách</li>
        </ul>
        <hr>
        <p><a href="/">Trang chủ</a> | <a href="/about">Giới thiệu</a></p>
      </body>
      </html>
    `);
  } else {
    // ===== 404 =====
    res.statusCode = 404;
    res.end(`
      <!DOCTYPE html>
      <html lang="vi">
      <head><meta charset="UTF-8"><title>404</title></head>
      <body style="font-family: Arial; padding: 20px; text-align: center;">
        <h1 style="color: #F44336; font-size: 80px;">404</h1>
        <h2>Không tìm thấy trang</h2>
        <p>Đường dẫn <code>${req.url}</code> không tồn tại.</p>
        <p><a href="/">← Quay về trang chủ</a></p>
      </body>
      </html>
    `);
  }
});

server.listen(PORT, () => {
  console.log(` Server đang chạy tại: http://localhost:${PORT}`);
  console.log(`   - Trang chủ:   http://localhost:${PORT}/`);
  console.log(`   - Giới thiệu: http://localhost:${PORT}/about`);
  console.log(`   - Nhấn Ctrl+C để dừng server`);
});
