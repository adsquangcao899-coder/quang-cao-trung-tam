// CENTRAL ADS SCRIPT - Phiên bản đơn giản cho người mới
console.log("🚀 Quảng cáo trung tâm đã chạy!");

(function() {
    function hienBanner() {
        var banner = document.createElement("div");
        banner.style.cssText = "text-align:center; margin:20px 0; padding:15px; background:#fff0f0; border:3px solid red; font-size:18px;";
        
        banner.innerHTML = `
            <a href="https://link-quang-cao-cua-ban.com" target="_blank">
                <strong>🔥 QUẢNG CÁO TEST - BẠN THAY LINK NÀY 🔥</strong><br><br>
                <img src="https://i.imgur.com/ThayHinhCuaBan.jpg" 
                     style="max-width:728px; height:auto;" alt="Banner Quảng Cáo">
            </a>
        `;
        
        document.body.insertBefore(banner, document.body.firstChild);
        document.body.appendChild(banner.cloneNode(true));
    }

    // Chạy banner
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", hienBanner);
    } else {
        hienBanner();
    }
})();
