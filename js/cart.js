let totalPrice = 0;

function buy(button) {
    const productItem = button.closest('.ct-sp');
    const name = productItem.querySelector('h1').textContent;
    const number = parseInt(productItem.querySelector('#num').value, 10);
    const priceText = productItem.querySelector('#price').textContent;
    const price = parseInt(priceText.replace(/[^\d]/g, ''), 10);
    const imgSrc = document.getElementById('p1').src;

    const totalItemPrice = price * number;

    const item = document.createElement('li');
    item.classList.add('product');
    item.innerHTML = `
    <img src="${imgSrc}" alt="${name}" width="50px" height="30px";">
    <div class="product-info">
      <p class="product-name">${name}</p>
      <p class="product-price">${number} x ${price.toLocaleString()}₫ = ${totalItemPrice.toLocaleString()}₫</p>
    </div>
    <button class="remove-from-cart"><i class="fa-solid fa-trash-can" style="color: #cf72aa; font-size: 18px;"></i></button>
  `;

    document.getElementById('cart-items').appendChild(item);

    // Hiện form giỏ hàng
    document.getElementById('cart').style.display = 'block';

    // Tính tổng tiền của đơn hàng
    totalPrice += totalItemPrice;
    document.getElementById('total').innerText = `Tổng tiền: ${totalPrice.toLocaleString()}₫`;

    // Xóa đơn hàng
    const removeButton = item.querySelector('.remove-from-cart');
    removeButton.addEventListener('click', function () {
        item.remove();
        totalPrice -= totalItemPrice;
        document.getElementById('total').innerText = `Tổng tiền: ${totalPrice.toLocaleString()}₫`;
    });
}

/* thanh toán đơn hàng */
function ThanhToan() {
    window.location.href = "#";
    return true;
}

/* đóng form đơn hàng */
function dongform() {
    document.getElementById('cart').style.display = 'none';
}

/* hiện form Cart */
function Cart() {
    document.getElementById('cart').style.display = 'block';
}