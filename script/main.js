let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

// console.log(menu);
// console.log(navBar);

menu.onclick = function () {
    menu.classList.toggle('fa-times')
    navBar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times')
    navBar.classList.remove('active');
    if (window.scrollY > 150) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}
let countDate = new Date('december 20, 2023 00:00:00').getTime();

function countDown() {
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;
}
setInterval(function () {
    countDown();
}, 1000)