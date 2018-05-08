document.addEventListener('scroll', function (e) {
    if (window.scrollY > document.querySelector('.profile').offsetHeight) {
        document.querySelector('.profile-pinned').style.top = 0;
    }
    else {
        document.querySelector('.profile-pinned').style.top = "-100px";
    }
});
