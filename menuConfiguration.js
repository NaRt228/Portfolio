window.addEventListener('pageshow', function (event) {
    var nav = document.querySelector('.navigate');
    nav.classList.remove('show-menu');
    var contactIcons = document.querySelector('.contactIcons');
    contactIcons.classList.remove('show-icons');
});

function showMenu() {
    var nav = document.querySelector('.navigate');
    nav.classList.toggle('show-menu');
}

function hideMenu(){
    var nav = document.querySelector('.navigate');
    nav.classList.remove('show-menu');
}