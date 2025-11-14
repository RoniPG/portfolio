const carousel = document.getElementById("carousel");

// Make infinite scroll
function adjustInfiniteScroll() {
    const items = carousel.children;
    const itemWidth = items[0].offsetWidth + 14; // ancho + gap


    if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = itemWidth * (items.length - 2);
    }


    if (carousel.scrollLeft >= itemWidth * (items.length - 1)) {
        carousel.scrollLeft = itemWidth;
    }
}


carousel.addEventListener("scroll", adjustInfiniteScroll);