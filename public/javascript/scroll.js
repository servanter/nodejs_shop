function turning () {
    if($('#myCarousel') && $('#myCarousel').length > 0) {
        if($('#myCarousel').find('ol').find('li').length > 1) {
            var point = $('#myCarousel').find('ol').find('.active');
            if(point) {
                $(point).toggleClass('active');
                if($(point).next() && $(point).next().length > 0) {
                    $(point).next().trigger('click');
                } else {
                    $($(point).parent().find('li')[0]).trigger('click');
                }
            }
        } else {
            clearInterval(sh);
        }
    }
}
var sh = setInterval(turning, 5000);