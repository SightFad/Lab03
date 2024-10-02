function getValue(id) {
    return document.getElementById(id).value.trim();
}

function showError(key, mess) {
    document.getElementById(key + '_error').innerHTML = mess;
}

function validate() {
    var flag = true;

    var username = getValue('name');
    if (username == '' || username.length > 30) {
        flag = false;
        showError('name', 'Họ tên không rỗng và < 30 ký tự');
    }

    var ID = getValue('ID');
    if (ID == '' || ID.length != 10 || !/^[0-9a-z0-9]+$/.test(ID)) {
        flag = false;
        showError('ID', 'Mã sinh viên gồm 10 ký tự');
    }

    var age = getValue('age');
    if (age = '' || age <= 18) {
        flag = false;
        showError('age', 'Tuổi phải 18 trở lên');
    }

    var en = document.getElementById('en').checked
    if (en) {
        showError('en', 'Anh ');
    }

    var fr = document.getElementById('fr').checked
    if (fr) {
        showError('fr', 'Pháp ');
    }

    var jp = document.getElementById('jp').checked
    if (jp) {
        showError('jp', 'Nhật ');
    }

    var e = document.getElementById("sl");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    if (text === "Hệ thống") {
        showError('ht', 'Phân tích & Thiết kế');
    }
    else if (text === "Phần mềm") {
        showError('pm', 'Lập trình');
    }
    else if (text === "Mạng máy tính") {
        showError('mmt', 'Quản lý mạng');
    }
    Check(flag);
    return flag;
}

function Check(check) {
    if (check) {
        document.getElementById("check").innerHTML = "Bạn đã đăng ký thành công";
    }
    else {
        document.getElementById("check").innerHTML = "Bạn phải nhập lại cho đúng";
    }
}
