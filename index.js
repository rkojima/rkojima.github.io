function showLinks() {
    let newLinks = document.getElementsByClassName('links');
    if (newLinks[0].classList.contains('showLinks')) {
        for (let i = 0; i < newLinks.length; i++) {
            newLinks[i].classList.remove('showLinks');
        }
    } else {
        for (let i = 0; i < newLinks.length; i++) {
            newLinks[i].classList.add('showLinks');
        }
    }   
}