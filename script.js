const apiKey = ""; // API Key sẽ được inject bởi môi trường khi chạy thực tế

function navigateTo(pageId) {
    console.log("Navigating to:", pageId);
    // Điều hướng sang file HTML tương ứng
    window.location.href = pageId + ".html";
}

const btnMobile = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (btnMobile) {
    const iconMenu = btnMobile.querySelector('i');
    btnMobile.addEventListener('click', toggleMobileMenu);
}

function toggleMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.toggle('open');
    const iconMenu = document.getElementById('mobile-menu-btn')?.querySelector('i');
    if (iconMenu) {
        if (mobileMenu.classList.contains('open')) {
            iconMenu.classList.remove('fa-bars');
            iconMenu.classList.add('fa-times');
        } else {
            iconMenu.classList.remove('fa-times');
            iconMenu.classList.add('fa-bars');
        }
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {
        console.warn('LocalStorage not available');
    }
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const iconClass = isDark ? 'fa-sun' : 'fa-moon';
    const desktopIcon = document.querySelector('#theme-toggle-desktop i');
    const mobileIcon = document.querySelector('#theme-toggle-mobile i');
    if (desktopIcon) desktopIcon.className = `fas ${iconClass}`;
    if (mobileIcon) mobileIcon.className = `fas ${iconClass}`;
}

function initDarkMode() {
    try {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            updateThemeIcon(true);
        } else {
            updateThemeIcon(false);
        }
    } catch (e) {
        console.warn('LocalStorage not available');
        updateThemeIcon(false);
    }
}

/* --- CHATBOT LOGIC --- */
const chatbotWindow = document.getElementById('chatbot-window');
const closeChatBtn = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

function toggleChatbot() {
    if (!chatbotWindow) return;
    chatbotWindow.classList.toggle('open');
    if (chatbotWindow.classList.contains('open')) {
        setTimeout(() => chatInput && chatInput.focus(), 300);
    }
}

if (closeChatBtn) {
    closeChatBtn.addEventListener('click', () => {
        if (chatbotWindow) chatbotWindow.classList.remove('open');
    });
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

async function sendMessage() {
    if (!chatInput) return;
    const text = chatInput.value.trim();
    if (!text) return;

    // 1. Add User Message
    addMessage(text, 'user');
    chatInput.value = '';

    // 2. Add Loading Indicator
    const loadingId = addLoading();

    // 3. Call Gemini API
    try {
        const response = await callGeminiAPI(text);
        removeLoading(loadingId);
        addMessage(response, 'bot');
    } catch (error) {
        removeLoading(loadingId);
        addMessage("Xin lỗi, hiện tại tôi không thể trả lời. Vui lòng thử lại sau.", 'bot');
        console.error("Gemini Error:", error);
    }
}

function addMessage(text, sender) {
    if (!chatMessages) return;
    const div = document.createElement('div');
    div.classList.add('message', sender);
    
    // If bot, parse markdown
    if (sender === 'bot') {
        try {
            div.innerHTML = marked.parse(text);
        } catch (e) {
            div.textContent = text;
        }
    } else {
        div.textContent = text;
    }
    
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addLoading() {
    if (!chatMessages) return;
    const id = 'loading-' + Date.now();
    const div = document.createElement('div');
    div.id = id;
    div.classList.add('message', 'bot', 'typing-indicator');
    div.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return id;
}

function removeLoading(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}

async function callGeminiAPI(userQuery) {
    const systemPrompt = `
        Bạn là trợ lý ảo AI nhiệt tình và thân thiện của Trường Hermann Gmeiner Đà Nẵng.
        Nhiệm vụ của bạn là giải đáp thắc mắc cho học sinh và phụ huynh dựa trên thông tin sau:
        
        1. GIỚI THIỆU:
        - Trường mang tên người sáng lập Làng trẻ em SOS toàn cầu Hermann Gmeiner.
        - Sứ mệnh: Kiến tạo môi trường giáo dục nhân văn.
        - Địa chỉ: 15 Nguyễn Đình Chiểu, Phường Khuê Mỹ, Quận Ngũ Hành Sơn, TP. Đà Nẵng.
        - Email: hgs.danang@sosvietnam.org | Hotline: 0236.3847093 - 0236.3954340.

        2. CHƯƠNG TRÌNH HỌC:
        - Đầy đủ 3 cấp: Tiểu học, THCS, THPT.
        - Bám sát chương trình Bộ GD&ĐT, chú trọng kỹ năng sống, ngoại ngữ.
        - Đội ngũ giáo viên tâm huyết, giàu kinh nghiệm.

        3. HOẠT ĐỘNG NGOẠI KHÓA (CLB):
        - CLB Lịch sử Văn hóa, CLB Âm nhạc, CLB Mỹ thuật.
        - CLB Truyền thông, CLB Trồng cây, CLB KHKT (STEM/AI).
        - Các hoạt động: Hội khỏe Phù Đổng, Tuần lễ sách, Ngày hội chia sẻ.

        4. TIN TỨC MỚI:
        - Đang tuyển sinh năm học mới (hạn nộp hồ sơ 10/05/2025).
        - Học sinh trường vừa đạt giải Nhất KHKT cấp Quận.

        HƯỚNG DẪN TRẢ LỜI:
        - Trả lời ngắn gọn, đúng trọng tâm, văn phong lịch sự, ấm áp (xưng "mình" hoặc "nhà trường").
        - Sử dụng emoji ✨🌱 để tạo sự thân thiện.
        - Nếu câu hỏi không nằm trong thông tin trên, hãy khuyên người dùng liên hệ hotline hoặc fanpage.
    `;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    
    const payload = {
        contents: [{
            role: "user",
            parts: [{ text: systemPrompt + "\n\nNgười dùng hỏi: " + userQuery }]
        }]
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error('API Request failed');

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initLinkPlaceholders();
});

// Initialize anchors with data-url placeholders so they behave as normal links
function initLinkPlaceholders() {
    document.querySelectorAll('a[data-url]').forEach(a => {
        const url = a.getAttribute('data-url');
        if (url && url.trim() !== '') {
            a.setAttribute('href', url);
        } else {
            // keep href as '#' if no url provided so it doesn't navigate unexpectedly
            if (!a.getAttribute('href') || a.getAttribute('href') === '#') {
                a.setAttribute('href', '#');
            }
        }
    });
}
