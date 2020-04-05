window.addEventListener('scroll', function (e) {

    const x = window.scrollY;
    const hero = this.document.querySelector('.hero');

    hero.style.clipPath = `circle(${x}px at center)`;

})




