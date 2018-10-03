    
    
    // Bulma
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        //$(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });

    $('#gallery-1,#gallery-2,#gallery-3,#gallery-4').Chocolat({
        loop           : true,
        imageSize     : 'cover',
        overlayOpacity : 0.9
    });






