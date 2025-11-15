const carousel = document.getElementById("carousel");

function adjustInfiniteScroll() {
    const items = carousel.children;
    console.log('items[0].offsetWidth', items[0].offsetWidth);
    const itemsWidth = items[0].offsetWidth;
    console.log('carousel.scrollLeft',carousel.scrollLeft );
    console.log('carousel.scrollWidth',carousel.scrollWidth );
    console.log(carousel.clientWidth);
    console.log(carousel.offsetWidth);
    console.log(carousel.scrollWidth - carousel.clientWidth);
    
    
    
    
console.log('Math.floor(carousel.scrollLeft)', Math.floor(carousel.scrollLeft));
console.log('Math.ceil(carousel.scrollLeft)', Math.ceil(carousel.scrollLeft));

    if (Math.floor(carousel.scrollLeft) <= 1 ) {
        carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth - 2
    } 
    
    if (Math.ceil(carousel.scrollLeft) >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 2
    }
}

carousel.addEventListener("scroll", adjustInfiniteScroll);