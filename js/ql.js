function add() {
    event.preventDefault();

    const STT = document.getElementById('STT').value;
    const Ten = document.getElementById('Ten').value;
    const DanhMuc = document.getElementById('DanhMuc').value;
    const SoLuong = document.getElementById('SoLuong').value;
    const Gia = document.getElementById('Gia').value;
    const IMG = document.getElementById('IMG').files[0];

    const table = document.getElementById('table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const STTCell = newRow.insertCell(0);
    const TenCell = newRow.insertCell(1);
    const DanhMucCell = newRow.insertCell(2);
    const SoLuongCell = newRow.insertCell(3);
    const GiaCell = newRow.insertCell(4);
    const IMGCell = newRow.insertCell(5);
    const Update = newRow.insertCell(6);
    const Delete = newRow.insertCell(7);

    STTCell.textContent = STT;
    TenCell.textContent = Ten;
    DanhMucCell.textContent = DanhMuc;
    SoLuongCell.textContent = SoLuong;
    GiaCell.textContent = Gia;

    if (STT === '' || Ten === '' || DanhMuc === '' || SoLuong === '' || Gia === '' || IMG === '') {
        window.alert('Vui Lòng Không Được Để Trống');
        return;
    }
    else if (IMG) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(IMG);
        img.width = 150;
        IMGCell.appendChild(img);
    } else {
        IMGCell.textContent = 'Không có ảnh';
    }

    Update.innerHTML = '<button type="button" onclick="Update(this)"><i class="fa-regular fa-pen-to-square"></i></button>';
    Delete.innerHTML = '<button type="button" onclick="Delete(this)"><i class="fa-solid fa-trash-can"></i></button>';
    document.getElementById('form').reset();
}
function Delete(button) {
    const row = button.closest('tr');
    row.remove();
}
function Update(button) {
    const row = button.closest('tr');

    const cells = row.querySelectorAll('td');

    cells[1].innerHTML = `<input type="text" value="${cells[1].innerText}">`;
    cells[2].innerHTML = `<input type="text" value="${cells[2].innerText}">`;
    cells[3].innerHTML = `<input type="text" value="${cells[3].innerText}">`;
    cells[4].innerHTML = `<input type="text" value="${cells[4].innerText}">`;
    cells[6].innerHTML = `<button type="button" onclick="Save(this)"><i class="fa-solid fa-check fa-fw"></i></button>`;
}

function Save(button) {
    const row = button.closest('tr');

    const cells = row.querySelectorAll('td');

    const newName = cells[1].querySelector('input').value;
    const newCategory = cells[2].querySelector('input').value;
    const newQuantity = cells[3].querySelector('input').value;
    const newPrice = cells[4].querySelector('input').value;

    cells[1].innerText = newName;
    cells[2].innerText = newCategory;
    cells[3].innerText = newQuantity;
    cells[4].innerText = newPrice;

    cells[6].innerHTML = `<button type="button" onclick="Update(this)"><i class="fa-regular fa-pen-to-square"></i></button>`;
}

function Search(event) {
    const searchText = event.target.value.trim();
    const regex = new RegExp(searchText, 'i');
    const rows = document.querySelectorAll('#table tbody tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let found = false;

        cells.forEach(cell => {
            const text = cell.textContent.trim();
            if (regex.test(text)) {
                found = true;
            }
        });

        if (found) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}




