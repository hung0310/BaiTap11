var ten = document.getElementById('ten');
var mk = document.getElementById('mk');
var check = document.getElementById('cb');
var chuyennganh = document.getElementById('chuyennganh');
var rdNam = document.getElementById('rd_nam');
var rdNu = document.getElementById('rd_nu');
var ns = document.getElementById('dtpk');
var fontSizeSlider = document.getElementById('size_text');
var textarea = document.getElementById('mota');
var fontSizeLabel = document.getElementById('fontSizeLabel');
var color = document.getElementById('color');

function ShowInfo() {
    selectedIndex = chuyennganh.selectedIndex;
    var textSelect = chuyennganh.options[selectedIndex].textContent;
    var gt;
    if(rdNam.checked) {
        gt = rdNam.nextElementSibling.textContent;
    }
    if(rdNu.checked) {
        gt = rdNu.nextElementSibling.textContent;
    }
    console.log("Tên: " + ten.value);
    console.log("Mật khẩu: " + mk.value);
    console.log("Chuyên ngành: " + textSelect);
    console.log("Giới tính: " + gt);
    console.log("Ngày sinh: " + ns.value);
    console.log("Mô tả: " + textarea.value);
    console.log("Kích cỡ chữ: " + fontSizeSlider.value);
    console.log("Màu sắc yêu thích: " + color.value);
}

function ShowPass() {
    if(check.checked) {
        mk.type = "text";
    } else {
        mk.type = "password";
    }
}

fontSizeSlider.addEventListener('input', function() {
    var fontSize = fontSizeSlider.value;
    fontSizeLabel.textContent = fontSize + 'px';
});

fontSizeSlider.addEventListener('input', function() {
    var fontSize = fontSizeSlider.value + 'px';
    textarea.style.fontSize = fontSize;
});