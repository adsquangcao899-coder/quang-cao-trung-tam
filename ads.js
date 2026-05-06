// === CENTRAL ADS SCRIPT - BANNER XẾP CHỒNG 70% ===
console.log("🚀 Quảng cáo trung tâm - Banner xếp chồng 70% đã chạy!");

// Inject CSS
function injectCSS() {
    const css = `
        #floating-stack {
            position: fixed;
            bottom: 12px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9000;
            width: 100%;
            max-width: 728px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
            padding: 0 10px;
        }

        .float-banner {
            width: 70%;                    /* Banner chiếm 70% chiều rộng */
            max-width: 510px;              /* Giới hạn tối đa cho banner lớn */
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            background: #fff;
        }

        .float-banner img {
            width: 100%;                   /* Hình ảnh đầy banner */
            height: auto;
            display: block;
        }

        .close-all {
            background: #41007d;
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            text-decoration: none;
            font-size: 15px;
            margin-top: 8px;
            display: inline-block;
        }

        /* Responsive Mobile */
        @media only screen and (max-width: 600px) {
            #floating-stack {
                bottom: 8px;
                padding: 0 8px;
            }
            
            .float-banner {
                width: 85%;                /* Tăng lên 85% trên mobile cho dễ nhìn */
            }
        }
    `;

    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
}

// Tạo banner xếp chồng
function hienBannerXepChong() {
    if (document.getElementById('floating-stack')) return;

    const container = document.createElement('div');
    container.id = 'floating-stack';

    container.innerHTML = `
        <!-- Banner 1 -->
        <div class="float-banner">
            <a href="https://nhacaimmoo.com/uy88/1" target="_blank">
                <img src="http://nhacaimmoo.com/wp-content/uploads/2026/05/728X90-UY-GTBB.gif" alt="Banner 1">
            </a>
        </div>

        <!-- Banner 2 -->
        <div class="float-banner">
            <a href="https://nhacaimmoo.com/uy88/1" target="_blank">
                <img src="http://nhacaimmoo.com/wp-content/uploads/2026/05/728X90-UY-GTBB.gif" alt="Banner 2">
            </a>
        </div>

        <!-- Banner 3 -->
        <div class="float-banner">
            <a href="https://nhacaimmoo.com/i9/2" target="_blank">
                <img src="http://nhacaimmoo.com/wp-content/uploads/2025/08/728-90.gif" alt="Banner 3">
            </a>
        </div>

        <!-- Banner 4 -->
        <div class="float-banner">
            <a href="https://nhacaimmoo.com/i9/2" target="_blank">
                <img src="http://nhacaimmoo.com/wp-content/uploads/2025/08/728-90.gif" alt="Banner 4">
            </a>
        </div>

        <!-- Nút tắt tất cả -->
        <a href="#" class="close-all" onclick="document.getElementById('floating-stack').style.display='none'; return false;">
            ✕ Tắt tất cả quảng cáo
        </a>
    `;

    document.body.appendChild(container);
}

// Khởi chạy
injectCSS();

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hienBannerXepChong);
} else {
    hienBannerXepChong();
}
