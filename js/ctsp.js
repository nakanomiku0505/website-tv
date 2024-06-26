document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById('p1');
    const previews = document.querySelectorAll('.preview img');
    let currentIndex = 0;

    previews.forEach((preview, index) => {
        preview.addEventListener('click', () => {
            setActiveImage(index);
        });
    });

    document.querySelector('.prev-sp').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? previews.length - 1 : currentIndex - 1;
        setActiveImage(currentIndex);
    });

    document.querySelector('.next-sp').addEventListener('click', () => {
        currentIndex = (currentIndex === previews.length - 1) ? 0 : currentIndex + 1;
        setActiveImage(currentIndex);
    });

    function setActiveImage(index) {
        previews.forEach(preview => preview.classList.remove('active'));
        previews[index].classList.add('active');
        mainImage.src = previews[index].dataset.image;
    }
});