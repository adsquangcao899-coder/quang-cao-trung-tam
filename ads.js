// === CENTRAL ADS SCRIPT - NHIỀU BANNER ===
console.log("🚀 Quảng cáo trung tâm - Multiple Floating Banners đã chạy!");

// Inject CSS chung
function injectCSS() {
    const css = `
        .float-banner {
            position: fixed;
            z-index: 9000;
            text-align: center;
            background: rgba(255,255,255,0.95);
            padding: 8px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .float-banner img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
            border-radius: 6px;
        }

        .float-banner .close-btn {
            margin-top: 6px;
            font-size: 14px;
        }

        .float-banner .close-btn a {
            background: #41007d;
            color: #fff;
            padding: 4px 12px;
            text-decoration: none;
            border-radius: 4px;
        }

        /* Banner dưới giữa */
        #float-bottom {
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 728px;
        }

        /* Banner trên giữa */
        #float-top {
            top: 15px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 728px;
        }

        /* Responsive */
        @media only screen and (max-width: 600px) {
            #float-bottom, #float-top {
                width: 94%;
                padding: 6px;
            }
        }
    `;

    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
}

// Hàm tạo banner (dễ thêm nhiều banner)
function createFloatingBanner(id, position, link, imageUrl) {
    if (document.getElementById(id)) return; // Tránh tạo trùng

    const banner = document.createElement('div');
    banner.id = id;
    banner.className = 'float-banner';
    
    banner.innerHTML = `
        <a href="${link}" target="_blank">
            <img src="${imageUrl}" alt="Quảng cáo">
        </a>
        <div class="close-btn">
            <a href="#" onclick="this.parentElement.parentElement.style.display='none'; return false;">× Đóng</a>
        </div>
    `;

    document.body.appendChild(banner);
}

// Chạy tất cả banner
function hienTatCaBanner() {
    injectCSS();

    // ================== THÊM BANNER Ở ĐÂY ==================

    // Banner 1 - Dưới giữa
    createFloatingBanner(
        'float-bottom',
        'bottom',
        'https://nhacaimmoo.com/uy88/1',           // ← Thay link 1
        'http://nhacaimmoo.com/wp-content/uploads/2026/05/728X90-UY-GTBB.gif'   // ← Thay hình 1
    );

    // Banner 2 - Trên giữa
    createFloatingBanner(
        'float-top',
        'top',
        'https://nhacaimmoo.com/i9/2',           // ← Thay link 2
        'http://nhacaimmoo.com/wp-content/uploads/2025/08/728-90.gif'   // ← Thay hình 2
    );

    // Banner 3 - (bạn có thể thêm bên trái hoặc phải)
    // createFloatingBanner(
    //     'float-left',
    //     'left',
    //     'https://LINK-QUANG-CAO-3.com',
    //     'https://i.imgur.com/HINH-BANNER-3.jpg'
    // );
}

// Khởi chạy
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hienTatCaBanner);
} else {
    hienTatCaBanner();
}
