document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    document.querySelector('.carousel-control-next').addEventListener('click', function(e) {
        e.preventDefault();
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalItems;
        items[currentIndex].classList.add('active');
        document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    document.querySelector('.carousel-control-prev').addEventListener('click', function(e) {
        e.preventDefault();
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        items[currentIndex].classList.add('active');
        document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
    });
});