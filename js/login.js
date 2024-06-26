function log() {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    if (username === '' || password === '') {
        window.alert('Vui lòng nhập đầy đủ thông tin');
        return false;
    }
    else if (username === "Admin" && password === '123') {
        localStorage.setItem('username', username);
        window.location.href = "../interface/qltv.html";
    }
    else if (username === 'User' && password === '123') {
        localStorage.setItem('username', username);
        window.location.href = "../interface/home.html";
    }
    else {
        window.alert('Tên đăng nhập hoặc mật khẩu không chính xác');
        return false;
    }
}