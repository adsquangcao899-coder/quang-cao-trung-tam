// === CENTRAL ADS SCRIPT - BANNER XẾP CHỒNG ===
console.log("🚀 Quảng cáo trung tâm - Banner xếp chồng đã chạy!");

// Inject CSS
function injectCSS() {
    const css = `
        #floating-stack {
            position: fixed;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9000;
            width: 90%;
            max-width: 728px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: center;
        }

        .float-banner {
            width: 70%;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            background: #fff;
        }

        .float-banner img {
            width: 70%;
            height: auto;
            display: block;
        }

        .close-all {
            background: #41007d;
            color: white;
            padding: 6px 12px;
            border-radius: 4px;
            text-decoration: none;
            font-size: 14px;
            margin-top: 5px;
        }

        /* Responsive */
        @media only screen and (max-width: 600px) {
            #floating-stack {
                width: 96%;
                bottom: 8px;
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
