//////scroll-reveal----
var headings = document.querySelectorAll("h2");
var paras = document.querySelectorAll("p");
var images = document.querySelectorAll("img");

ScrollReveal().reveal(headings, {
  delay: 500,
  duration: 500,
});
ScrollReveal().reveal(paras, { delay: 550, duration: 550 });
ScrollReveal().reveal(images, { delay: 400, duration: 400 });
//////scroll-reveal----

//gauge

// window.feed = function (callback) {
//   var tick = {};
//   tick.plot0 = Math.ceil(350 + Math.random() * 500);
//   callback(JSON.stringify(tick));
// };

var myConfig1 = {
  type: "gauge",
  globals: {
    fontSize: 15,
  },
  plotarea: {
    marginTop: 80,
  },
  plot: {
    size: "100%",
    // valueBox: {
    //   placement: "center",
    //   text: "%v", //default
    //   fontSize: 15,
    //   rules: [
    //     {
    //       rule: "%v >= 700",
    //       text: "%v<br>EXCELLENT",
    //     },
    //     {
    //       rule: "%v < 700 && %v > 640",
    //       text: "%v<br>Good",
    //     },
    //     {
    //       rule: "%v < 640 && %v > 580",
    //       text: "%v<br>Fair",
    //     },
    //     {
    //       rule: "%v <  580",
    //       text: "%v<br>Bad",
    //     },
    //   ],
    // },
  },
  tooltip: {
    borderRadius: 5,
  },
  scaleR: {
    aperture: 180,
    minValue: 0,
    maxValue: 250,
    step: 50,
    center: {
      visible: false,
    },
    tick: {
      visible: false,
    },
    item: {
      offsetR: 100,
      rules: [
        {
          rule: "%i == 9",
          offsetX: 15,
        },
      ],
    },
    labels: ["0", "", "", "", "", "250"],
    ring: {
      size: 50,
      rules: [
        {
          rule: "%v <= 50",
          backgroundColor: "#ffd200",
        },
        {
          rule: "%v >= 50 && %v < 100",
          backgroundColor: "#ffb901",
        },
        {
          rule: "%v >= 100 && %v < 150",
          backgroundColor: "#ff9c00",
        },
        {
          rule: "%v >= 150 && %v < 200",
          backgroundColor: "#ff8601",
        },
        {
          rule: "%v >= 200",
          backgroundColor: "#ff7300",
        },
      ],
    },
  },
  refresh: {
    type: "feed",
    transport: "js",
    url: "feed()",
    interval: 1500,
    resetTimeout: 1000,
  },
  series: [
    {
      values: [0], // starting value
      backgroundColor: "black",
      indicator: [10, 0, 0, 0, 0.3],
      animation: {
        effect: 2,
        method: 1,
        sequence: 4,
        speed: 900,
      },
    },
  ],
};
var myConfig2 = {
  type: "gauge",
  globals: {
    fontSize: 15,
  },
  plotarea: {
    marginTop: 80,
  },
  plot: {
    size: "100%",
    // valueBox: {
    //   placement: "center",
    //   text: "%v", //default
    //   fontSize: 15,
    //   rules: [
    //     {
    //       rule: "%v >= 700",
    //       text: "%v<br>EXCELLENT",
    //     },
    //     {
    //       rule: "%v < 700 && %v > 640",
    //       text: "%v<br>Good",
    //     },
    //     {
    //       rule: "%v < 640 && %v > 580",
    //       text: "%v<br>Fair",
    //     },
    //     {
    //       rule: "%v <  580",
    //       text: "%v<br>Bad",
    //     },
    //   ],
    // },
  },
  tooltip: {
    borderRadius: 5,
  },
  scaleR: {
    aperture: 180,
    minValue: 250,
    maxValue: 500,
    step: 50,
    center: {
      visible: false,
    },
    tick: {
      visible: false,
    },
    item: {
      offsetR: 100,
      rules: [
        {
          rule: "%i == 9",
          offsetX: 15,
        },
      ],
    },
    labels: ["250", "", "", "", "", "500"],
    ring: {
      size: 50,
      rules: [
        {
          rule: "%v <= 300",
          backgroundColor: "#01e7ff",
        },
        {
          rule: "%v >= 300 && %v < 350",
          backgroundColor: "#00d5ff",
        },
        {
          rule: "%v >= 350 && %v < 400",
          backgroundColor: "#01beff",
        },
        {
          rule: "%v >= 400 && %v < 450",
          backgroundColor: "#00a2ff",
        },
        {
          rule: "%v >= 450",
          backgroundColor: "#0189ff",
        },
      ],
    },
  },
  refresh: {
    type: "feed",
    transport: "js",
    url: "feed()",
    interval: 1500,
    resetTimeout: 1000,
  },
  series: [
    {
      values: [0], // starting value
      backgroundColor: "black",
      indicator: [10, 0, 0, 0, 0.3],
      animation: {
        effect: 2,
        method: 1,
        sequence: 4,
        speed: 900,
      },
    },
  ],
};
var myConfig3 = {
  type: "gauge",
  globals: {
    fontSize: 15,
  },
  plotarea: {
    marginTop: 80,
  },
  plot: {
    size: "100%",
    // valueBox: {
    //   placement: "center",
    //   text: "%v", //default
    //   fontSize: 15,
    //   rules: [
    //     {
    //       rule: "%v >= 700",
    //       text: "%v<br>EXCELLENT",
    //     },
    //     {
    //       rule: "%v < 700 && %v > 640",
    //       text: "%v<br>Good",
    //     },
    //     {
    //       rule: "%v < 640 && %v > 580",
    //       text: "%v<br>Fair",
    //     },
    //     {
    //       rule: "%v <  580",
    //       text: "%v<br>Bad",
    //     },
    //   ],
    // },
  },
  tooltip: {
    borderRadius: 5,
  },
  scaleR: {
    aperture: 180,
    minValue: 500,
    maxValue: 1000,
    step: 100,
    center: {
      visible: false,
    },
    tick: {
      visible: false,
    },
    item: {
      offsetR: 0,
      rules: [
        {
          rule: "%i == 9",
          offsetX: 15,
        },
      ],
    },
    labels: ["500", "", "", "", "", "1000"],
    ring: {
      size: 50,
      rules: [
        {
          rule: "%v <= 600",
          backgroundColor: "#bcfd01",
        },
        {
          rule: "%v >= 600 && %v < 700",
          backgroundColor: "#d5fe02",
        },
        {
          rule: "%v >= 700 && %v < 800",
          backgroundColor: "#f1fe01",
        },
        {
          rule: "%v >= 800 && %v < 900",
          backgroundColor: "#fef301",
        },
        {
          rule: "%v >= 900",
          backgroundColor: "#fcdf01",
        },
      ],
    },
  },
  refresh: {
    type: "feed",
    transport: "js",
    url: "feed()",
    interval: 1500,
    resetTimeout: 1000,
  },
  series: [
    {
      values: [0], // starting value
      backgroundColor: "black",
      indicator: [10, 0, 0, 0, 0.3],
      animation: {
        effect: 2,
        method: 1,
        sequence: 4,
        speed: 900,
      },
    },
  ],
};

zingchart.render({
  id: "myChart1",
  data: myConfig1,
  height: 500,
  width: "100%",
});
zingchart.render({
  id: "myChart2",
  data: myConfig2,
  height: 500,
  width: "100%",
});
zingchart.render({
  id: "myChart3",
  data: myConfig3,
  height: 500,
  width: "100%",
});

////////////gauge//////////

/////gsap-videos//////
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.saveStyles(".container-hero div");

const powerPackVideo = document.querySelector("#power__pack__bar");
const powerPackSixVideo = document.querySelector("#power__pack__six");

const scrollVideo = (video) => {
  const videoLength = video.duration;
  const scrollPosition = document.documentElement.scrollTop;

  video.currentTime = Math.floor(
    (scrollPosition / (document.body.offsetHeight - window.innerHeight)) *
      videoLength
  );

  video.currentTime;
};

ScrollTrigger.matchMedia({
  // desktop
  "(min-width: 800px)": function () {
    // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
    // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

    ScrollTrigger.create({
      trigger: powerPackVideo,
      start: "top-=10%",
      end: "bottom 80%",
      onUpdate: () => scrollVideo(powerPackVideo),
    });

    ScrollTrigger.create({
      trigger: powerPackSixVideo,
      start: "top 80%",
      end: "bottom 80%",
      onUpdate: () => scrollVideo(powerPackSixVideo),
      // markers: true,
    });
  },
  // mobile
  "(max-width: 799px)": function () {
    // The ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore.
    powerPackVideo.autoplay = true;
    powerPackVideo.loop = true;
    powerPackSixVideo.autoplay = true;
    powerPackSixVideo.loop = true;
    powerPackVideo.load();
    powerPackSixVideo.load();
  },
});

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
