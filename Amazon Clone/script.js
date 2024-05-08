const images = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let n = 0;

function changeSlide(){
    images.forEach(image =>{
        image.style.display = 'none';
    });

    images[n].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click', event => {
    if(n > 0) {
        n--;
    }else{
        n = images.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener('click', event => {
    if(n < images.length - 1) {
        n++;
    }else{
        n = 0;
    }
    changeSlide();
});



const scrollContainer = document.querySelectorAll('.products');

scrollContainer.forEach(scrollItem => {
    scrollItem.addEventListener('wheel', event => {
        event.preventDefault();
        scrollItem.scrollLeft = scrollItem.scrollLeft + event.deltaY;
    })
});
