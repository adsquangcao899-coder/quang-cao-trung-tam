<script>
// CENTRAL ADS SCRIPT - Dành cho người mới
console.log("🚀 Quảng cáo trung tâm đã chạy!");

(function() {
    // === BANNER QUẢNG CÁO (bạn thay link và hình sau) ===
    function hienBanner() {
        var banner = document.createElement("div");
        banner.style.textAlign = "center";
        banner.style.margin = "15px 0";
        banner.innerHTML = `
            <a href="https://nhacaimmoo.com/uy88/1" target="_blank">
                <img src="http://nhacaimmoo.com/wp-content/uploads/2026/05/728X90-UY-GTBB.gif" 
                     style="max-width:100%; height:auto; border:1px solid #ddd;" alt="Quảng cáo">
            </a>
        `;
        // Thêm banner vào đầu trang web
        if (document.body) {
            document.body.insertBefore(banner, document.body.firstChild);
        }
    }

    // Chạy banner khi trang web load xong
    window.addEventListener("load", hienBanner);
})();
</script>
