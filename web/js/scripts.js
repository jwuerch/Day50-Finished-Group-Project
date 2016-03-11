/******************************* JQUERY **************************/


$(document).ready(function() {
    $("#log-in").click(function(event) {
        $('.sign-in-box').css('opacity', 0).slideDown(1000).animate({ opacity: 1 },{ queue: false, duration: 2000 });
        $(".transparency").show();
        event.preventDefault();

    });

    $("#upload-image").click(function(event) {
        $('.upload-image-box').css('opacity', 0).slideDown(1000).animate({ opacity: 1 },{ queue: false, duration: 2000 });
        $(".transparency").show();
        event.preventDefault();
    })

    $("#view-images").click(function(event) {
        $('.view-images-box').css('opacity', 0).slideDown(1000).animate({ opacity: 1 },{ queue: false, duration: 2000 });
        $(".transparency").show();
        event.preventDefault();
    })

    $(".close").click(function() {
      $('.transparency').hide();
      $('.sign-in-box').hide();
    })

    $(".close").click(function() {
      $('.transparency').hide();
      $('.upload-image-box').hide();
    })

    $(".close").click(function() {
      $('.transparency').hide();
      $('.view-images-box').hide();
    })


 });
