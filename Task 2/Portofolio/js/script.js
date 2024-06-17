
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = document.querySelector(this.hash);
            target = target ? target : document.querySelector('[name=' + this.hash.slice(1) + ']');
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        }
    });
});

window.onscroll = function() {
    var navbar = document.querySelector('header');
    if (window.pageYOffset > 50) {
        navbar.style.backgroundColor = '#3498db';
    } else {
        navbar.style.backgroundColor = '#1abc9c';
    }
};

