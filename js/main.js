  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47708247-1', 'kellybrofall.se');
  ga('send', 'pageview');// })


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
