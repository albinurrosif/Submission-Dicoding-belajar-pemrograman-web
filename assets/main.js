const hamburger = document.getElementById('toggle');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('tampil');
});
