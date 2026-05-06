function hienBanner() {
    var banner = document.createElement("div");
    banner.id = "float_content_center";   // hoặc float-top
    banner.innerHTML = `
        <a href="https://nhacaimmoo.com/i9/2" target="_blank">
            <img src="http://nhacaimmoo.com/wp-content/uploads/2025/08/728-90.gif" alt="Quảng cáo">
        </a>
    `;
    document.body.appendChild(banner);
}
