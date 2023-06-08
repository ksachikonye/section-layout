// Loader
// $(".js-active-header")
//   .mousemove(function (e) {
//     $(".js-cross").css({
//       left: e.pageX,
//       top: e.pageY,
//     });
//   })
//   .mouseleave(function () {
//     $(".js-cross").removeAttr("style");
//   });
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    smooth: 3,
    effects: true,
    smoothTouch: 0.1
});

var tl = gsap.timeline();

const welcomeScreen = gsap.timeline({
  paused: "true",
});
const fromLeft = document.querySelector("transition-container");

tl.from("#loader", {
  duration: 0.3,
  opacity: 0,
  y: 10,
});

let tl1 = gsap.timeline({ ease: "power4.inOut", paused: "true" });

tl1.set(fromLeft, { pointerEvents: "none" });
tl1.to(".from-left .tile", {
  duration: 0.6,
  width: "100%",
  left: "0%",

  // stagger: 0.05,
});
tl1.to(".from-left .tile", {
  duration: 0.5,
  width: "100%",
  left: "100%",
  stagger: 0.1,
});
tl1.set(".from-left .tile", { left: "0", width: "0" });
tl1.set(fromLeft, { pointerEvents: "all" });

// initializing loader
let id,
  i = 0;
function loader() {
  id = setInterval(frame, 20);
}
function frame() {
  if (i >= 100) {
    clearInterval(id);
    tl1.play();
    welcomeScreen.play();
  } else {
    i++;
    document.getElementById("loader").innerHTML = i + "%";
  }
}
window.onload = function () {
  loader();
};

// welcome screen

welcomeScreen.to(".loading-screen", {
  duration: 0.8,
  y: -2000,
  ease: "Power4.out",
  delay: 0.4,
});
welcomeScreen.from(
  ".banner .imag",
  {
    y: 500,
    duration: 0.5,
    stagger: {
      amount: 0.2,
    },
  },
  "-=.2"
);

welcomeScreen.from(
  ".banner h2",
  {
    y: 500,
    duration: 0.5,
    stagger: {
      amount: 0.2,
    },
  },
  "-=.2"
);

welcomeScreen.from(
  ".banner .btn-banner",
  {
    y: 500,
    duration: 0.5,
    stagger: {
      amount: 0.2,
    },
  },
  "-=.2"
);

// Loader

// Page transition

// Page transition

// Navbar
let holder = document.querySelector(".overlay-content"),
  wrapper = document.querySelector(".overlay"),
  contentWidth = holder.offsetWidth,
  overflow,
  mapPosition;

function onResize(e) {
  overflow = contentWidth - window.innerWidth;
  mapPosition = gsap.utils.mapRange(
    0,
    window.innerWidth,
    overflow / 2,
    overflow / -1
  );
}

function onMouseMove(e) {
  if (overflow > 0) {
    let x = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
    gsap.to(holder, {
      duration: 1,
      overwrite: true,
      ease: "power3",
      x: mapPosition(x),
    });
  }
}

window.addEventListener("resize", onResize);
document.addEventListener("mousemove", onMouseMove);
document.addEventListener("touchmove", onMouseMove);
document.addEventListener("pointermove", onMouseMove);
onResize();

$(document).mousemove(function (event) {
  $(".box").each(function (index, element) {
    var xPos = event.clientX / $(window).width() - 0.5,
      box = element;
    console.log({ c: xPos });
    TweenLite.to(box, 1, {
      rotationY: xPos * 100,
      ease: Power1.easeOut,
    });
  });
});

$("body a").on("click", function (e) {
  var target = $(this).attr("target");
  var fancybox = $(this).data("fancybox");
  var url = this.getAttribute("href");
  if (
    target != "_blank" &&
    typeof fancybox == "undefined" &&
    url.indexOf("#") < 0
  ) {
    e.preventDefault();
    var url = this.getAttribute("href");
    if (url.indexOf("#") != -1) {
      var hash = url.substring(url.indexOf("#"));

      if ($("body " + hash).length != 0) {
        $(".page-transition").removeClass("active");
      }
    } else {
      $(".page-transition").toggleClass("active");
      setTimeout(function () {
        window.location = url;
      }, 1300);
    }
  }
});
// hoveruse
// $(document).mousemove(function(event){
//    var xPos = (event.clientX/$(window).width())-0.3,
//        yPos = (event.clientY/$(window).height())-0.3,
//        box = $('.overlay-content'),
//        coord = $('.box');

//   TweenLite.to(box, 0.6, {
//     rotationY: 5 * xPos,
//     rotationX: 5 * yPos,
//     ease: Power1.easeOut,
//     transformPerspective: 100,
//     transformOrigin: 'center'
//   });
// });

// Navbar OPen

let openNev = document.getElementById("openNav");
openNev.addEventListener("click", openNav);
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  const fromLeft1 = document.querySelector("transition-container-2");
  let tl5 = gsap.timeline();

  tl5.set(fromLeft, {
    pointerEvents: "none",
    ease: "power4.inOut",
    paused: "true",
  });
  tl5.to(".from-left .tile", {
    duration: 0.9,
    width: "100%",
    left: "0%",
    // stagger: 0.05,
  });
  tl5.to(".from-left .tile", {
    duration: 0.9,
    width: "100%",
    left: "100%",

    stagger: 0.1,
  });
  tl5.set(fromLeft, { pointerEvents: "all" });
  tl5.set(".from-left .tile", { left: "0", width: "0" });
  tl5.play();
  const tl3 = gsap.timeline();
  tl3.from("#myNav", {
    duration: 0.9,
    x: -2000,
    ease: "power4.in",
  });
}
let closebtn = document.getElementById("closebtn");
closebtn.addEventListener("click", closeNav);
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("myNav").style.transition = "ease 2s";

  tl5.reverse(0).duration(1.5);
}

// Cursor

var $circle = $(".cursor"),
  $follow = $(".cursor-follower");

function moveCircle(e) {
  TweenLite.to($circle, 0.3, {
    x: e.clientX,
    y: e.clientY,
  });
  TweenLite.to($follow, 0.7, {
    x: e.clientX,
    y: e.clientY,
  });
}

function hoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    scale: 0,
  });
  TweenLite.to($follow, 0.3, {
    scale: 2,
  });
}

function unhoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    scale: 1,
  });
  TweenLite.to($follow, 0.3, {
    scale: 1,
  });
}

$(window).on("mousemove", moveCircle);

$("a").hover(hoverFunc, unhoverFunc);

// content

gsap.registerPlugin(ScrollTrigger);

const blocks = document.querySelectorAll(".content-section");

blocks.forEach((block) => {
  const blockTimeline = gsap
    .timeline({
      scrollTrigger: {
        trigger: block,
        start: "top center",
        end: "bottom center",
        toggleActions: "play",
        markers: false,
      },
    })
    // Animate the header items
    .from(block.querySelectorAll(".section-titles"), {
      duration: 1.5,
      y: 100,
      opacity: 0,
      stagger: 0.5,
    });

  // Animate the content items
  const items = block.querySelectorAll(".animated");
  blockTimeline.from(
    items,
    {
      duration: 1.5,
      y: 100,
      opacity: 0,
      stagger: 0.5,
    },
    0
  );
});

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* Main navigation */
let panelsSection = document.querySelector("#panels"),
  panelsContainer = document.querySelector("#panels-container"),
  tween;

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
  xPercent: -95 * (panels.length - 1),
  ease: "none",
  pointerEvents: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    pointerEvents: "none",
    start: "top top",
    scrub: 1,
    snap: {
      snapTo: 1 / (panels.length - 1),
      inertia: false,
      pointerEvents: "none",
      duration: { min: 0.1, max: 0.1 },
    },
    end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
  },
});


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

 const scroll = gsap.timeline()
scroll.from(".one",{
  scrollTrigger: {
    trigger:".one",
    start: 'top 500px', 
        end: '+=100',
    scrub: 4,
   },
    x:1200,
  color: 'green',
  start: 'top 500px', 
        end: '+=300', 
  })
.from(".one",{
  x:-1200,
  duration: 6,
})
  
scroll.from(".two",{
  scrollTrigger: {
    trigger:".two",
    start: 'top 500px', 
        end: '+=100',
    scrub: 4,
   },
    x:1200,
  color: 'green',
  start: 'top 500px', 
        end: '+=300', 
  })
.from(".two",{
  x:-1200,
  duration: 6,
})
  
scroll.from(".three",{
  scrollTrigger: {
    trigger:".three",
    start: 'top 500px', 
        end: '+=300',
    scrub: 4,
   },
    x:1500,
  color: 'green',
  start: 'top 500px', 
        end: '+=300', 
  })
  
scroll.from(".four",{
  scrollTrigger: {
    trigger:".four",
    start: 'top 500px', 
        end: '+=300',
    scrub: 4,
   },
    x:1500,
  color: 'green',
  start: 'top 500px', 
        end: '+=300', 
  })
  
scroll.from(".five",{
  scrollTrigger: {
    trigger:".five",
    start: 'top 500px', 
        end: '+=300',
    scrub: 4,
   },
    x:1500,
  color: 'green',
  start: 'top 500px', 
        end: '+=300', 
  })
  
scroll.from(".six",{
  scrollTrigger: {
    trigger:".six",
    start: 'top 500px', 
        end: '+=300',
    scrub: 4,
   },
    x:1500,
  color: 'green',
  start: 'top 500px', 
        end: '+=300', 
  })
  

