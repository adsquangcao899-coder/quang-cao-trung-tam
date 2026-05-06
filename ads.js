// === CENTRAL ADS SCRIPT - BANNER XẾP CHỒNG + POPUP ===
console.log("🚀 Quảng cáo trung tâm - Banner + Popup đã chạy!");

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
            width: 70%;
            max-width: 510px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            background: #fff;
        }

        .float-banner img {
            width: 100%;
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

        /* ================== POPUP ================== */
        #custom-popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;
            width: 90%;
            max-width: 420px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            overflow: hidden;
            display: none;
        }

        #custom-popup .popup-close {
            position: absolute;
            top: 8px;
            right: 8px;
            background: #000;
            color: white;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            cursor: pointer;
            z-index: 10000;
        }

        #custom-popup img {
            width: 100%;
            height: auto;
            display: block;
        }

        .popup-buttons {
            padding: 15px;
            display: flex;
            gap: 10px;
            justify-content: center;
        }

        .popup-buttons a {
            padding: 12px 20px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            text-align: center;
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
        <div class="popup-15grid" style="display: grid; grid-template-columns: repeat(1,1fr); gap: 1px 1px;">
        <div><a href="https://nhacaimmoo.com/uy88/1" target="_blank" rel="noopener"><img class="aligncenter wp-image-16 size-full" src="http://nhacaimmoo.com/wp-content/uploads/2026/05/400x300-UY88.gif" alt="" width="300" height="250" /></a></div>
        <div><a href="https://nhacaimmoo.com/i9/3" target="_blank" rel="noopener"><img class="aligncenter wp-image-16 size-full" src="http://nhacaimmoo.com/wp-content/uploads/2026/01/300-x-250.jpg" alt="" width="300" height="250" /></a></div>
        
        <a href="#" class="close-all" onclick="document.getElementById('floating-stack').style.display='none'; return false;">
            ✕ Tắt tất cả quảng cáo
        </a>
    `;

    document.body.appendChild(container);
}

// Tạo Popup
function hienPopup() {
    if (document.getElementById('custom-popup')) return;

    const popup = document.createElement('div');
    popup.id = 'custom-popup';
    popup.innerHTML = `
        <div class="popup-close" onclick="this.parentElement.style.display='none'">×</div>
        <a href="https://nhacaimmoo.com/uy88/1" target="_blank">
            <img src="https://i.imgur.com/LINK-HINH-POPUP-CUA-BAN.jpg" alt="Popup UY88">
        </a>
        
        <div class="popup-buttons">
            <a href="https://nhacaimmoo.com/uy88/1" target="_blank" style="background:#ffcc00; color:#000;">🔥 TẢI APP NGAY</a>
            <a href="https://nhacaimmoo.com/i9/2" target="_blank" style="background:#ff0000; color:white;">CƯỢC I9BET</a>
        </div>
    `;

    document.body.appendChild(popup);
    
    // Hiển thị popup sau 3 giây
    setTimeout(() => {
        popup.style.display = 'block';
    }, 3000);
}

// Khởi chạy
injectCSS();
hienBannerXepChong();
hienPopup();
