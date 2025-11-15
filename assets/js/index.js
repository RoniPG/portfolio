const techCarousel = document.getElementById("tech-carousel");

function adjustInfiniteScroll(carousel) {
    const items = carousel.children;
    const itemsWidth = items[0].offsetWidth;

    if (Math.floor(carousel.scrollLeft) <= 1) {
        carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth - 2
    }

    if (Math.ceil(carousel.scrollLeft) >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 2
    }
}

techCarousel.addEventListener("scroll", () => adjustInfiniteScroll(techCarousel));