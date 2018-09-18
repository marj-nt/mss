window.onscroll = () => {
    fixHeader();
}

const header = document.querySelector('.rectangle-header')

const tagline = document.querySelector('#tagline')

const sticky = header.offsetTop;

const fixHeader = () => {
    if(window.pageYOffset > sticky) {
        header.classList.add('sticky');  
        tagline.style.display = 'none';
    } else {
        header.classList.remove('sticky');
    }
}