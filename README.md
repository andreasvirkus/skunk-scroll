# skunkScroll
A lightweight custom javascript scrollbar plug-in.

********************************
| Custom javascript scroll bar |
********************************

[Demo](http://andreasvirkus.github.io/skunk-scroll)

 - A small script that deploys a horizontal scalable scroll bar at the top of the page.
 - To use:
  * Include the css and js files.
  * Make sure to have a div element in your page's body with no parent divs. 
  * The div should have an ID named "scrollbar".
  * Inside #scrollbar, have a child div with the ID "scrollbar-bg".
  * You're all good to go! You can change the bar's colour in CSS

********************************
HTML

    <div id="scrollbar">
       <div id="scrollbar-bg"></div>
    </div>
 
CSS

    #scrollbar {
        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;
        width: 0%;
        height: 5px;
        z-index: 9999;
    }


    #scrollbar-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #E16036;
    }

 JavaScript
 
 
    var bar_bg = document.getElementById("scrollbar-bg"),
            body = document.body,
            html = document.documentElement;

        bar_bg.style.minWidth = document.width + "px";

        document.getElementsByTagName("body")[0].onresize = function() {
            // Update the gradient width
            bar_bg.style.minWidth = document.width + "px";
    }

        window.onscroll = function() {
            // Change the width of the progress bar
            var bar = document.getElementById("scrollbar"),
                dw  = document.documentElement.clientWidth,
                dh  = Math.max( body.scrollHeight, body.offsetHeight, 
                               html.clientHeight, html.scrollHeight, html.offsetHeight ),
                wh  = window.innerHeight,
                pos = pageYOffset || (document.documentElement.clientHeight ?
                                      document.documentElement.scrollTop : document.body.scrollTop),
                bw  = ((pos / (dh - wh)) * 100);

            bar.style.width = bw + "%";
    }

 Or if you happen to be a jQuery-guy
 
    var bar_bg = $("#scrollbar-bg");
    bar_bg.css("min-width", $(document).width() + "px");

    $(window).resize(function() {
        bar_bg.css("min-width", $(document).width() + "px");
    });

    $(window).scroll(function(e) {
        // Change the width of the progress bar
        var bar = $("#scrollbar"),
            dw  = $(document).width(),
            dh  = $(document).height(),
            wh  = $(window).height(),
            pos = $(document).scrollTop(),
            bw  = ((pos / (dh - wh)) * 100);

        bar.css("width", bw + "%");
    });
