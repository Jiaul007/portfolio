let humbager = document.querySelector('#navigation .nav-icon');
let navContent = document.querySelector('#nav-content');
let closeBtn = document.querySelector('#nav-content .close-btn');
let navigationLink = document.querySelectorAll('.wrapper ul li a');

humbager.addEventListener('click', () => {
    navContent.classList.add('show');
    document.querySelector('body').style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    navContent.classList.remove('show');
    document.querySelector('body').style.overflow = 'initial';

});
navigationLink.forEach(link => {
    link.addEventListener('click', () => {
        navContent.classList.remove('show');
        document.querySelector('body').style.overflow = 'initial';
    });
});