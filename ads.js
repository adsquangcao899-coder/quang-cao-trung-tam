// CENTRAL ADS - jsDelivr
console.log("🚀 Quảng cáo trung tâm GitHub đã chạy!");

(function() {
    function hienBanner() {
        var banner = document.createElement("div");
        banner.style.cssText = "text-align:center; margin:20px 0; padding:15px; background:#f0f8ff; border:3px solid #0066ff;";

        banner.innerHTML = `
            <a href="https://nhacaimmoo.com/uy88/1" target="_blank">
                <img src="http://nhacaimmoo.com/wp-content/uploads/2026/05/728X90-UY-GTBB.gif" 
                     style="max-width:100%; height:auto;" alt="Quảng cáo">
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
