$(document).ready(function() {
    $(function() {
        $('#ei-slider').eislideshow({
			animation			: 'center',
			autoplay			: false,
			slideshow_interval	: 6000,
			titlesFactor		: 0
        });
    });

    $(function() {
        $('#ei-slider2').eislideshow({
            animation           : 'center',
            autoplay            : false,
            slideshow_interval  : 6000,
            titlesFactor        : 0
        });
    });

     $(function() {
        $('#ei-slider3').eislideshow({
            animation           : 'center',
            autoplay            : false,
            slideshow_interval  : 6000,
            titlesFactor        : 0
        });
    });

     $(function() {
        $('#ei-slider4').eislideshow({
            animation           : 'center',
            autoplay            : false,
            slideshow_interval  : 6000,
            titlesFactor        : 0
        });
    });

     $(document).ready(function() {
        $('.link').click(function() {
            $("html, body").animate({ scrollTop:2800}, 900);
        })
        $('.link1').click(function() {
            $("html, body").animate({ scrollTop:0}, 700);
        })
        $('.link2').click(function() {
            $("html, body").animate({ scrollTop:690}, 700);
        })
        $('.link3').click(function() {
            $("html, body").animate({ scrollTop:1370}, 900);
        })
        $('.link4').click(function() {
            $("html, body").animate({ scrollTop:2050}, 900);
        })
    });
});
