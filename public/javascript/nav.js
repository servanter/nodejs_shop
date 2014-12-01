$(function() {
    $('.J_backToPrev').click(function() {
        window.history.go(-1);
    });
});

if(navIndex != undefined && navIndex >= 0) {
    $($("#nav").find('span')[navIndex]).addClass('active');
}

// judge the refer and display the back button
var referer = window.parent.document.referrer;
if(referer && referer.indexOf('localhost') != -1) {
    $($('.head_left.fl').find('span')).removeClass('h_empty').addClass('h_back');
}
