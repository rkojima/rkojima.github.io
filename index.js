function showLinks(id) {
    // newLinks isn't quite an array, so needs to be somewhat typecasted
    const newLinks = Array.from(document.getElementsByClassName('links'));
    // Using forEach rather than map b/c not returning anything
    if (newLinks[0].classList.contains('showLinks')) {
        newLinks.forEach(function(link) {
            link.classList.remove('showLinks');
        });
    } else {
        newLinks.forEach(function(link) {
            link.classList.add('showLinks');
        });
    } 
    document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
}

window.onscroll = function() {
    const nav = document.getElementById('nav');
    if (window.pageYOffset > document.documentElement.clientHeight * .6 + 99) {
        nav.classList.add('nav-background');
    } else {
        nav.classList.remove('nav-background');
    }
}