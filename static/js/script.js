
function offsetNav() {
    var navbar = document.getElementById("navbar");
    var offset = navbar.offsetHeight;
    return offset;
}

/* ====== SCROLL ANYWHERE ====== */
function scrollToIt(section) {
    console.log(section.toString());
    var sectionHeight = $(section.toString()).offset().top;
    var offset = 84;
    console.log(sectionHeight);

    var distance = sectionHeight - offset / 5;

    $(window).scrollTop(distance);
}
