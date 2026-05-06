// === CENTRAL ADS SCRIPT - PHIÊN BẢN ỔN ĐỊNH ===
console.log("🚀 Quảng cáo trung tâm đã chạy!");

(function() {
    function hienBanner() {
        var banner = document.createElement("div");
        banner.style.cssText = "text-align:center; margin:20px 0; padding:10px; background:#f8f9fa; border:1px solid #ddd;";

        banner.innerHTML = `
            <a href="https://LINK-QUANG-CAO-THAT-CUA-BAN.com" target="_blank">
                <img src="https://i.imgur.com/LINK-HINH-CUA-BAN.jpg" 
                     style="max-width:100%; height:auto; max-height:300px;" alt="Quảng cáo">
            </a>
        `;

        document.body.insertBefore(banner, document.body.firstChild);
        document.body.appendChild(banner.cloneNode(true));
    }

    // Chạy khi trang load
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", hienBanner);
    } else {
        hienBanner();
    }
})();
