// === CENTRAL ADS SCRIPT - FLOATING BANNER ===
console.log("🚀 Quảng cáo trung tâm - Floating Banner đã chạy!");

// Inject CSS
function injectCSS() {
    const css = `
        #float_content_center {
            position: fixed;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9000;
            width: 90%;
            max-width: 728px;
            text-align: center;
            background: rgba(255,255,255,0.95);
            padding: 8px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        #float_content_center img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
            border-radius: 6px;
        }

        #hide_float_center {
            margin-top: 8px;
            font-size: 14px;
        }

        #hide_float_center a {
            background: #41007d;
            color: #fff;
            padding: 5px 12px;
            text-decoration: none;
            border-radius: 4px;
        }

        /* Responsive */
        @media only screen and (max-width: 600px) {
            #float_content_center {
                bottom: 8px;
                width: 94%;
                padding: 6px;
            }
        }
    `;

    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
}

// Tạo và hiển thị banner
function hienFloatingBanner() {
    // Kiểm tra nếu banner đã tồn tại thì không tạo lại
    if (document.getElementById('float_content_center')) return;

    const banner = document.createElement('div');
    banner.id = 'float_content_center';
    banner.innerHTML = `
        <a href="https://nhacaimmoo.com/i9/2" target="_blank">
            <img src="http://nhacaimmoo.com/wp-content/uploads/2025/08/728-90.gif" alt="Quảng cáo">
        </a>
        <div id="hide_float_center">
            <a href="#" onclick="this.parentElement.parentElement.style.display='none'; return false;">× Đóng</a>
        </div>
    `;

    document.body.appendChild(banner);
}

// Chạy script
injectCSS();

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hienFloatingBanner);
} else {
    hienFloatingBanner();
}
