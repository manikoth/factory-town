// Mix-It-Up Filters
var mixer = mixitup('main', {
    selectors: {
        target: 'figure'
    },
    animation: {
        duration: 300
    }
});

// Media Element Player
$('video').mediaelementplayer({
    alwaysShowControls: false,
    hideVideoControlsOnLoad: true,
    features: ['progress', 'volume', 'fullscreen']
});

// Chocolat
$(document).ready(function(){
    
    $('#gallery-1,#gallery-2,#gallery-3,#gallery-4').Chocolat({
        loop           : true,
        imageSize     : 'cover',
        overlayOpacity : 0.9
    });

});

