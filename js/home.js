//--------------Chuyển ảnh----------------
const anh = document.getElementsByClassName('aspect-ratio-169')[0];
const jpg = anh.getElementsByTagName('img');
const next = document.getElementsByClassName('next')[0];
const prev = document.getElementsByClassName('prev')[0];
let current = 0;

function showImage(index) {
    for (let i = 0; i < jpg.length; i++) {
        jpg[i].classList.remove('active');
    }
    jpg[index].classList.add('active');
}
prev.addEventListener('click', () => {
    current--;
    if (current < 0) {
        current = jpg.length - 1;
    }
    showImage(current);
});

next.addEventListener('click', () => {
    current++;
    if (current >= jpg.length) {
        current = 0;
    }
    showImage(current);
});
function autoSlide() {
    current++;
    if (current >= jpg.length) {
        current = 0;
    }
    showImage(current);
}

setInterval(autoSlide, 3000);
