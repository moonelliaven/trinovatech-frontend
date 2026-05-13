
const slider = document.getElementById('slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let currentIndex = 0;
const cardWidth = 360; // 340 + gap

next.addEventListener('click', () => {
    currentIndex++;
    
    if(currentIndex > 2){
        currentIndex = 0;
    }

    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});

prev.addEventListener('click', () => {
    currentIndex--;

    if(currentIndex < 0){
        currentIndex = 2;
    }

    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});