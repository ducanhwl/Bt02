YÊU CẦU MÔI TRƯỜNG
- Node.js phiên bản 14 trở lên
- Không cần cài thêm package (module http có sẵn)

Kiểm tra Node.js:
    node -v


CÁCH CHẠY

 Chạy server
    node bai02.js

 Quan sát terminal
Khi server khởi động thành công, terminal hiển thị:

     Server đang chạy tại: http://localhost:3000
       - Trang chủ:   http://localhost:3000/
       - Giới thiệu: http://localhost:3000/about
       - Nhấn Ctrl+C để dừng server

Lưu ý: Terminal sẽ "treo" ở trạng thái chờ request — đây là bình thường (server đang chạy nền).

 Mở trình duyệt và test
Mở Chrome/Edge/Firefox, lần lượt truy cập 3 URL:

    STT | URL                                    | Kết quả mong đợi
    ----|----------------------------------------|------------------------------
    1   | http://localhost:3000/                 | Trang chủ — lời chào + mã SV
    2   | http://localhost:3000/about            | Trang giới thiệu bản thân
    3   | http://localhost:3000/khongtontai      | Trang lỗi 404

 Dừng server
Quay lại terminal, nhấn Ctrl + C.


KẾT QUẢ CHI TIẾT

1. Truy cập / — Trang chủ

Hiển thị trên trình duyệt:

    Xin chào!

    Mã sinh viên: SV01
    Họ tên: Nguyễn Văn An

    ---
    Trang chủ | Giới thiệu

HTTP Status: 200 OK
Cách kiểm tra: F12 → tab Network → click request đầu tiên → xem cột Status = 200.


2. Truy cập /about — Trang giới thiệu

Hiển thị trên trình duyệt:

     Giới thiệu bản thân

    - Họ tên: Nguyễn Văn An
    - Mã sinh viên: SV01
    - Lớp: CĐCNTT 18B
    - Trường: Cao đẳng Công nghệ thông tin
    - Sở thích: Lập trình, đọc sách
    - Mục tiêu: Trở thành Full-stack Developer

HTTP Status: 200 OK


3. Truy cập đường dẫn không tồn tại — Trang 404

Ví dụ: http://localhost:3000/abcxyz

Hiển thị trên trình duyệt:

    404

    Không tìm thấy trang
    Đường dẫn /abcxyz không tồn tại.
    ← Quay về trang chủ

HTTP Status: 404 Not Found

Cách kiểm tra mã 404:
    1. Mở trang lỗi trên trình duyệt
    2. Nhấn F12 → tab Network
    3. Refresh (F5)
    4. Click request /abcxyz → xem Status: 404 ✓


ẢNH MINH HỌA

Trang chủ:
    <img width="1600" height="743" alt="bai02_trangchu" src="https://github.com/user-attachments/assets/855902d2-73ca-4b80-a252-e990b18a202b" />


Trang giới thiệu:
    <img width="837" height="301" alt="bai02_gioithieu" src="https://github.com/user-attachments/assets/4df21291-2b37-48dc-b206-84f1280d0434" />


Trang 404:
    <img width="1600" height="831" alt="bai02_404" src="https://github.com/user-attachments/assets/66b965a5-fb58-4ea7-a018-16a481af639b" />


XỬ LÝ LỖI THƯỜNG GẶP

Lỗi: Error: listen EADDRINUSE :::3000
Nguyên nhân: Cổng 3000 đã bị chương trình khác chiếm.

Cách 1: Đổi cổng trong bai02.js:
    const PORT = 3001;

Cách 2: Kill process đang giữ cổng 3000:
    netstat -ano | findstr :3000
    taskkill /PID <PID> /F


Lỗi: 'node' is not recognized
Nguyên nhân: Chưa cài Node.js hoặc chưa thêm vào PATH.
Cách xử lý: Tải tại https://nodejs.org, khởi động lại terminal.


Lỗi: Tiếng Việt hiển thị ? hoặc ký tự lạ
Nguyên nhân: File bai02.js lưu sai encoding.
Cách xử lý: Mở bằng Notepad → Save As → Encoding UTF-8.


Lỗi: Trình duyệt báo "This site can't be reached"
Nguyên nhân:
    - Server chưa chạy → kiểm tra terminal có dòng " Server đang chạy..."
    - Sai cổng → kiểm tra const PORT trong code
    - Gõ sai URL → đảm bảo đúng http://localhost:3000/
