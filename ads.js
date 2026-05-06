// === CENTRAL ADS SCRIPT - ĐÃ HOẠT ĐỘNG ===
console.log("🚀 Quảng cáo trung tâm GitHub đã chạy!!!");

(function() {
    function hienBanner() {
        var banner = document.createElement("div");
        banner.style.cssText = "text-align:center; margin:20px 0; padding:10px; background:#f8f9fa; border:1px solid #ddd;";

        banner.innerHTML = `
            <a href="https://nhacaimmoo.com/uy88/1" target="_blank">
                <img src="http://nhacaimmoo.com/wp-content/uploads/2026/05/728X90-UY-GTBB.gif" 
                     style="max-width:75%; height:auto; max-height:300px;" alt="Quảng cáo">
            </a>
        `;

        document.body.insertBefore(banner, document.body.firstChild);
        document.body.appendChild(banner.cloneNode(true));
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", hienBanner);
    } else {
        hienBanner();
    }
})();
