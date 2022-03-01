function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything
}

function circleColor(color) {
    const circle = document.querySelector('.circle')
    circle.style.background = color
}

function toggleMenu(){
    let menuToggle = document.querySelector('.toggle')
    let nav = document.querySelector('.nav')
    menuToggle.classList.toggle('active')
    nav.classList.toggle('active')
    
}