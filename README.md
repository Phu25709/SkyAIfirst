# Báo Cáo Dự Án Website Trường Hermann Gmeiner Đà Nẵng 🏫

Tài liệu này tổng hợp toàn bộ quá trình xây dựng website, bao gồm cấu trúc Prompt đã sử dụng và hướng dẫn kỹ thuật triển khai.

Thực hiện bởi **Team Sky AI – Hermann Gmeiner Đà Nẵng**

---

## 🔗 Link Demo Sản Phẩm

👉 Truy cập ngay: **https://phu25709.github.io/SkyAIfirst/index.html**

---

## 📝 Cấu trúc Prompt (Prompt Engineering)

### **1. Persona (Vai trò)**
Bạn là một lập trình viên UI/UX chuyên nghiệp (Senior Front-end Developer).

### **2. Task (Nhiệm vụ)**
Xây dựng trọn bộ mã nguồn cho website đa trang (multi-page) giới thiệu Trường Phổ thông Hermann Gmeiner Đà Nẵng.

### **3. Context (Bối cảnh & Yêu cầu)**

- Tông màu chủ đạo: **Cam – Vàng – Cream**, sạch sẽ, thân thiện, vibe giáo dục.
- Website phải **Fully Responsive** trên Mobile → Tablet → Laptop → Desktop.
- Tích hợp **Dark Mode / Light Mode** hiện đại.
- Tích hợp **Chatbot AI** sử dụng Google Gemini API để tư vấn tuyển sinh tự động.

### **4. Format (Định dạng đầu ra)**

- Xuất ra các file độc lập:  
  `index.html`, `gioithieu.html`, `hoctap.html`, `tintuc.html`, `thuvien.html`, `lienhe.html`, `styles.css`, `script.js`.
- Dùng **Tailwind CSS (CDN)** để code nhanh.
- Không dùng framework JS nặng (React, Vue) để dễ triển khai với GitHub Pages.

---

### 💡 Prompt thực tế đã sử dụng

Hãy tưởng tượng bạn là lập trình viên UI/UX chuyên nghiệp.  
Nhiệm vụ: Xây dựng một website đa trang (multi-page) giới thiệu Trường Hermann Gmeiner Đà Nẵng, có dark mode/light mode và có nút toggle chuyển chế độ.

#### YÊU CẦU CHUNG

- Xuất đủ các file: `index.html`, `gioithieu.html`, `hoctap.html`, `tintuc.html`, `thuvien.html`, `lienhe.html`, `styles.css`, `script.js`.  
- HTML5 semantic, CSS hiện đại, JavaScript nhẹ.  
- Giao diện tông cam – vàng – cream, điểm nhấn xanh SOS.  
- Website **FULLY RESPONSIVE** cho mọi kích thước màn hình.  
- Menu mobile dạng toggle (JS).  
- Hình ảnh, card, text tự co giãn hợp lý, không vỡ layout.  
- Tối ưu mobile bằng media queries.

#### HEADER (TẤT CẢ TRANG)

- Logo + menu: Trang chủ, Giới thiệu, Học tập, Tin tức, Thư viện, Liên hệ.  
- Trên mobile: ẩn menu ngang, dùng icon toggle (mở dạng danh sách dọc).

#### FOOTER (TẤT CẢ TRANG)

- Thông tin trường: địa chỉ, email, hotline.  
- Link Fanpage và Website SOS Việt Nam.  
- Nhúng Google Maps bằng `iframe` (full width, responsive).

#### NỘI DUNG TRANG

- `index.html`: Hero section + 3 mục nổi bật.  
- `gioithieu.html`: Lịch sử, Sứ mệnh, Giá trị cốt lõi.  
- `hoctap.html`: Chương trình học, CLB, Môi trường.  
- `tintuc.html`: Danh sách bài viết dạng card.  
- `thuvien.html`: Responsive image gallery.  
- `lienhe.html`: Thông tin liên hệ + form.

#### KỸ THUẬT

- CSS: CSS variables, Flexbox, Grid, Media queries.  
- JS: Toggle menu, smooth scroll.

**OUTPUT:** Xuất code theo đúng thứ tự, từng file đầy đủ nội dung.


## 🛠 Công nghệ sử dụng

- **HTML5**, **CSS3 (CSS Variables)**, **JavaScript ES6+**
- **Tailwind CSS (CDN)** – viết UI nhanh, responsive chuẩn
- **Font Awesome 6** – icon hiện đại
- **Google Gemini API (1.5 Flash)** – chatbot tuyển sinh
- **marked.js** – render Markdown đẹp cho chatbot

---

## 📂 Cấu trúc thư mục dự án

```
/SkyAIfirst
│
├── /images          # Thư mục chứa hình ảnh dự án
├── index.html       # Trang chủ (Home)
├── gioithieu.html   # Trang Giới thiệu
├── hoctap.html      # Trang Học tập & Hoạt động
├── tintuc.html      # Trang Tin tức
├── thuvien.html     # Trang Thư viện ảnh
├── lienhe.html      # Trang Liên hệ
│
├── script.js        # Logic: toggle menu, dark mode, chatbot AI
├── styles.css       # CSS Variables, Layout, Animation
│
└── README.md        # Tài liệu báo cáo dự án
```

---


## ⚠️ Lưu ý quan trọng về Chatbot AI (API Key)

Tính năng **“Trợ lý ảo Hermann AI”** cần API Key riêng của bạn.

### Cách cấu hình:

1. Vào **Google AI Studio** → tạo API Key miễn phí.  
2. Mở `script.js`.  
3. Tìm dòng:

```javascript
const apiKey = "DÁN_MÃ_API_KEY_CỦA_BẠN_VÀO_ĐÂY";
Thay bằng key của bạn.
```

Lưu lại → chatbot hoạt động ngay lập tức.
© 2025 — Developed by Sỹ Phú

Website được xây dựng như một dự án học thuật kết hợp AI – lập trình – thiết kế UI/UX, hướng tới mô hình ứng dụng thực tiễn tại Trường Hermann Gmeiner Đà Nẵng.
