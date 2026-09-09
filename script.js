// 1. إعداد الخريطة وتحديد نقطة البداية (خط الطول والعرض للجامعة)
// مثال: إحداثيات افتراضية، يجب تغييرها لإحداثيات جامعتك
var map = L.map('map').setView([24.4686, 39.6111], 15); // [Latitude, Longitude], Zoom Level

// 2. إضافة شكل الخريطة (من OpenStreetMap المجانية)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. إنشاء مجموعات للعناصر (Layers) لسهولة إخفائها وإظهارها
var buildingsLayer = L.layerGroup().addTo(map);
var cafesLayer = L.layerGroup().addTo(map);
var restaurantsLayer = L.layerGroup().addTo(map);

// 4. إضافة النقاط (Markers)
// -- المباني --
L.marker([24.4690, 39.6120]).bindPopup('<b>مبنى كلية الحاسب</b>').addTo(buildingsLayer);
L.marker([24.4670, 39.6100]).bindPopup('<b>مبنى الإدارة</b>').addTo(buildingsLayer);

// -- المقاهي --
L.marker([24.4680, 39.6115]).bindPopup('<b>مقهى ستاربكس</b>').addTo(cafesLayer);

// -- المطاعم --
L.marker([24.4685, 39.6090]).bindPopup('<b>مطعم الجامعة</b>').addTo(restaurantsLayer);

// 5. ربط الخيارات الجانبية (Checkboxes) بالخريطة لإظهار/إخفاء النقاط
document.getElementById('buildingsCheckbox').addEventListener('change', function(e) {
    if(e.target.checked) map.addLayer(buildingsLayer);
    else map.removeLayer(buildingsLayer);
});

document.getElementById('cafesCheckbox').addEventListener('change', function(e) {
    if(e.target.checked) map.addLayer(cafesLayer);
    else map.removeLayer(cafesLayer);
});

document.getElementById('restaurantsCheckbox').addEventListener('change', function(e) {
    if(e.target.checked) map.addLayer(restaurantsLayer);
    else map.removeLayer(restaurantsLayer);
});
