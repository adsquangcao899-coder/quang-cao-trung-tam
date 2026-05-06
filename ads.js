// === TEST SCRIPT - ĐƠN GIẢN NHẤT ===
console.log("🚀 Quảng cáo trung tâm đã chạy!");
console.log("✅ File ads.js load thành công");

(function() {
    var banner = document.createElement("div");
    banner.style.cssText = "text-align:center; margin:20px 0; padding:20px; background:#ffeeee; border:4px solid red; font-size:20px; font-weight:bold;";
    banner.innerHTML = `
        <a href="https://link-quang-cao-cua-ban.com" target="_blank">
            🔥 BANNER TEST - ĐÃ HOẠT ĐỘNG 🔥<br>
            <span style="font-size:16px;">(Bạn thay link và hình sau)</span>
        </a>
    `;
    document.body.insertBefore(banner, document.body.firstChild);
    document.body.appendChild(banner.cloneNode(true));
})();
