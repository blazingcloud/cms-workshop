$(document).ready(function() {
    $('#infinite_carousel').infiniteCarousel({
        transitionSpeed : 250,//how fast the slides move
        displayTime : 6000, //how long before the slides move
        autoStart: false, //set to true if you want the infinite_carousel to start by default
        textholderHeight : .2,
        displayProgressBar : false, //set to true to display progress bar
        displayThumbnails: false, //set to true to display thumbnails
        displayThumbnailNumbers: false, //set to true to display thumbnail numbers
        displayThumbnailBackground: false, //set to true to display thummnail background
        showControls: true, //set to true to display play/pause buttons
        autoHideControls: false,
        autoHideCaptions: false, //captions view is down/hidden when true
        animateCaptionsOnMove:false, //animate captions when the view transitions
        enableArrowAnimation:true,
        padding: '267px',
        thumbnailWidth: '20px',
        thumbnailHeight: '20px',
        thumbnailFontSize: '.7em',
        enableArrowAnimation: false
    });

});



$(document).ready(function() {
    $('#infinite_carousel').css({'visibility':'visible','display':'none'}).fadeIn('slow');

    $('.minmax').css({'width':'0','height':'0'});
    $('.close').css({'width':'0','height':'0'});
    $('.play_pause_btn').css({'width':'0','height':'0'});
});