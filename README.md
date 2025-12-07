Báo Cáo Dự Án Website Trường Hermann Gmeiner Đà Nẵng 🏫

Đây là tài liệu tổng hợp quá trình xây dựng website, bao gồm cấu trúc Prompt đã sử dụng để tạo ra sản phẩm và hướng dẫn kỹ thuật.

Thực hiện bởi Team Sky AI - Hermann Gmeiner Đà Nẵng

🔗 Link Demo Sản Phẩm (Kết quả)

👉 Truy cập ngay: https://phu25709.github.io/SkyAIfirst/index.html

📝 Cấu trúc Prompt (Prompt Engineering)

Dưới đây là tư duy thiết kế Prompt để AI tạo ra kết quả mong muốn:

Persona (Vai trò): Bạn là một lập trình viên UI/UX chuyên nghiệp (Senior Front-end Developer).

Task (Nhiệm vụ): Xây dựng trọn bộ mã nguồn cho một website đa trang (multi-page) giới thiệu Trường Phổ thông Hermann Gmeiner Đà Nẵng.

Context (Bối cảnh & Yêu cầu):

Giao diện phải mang tông màu ấm áp (Cam - Vàng - Cream), sạch sẽ, phù hợp môi trường giáo dục.

Website phải Fully Responsive (tương thích mọi thiết bị từ Mobile đến Desktop).

Tích hợp tính năng Dark Mode / Light Mode hiện đại.

Tích hợp Chatbot AI sử dụng Google Gemini API để tư vấn tuyển sinh tự động.

Format (Định dạng đầu ra):

Xuất ra các file độc lập rõ ràng.

Sử dụng Tailwind CSS (CDN) để tối ưu tốc độ code.

Không sử dụng framework JS nặng (như React/Vue) để dễ dàng triển khai trên môi trường cơ bản.

💡 Prompt thực tế đã sử dụng:

Hãy tưởng tượng bạn là lập trình viên UI/UX chuyên nghiệp.
Nhiệm vụ: Xây dựng một website đa trang (multi-page) giới thiệu Trường Hermann Gmeiner Đà Nẵng. có dark mode / light mode, có nút toggle

YÊU CẦU CHUNG:

Xuất ra đầy đủ các file độc lập sau: index.html, gioithieu.html, hoctap.html, tintuc.html, thuvien.html, lienhe.html, styles.css, script.js.

Không gộp bất kỳ file nào.

HTML5 semantic, CSS hiện đại, JavaScript nhẹ.

Giao diện tông cam – vàng – cream, điểm nhấn xanh SOS, vibe ấm áp – sạch sẽ – trường học.

Web phải FULLY RESPONSIVE, scale đẹp ở mọi độ rộng: Mobile (≤ 480px), Tablet (481–768px), Laptop (769–1366px), Desktop lớn (≥ 1367px).

Menu mobile phải được thu gọn bằng JavaScript toggle trong script.js.

Hình ảnh, text, card phải tự co giãn hợp lý, không bị tràn hoặc vỡ layout.

Dùng media queries trong CSS để tối ưu cho mobile.

HEADER (TẤT CẢ CÁC TRANG):

Logo/ tên “Hermann Gmeiner Đà Nẵng”.

Menu: Trang chủ, Giới thiệu, Học tập, Tin tức, Thư viện, Liên hệ.

Trên mobile: ẩn menu ngang, thay bằng nút toggle (JS).

Menu mobile mở ra dạng vertical list.

FOOTER (TẤT CẢ CÁC TRANG):

Phần “Thông tin về Trường”.

Địa chỉ, email, hotline. Link Fanpage, Website SOS Việt Nam.

Nhúng Google Maps bằng iframe ngay trong footer (full width, responsive).

NỘI DUNG TỪNG TRANG:

index.html: Hero section, 3 mục nổi bật.

gioithieu.html: Lịch sử, Sứ mệnh, Giá trị cốt lõi.

hoctap.html: Chương trình học, CLB, Môi trường.

tintuc.html: Danh sách bài viết dạng card.

thuvien.html: Responsive image gallery.

lienhe.html: Thông tin liên hệ, Form.

YÊU CẦU KỸ THUẬT:

CSS: Dùng CSS variables, Flexbox + Grid, Media queries.

JS: Toggle menu mobile, smooth scroll.

OUTPUT: Xuất code theo đúng thứ tự, mỗi file đầy đủ nội dung.

🛠 Công nghệ sử dụng

Core: HTML5, CSS3 (Variables), JavaScript (Vanilla ES6+).

Styling: Tailwind CSS (thông qua CDN) giúp thiết kế nhanh và chuẩn Responsive.

Icons: Font Awesome 6.

AI Integration: Google Gemini API (Model gemini-1.5-flash).

Markdown Parsing: Thư viện marked.js để hiển thị câu trả lời của AI đẹp mắt.

📂 Cấu trúc thư mục

/SkyAIfirst
│
├── /images         # Thư mục chứa hình ảnh dự án
├── index.html      # Trang chủ (Home)
├── gioithieu.html  # Trang Giới thiệu
├── hoctap.html     # Trang Học tập & Hoạt động
├── tintuc.html     # Trang Tin tức
├── thuvien.html    # Trang Thư viện ảnh
├── lienhe.html     # Trang Liên hệ
├── script.js       # Logic xử lý chung (Menu, Dark Mode, Chatbot)
├── styles.css      # Định dạng giao diện chung (CSS Variables, Animation)
└── README.md       # Tài liệu báo cáo này



⚠️ Lưu ý quan trọng về Chatbot AI (API Key)

Để tính năng "Trợ lý ảo Hermann AI" hoạt động được, bạn cần tự cấu hình API Key của riêng mình (do vấn đề bảo mật, key không được public sẵn).

Cách thực hiện:

Truy cập Google AI Studio để lấy API Key miễn phí.

Mở file script.js.

Tìm dòng đầu tiên và dán key của bạn vào:

const apiKey = "DÁN_MÃ_API_KEY_CỦA_BẠN_VÀO_ĐÂY";



Lưu lại và Chatbot sẽ hoạt động ngay lập tức! =))))

© 2025 Developed by Phu.
