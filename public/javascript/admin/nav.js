$(function() {
    if(navIndex != undefined && navIndex >= 0) {
        $($($('.navbar.navbar-default .collapse .nav.navbar-nav')[0]).find('li')[navIndex]).find('a').addClass('active');
    }
})