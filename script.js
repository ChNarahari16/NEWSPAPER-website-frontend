document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');
    // Carousel functionality
    let carouselIndex = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');

    function showCarouselItem(index) {
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselItems[index].classList.add('active');
    }

    function nextCarouselItem() {
        carouselIndex = (carouselIndex + 1) % carouselItems.length;
        showCarouselItem(carouselIndex);
    }

    setInterval(nextCarouselItem, 3000);
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const newsCarousel = document.querySelector('.news-carousel');
    
    newsCarousel.addEventListener('scroll', function() {
        // You can add any additional logic here for when scrolling happens.
    });
});
