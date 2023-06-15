/* HOME PAGE ANIMATIONS */
TweenMax.from(".titledesign", 2, {
    delay: 2.5,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".quote", 2, {
    delay: 2.5,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".seework", 2, {
    delay: 2.5,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".snd", 2, {
    delay: 2.5,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
})

/* TEXT DISTORTION */
var text = new Blotter.Text("Nothing But A Mind Set Free.", { 
    family : "helvetica, sans-serif",
    size : 103.5,
    fill : "#f5f5f5",
    weight : 800,
});
var text2 = new Blotter.Text("Nothing But A Mind Set Free.", { 
    family : "helvetica, sans-serif",
    size : 90,
    fill : "#f5f5f5",
    weight : 800,
});
var text3 = new Blotter.Text("Nothing But A Mind Set Free.", { 
    family : "helvetica, sans-serif",
    size : 75,
    fill : "#f5f5f5",
    weight : 800,
});
  
var material = new Blotter.RollingDistortMaterial();
  
material.uniforms.uSpeed.value = 0.1;

var blotter = new Blotter(material, {
    texts : text
});
var blotter2 = new Blotter(material, {
    texts : text2
});
var blotter3 = new Blotter(material, {
    texts : text3
});
  
var quote = document.getElementById("quote");
var quote2 = document.getElementById("quote-2");
var quote3 = document.getElementById("quote-3");

var scope = blotter.forText(text);
var scope2 = blotter2.forText(text2);
var scope3 = blotter3.forText(text3);
  
scope.appendTo(quote);
scope2.appendTo(quote2);
scope3.appendTo(quote3);

/* ROTATING CIRCLE */
const circleType = new CircleType(document.getElementById('rotated')).radius(80);

$(window).scroll(function() {
    var offset = $(window).scrollTop();
    offset = offset * 0.1;

    $(".circle-text").css({
        "-mox-transform" : "rotate(" + offset + "deg)",
        "-webkit-transform" : "rotate(" + offset + "deg)",
        "-o-transform" : "rotate(" + offset + "deg)",
        "-ms-transform" : "rotate(" + offset + "deg)",
        "transform" : "rotate(" + offset + "deg)",
    });
});

/* SKILLS HOVER PREVIEW */
$(document).ready(function() {
    TweenMax.set(".skills-preview", { width: 0 });

    var timeline2 = new TimelineLite();

    $(document)
      .on("mouseover", ".skills-item", function(evt) {
        timeline2 = new TimelineLite();
        timeline2.to($(".skills-preview"), 1, {
          width: "25em",
          ease: Expo.easeInOut
        });
      })
      .on("mouseout", ".skills-item", function(evt) {
        timeline2 = new TimelineLite();
        timeline2.to($(".skills-preview"), 0.5, {
          width: 0,
          ease: Expo.easeInOut
        });
    });
});

$(".skills-link-1").hover(function() {
    $(".skills-preview").css({ "background-image": "url(images/SDparis-optimized.jpg)" }); 
});
$(".skills-link-2").hover(function() {
    $(".skills-preview").css({ "background-image": "url(images/02.png)" }); 
});

/* HOROZONTAL SCROLL */

