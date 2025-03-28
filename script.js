function toggleMenu(){
    const navmenu = document.querySelector('.nav-menu');
    const hamburger = document.getElementById('hamburger');

    navmenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}