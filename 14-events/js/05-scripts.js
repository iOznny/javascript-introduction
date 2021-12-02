// Events with scroll in mouse

window.addEventListener('scroll', () => {    
    // Scrolling vertial
    // const scrollPX = window.scrollY;
    // console.log(scrollPX);

    const premium = document.querySelector('.premium');
    const location = premium.getBoundingClientRect();
    
    if (location.top < 100) {
        console.log('Elemento visible');
    } else {
        console.log('Elemento no visible');
    }

});

