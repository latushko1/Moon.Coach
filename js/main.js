var tl = new TimelineMax ({paused: true});

tl.to('.one', 0.8, {
    y:6,
    rotation: 45,
    ease: Expo.easeInOut,
});

tl.to('.two', 0.8, {
    y:-6,
    rotation: -45,
    ease: Expo.easeInOut,
    delay: -0.8
});

tl.to('.menu', 2, {
    top:'0%',
    ease: Expo.easeInOut,
    delay: -2
});

tl.staggerFrom(".list-link", 1.4, {x:-200, opacity: 0, ease: "power4.inOut"}, 0.1);
tl.reverse();
$(document).on("click", ".toggle-btn",function(){
    tl.reversed(!tl.reversed());
});
