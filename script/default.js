/* PAGE LOADER */
paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function() {
    $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([.19, 1, .22, 1]));

    $("#preloader").delay(1500).animate({top: '-100%'}, 2000, $.bez([.19, 1, .22, 1]));

});
