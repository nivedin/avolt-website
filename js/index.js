//////scroll-reveal----
var headings = document.querySelectorAll("h2");
var paras = document.querySelectorAll("p");
var images = document.querySelectorAll("img");

ScrollReveal().reveal(headings, {
  delay: 500,
  duration: 500,
});
ScrollReveal().reveal(paras, { delay: 250, duration: 150 });
ScrollReveal().reveal(images, {
  scale: 0.85,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  delay: 400,
  duration: 500,
});
//////scroll-reveal----

//////gauge/////////

function init__gauge(data) {
  console.log("data", data);

  opts = {
    angle: 0,
    lineWidth: 0.35,
    radiusScale: 1.1,
    pointer: {
      length: 0.41, // // Relative to gauge radius
      strokeWidth: 0.04,
      color: "#000000",
    },
    staticZones: data.staticZones,
    limitMax: false,
    limitMin: false,
    colorStart: "#6FADCF",
    colorStop: "#8FC0DA",
    strokeColor: "#E0E0E0",
    generateGradient: true,
    highDpiSupport: true,
  };

  const target = document.getElementById("myChart" + data.id);

  const gauge = new Gauge(target).setOptions(opts);

  gauge.maxValue = data.maxValue;
  gauge.setMinValue(data.minValue);
  gauge.animationSpeed = 52;
  gauge.set(data.value);

  const chartValue = document.getElementById("mychartValue" + data.id);
  gauge.setTextField(chartValue);

  const gaugeMinValue = document.getElementById("minValue" + data.id);
  const gaugeMaxValue = document.getElementById("maxValue" + data.id);

  gaugeMinValue.innerHTML = data.minValue;
  gaugeMaxValue.innerHTML = data.maxValue;
}

data = {
  gauge1: {
    id: "1",
    minValue: 0,
    maxValue: 250,
    value: Math.floor(Math.random() * 250), //gauge current value
    staticZones: [
      { strokeStyle: "#ffd200", min: 0, max: 50 },
      { strokeStyle: "#ffb901", min: 50, max: 100 },
      { strokeStyle: "#ff9c00", min: 100, max: 150 },
      { strokeStyle: "#ff8601", min: 150, max: 200 },
      { strokeStyle: "#ff7300", min: 200, max: 250 },
    ],
  },
  gauge2: {
    id: "2",
    minValue: 250,
    maxValue: 500,
    value: Math.floor(Math.random() * 250) + 250, //gauge current value
    staticZones: [
      { strokeStyle: "#01e7ff", min: 250, max: 300 },
      { strokeStyle: "#00d5ff", min: 300, max: 350 },
      { strokeStyle: "#01beff", min: 350, max: 400 },
      { strokeStyle: "#00a2ff", min: 400, max: 450 },
      { strokeStyle: "#0189ff", min: 450, max: 500 },
    ],
  },
  gauge3: {
    id: "3",
    minValue: 500,
    maxValue: 1000,
    value: Math.floor(Math.random() * 500) + 500, //gauge current value
    staticZones: [
      { strokeStyle: "#bcfd01", min: 500, max: 600 },
      { strokeStyle: "#d5fe02", min: 600, max: 700 },
      { strokeStyle: "#f1fe01", min: 700, max: 800 },
      { strokeStyle: "#fef301", min: 800, max: 900 },
      { strokeStyle: "#fcdf01", min: 900, max: 1000 },
    ],
  },
};

init__gauge(data["gauge1"]);
init__gauge(data["gauge2"]);
init__gauge(data["gauge3"]);

//////gauge/////////
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.saveStyles(".container-hero div");

const powerPackVideo = document.querySelector("#power__pack__bar");
const powerPackSixVideo = document.querySelector("#power__pack__six");

// const scrollVideo = (video) => {
//   const videoLength = video.duration;
//   const scrollPosition = document.documentElement.scrollTop;

//   video.currentTime = Math.floor(
//     (scrollPosition / (document.body.offsetHeight - window.innerHeight)) *
//       videoLength
//   );

//   video.currentTime;
// };

// ScrollTrigger.matchMedia({
//   // desktop
//   "(min-width: 800px)": function () {
//     // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
//     // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

//     ScrollTrigger.create({
//       trigger: powerPackVideo,
//       start: "top-=10%",
//       end: "bottom 80%",
//       onUpdate: () => scrollVideo(powerPackVideo),
//     });

//     ScrollTrigger.create({
//       trigger: powerPackSixVideo,
//       start: "top 80%",
//       end: "bottom 80%",
//       onUpdate: () => scrollVideo(powerPackSixVideo),
//       // markers: true,
//     });
//   },
//   // mobile
//   "(max-width: 799px)": function () {
//     // The ScrollTriggers created inside these functions are segregated and get
//     // reverted/killed when the media query doesn't match anymore.
//     powerPackVideo.autoplay = true;
//     powerPackVideo.loop = true;
//     powerPackSixVideo.autoplay = true;
//     powerPackSixVideo.loop = true;
//     powerPackVideo.load();
//     powerPackSixVideo.load();
//   },
// });

powerPackVideo.autoplay = true;
powerPackVideo.loop = true;
powerPackSixVideo.autoplay = true;
powerPackSixVideo.loop = true;
powerPackVideo.load();
powerPackSixVideo.load();

////////////gsap-videos///////////

//////gsap-abotus-animation//////
const aboutUsImage = document.querySelector(".about__image img");

ScrollTrigger.matchMedia({
  // desktop
  "(min-width: 800px)": function () {
    ScrollTrigger.create({
      trigger: aboutUsImage,
      start: "top 80%",
      end: "bottom 80%",
      scrub: true,
      animation: gsap.fromTo(
        aboutUsImage,
        { x: "100%", rotate: 180 },
        { x: "0%", rotate: 0, duration: 2 }
      ),
    });
  },
});
//////gsap-abotus-animation//////

/////form/////

const form = document.querySelector("form");
const formSuccessPopup = document.querySelector(".form__success__popup ");
const formSuccessPopupClose = document.querySelector(
  ".form__success__popup .popup__close "
);

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const mobile = document.querySelector("#mobile");

$(form).on("submit", function (e) {
  e.preventDefault();

  var dataString = $(form).serialize();

  $.ajax({
    type: "POST",
    url: "bin/form.php",
    data: dataString,
    success: function (data) {
      console.log("sucess", data);
      formSuccessPopup.classList.remove("hide");
      form.reset();
    },
    error: function (data) {
      console.log("error", data, dataString);
      formSuccessPopup.classList.remove("hide");
      form.reset();
    },
  });
});

formSuccessPopupClose.addEventListener("click", () => {
  formSuccessPopup.classList.add("hide");
});
/////form/////
