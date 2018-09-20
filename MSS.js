// window.onscroll = () => {
//     fixHeader();
// }

// const header = document.querySelector('.rectangle-header')
// const tagline = document.querySelector('.tagline')
// const logo = document.querySelector('.logo');
// const mssHeader = document.querySelector('.MSSheader');

// const sticky = header.offsetTop;

// const fixHeader = () => {
//     if(window.pageYOffset > sticky) {
//         header.classList.add('sticky');  
//         tagline.classList.add('hide-class');
//         // logo.classList.add('hide-class');
//         // mssHeader.classList.add('hide-class');
//     } else {
//         header.classList.remove('sticky');
//         tagline.classList.remove('hide-class');
//         // logo.classList.remove('hide-class');
//         // mssHeader.classList.remove('hide-class')
//     }
// }

// Scroll up, scroll down

// const prevScrollPos = window.pageYOffset;

// window.onscroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     if(prevScrollPos > currentScrollPos) {
//         document.querySelector('.rectangle-header').style.top = "0";
//     } else {
//         document.querySelector('.rectangle-header').style.top = "-50px";
//     }
//     prevScrollPos = currentScrollPos;
// }