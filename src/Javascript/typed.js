// const { default: Typed } = require("typed.js");

const lat = new Typed('.coordonates', {
  strings: ["50.6310623 3.0121411"],
  typeSpeed: 100,
});

const introText = new Typed('.intro__text', {
  strings: ["I'm a frontend developper turning code into beautiful websites. Love hiking, eating and making burgers."],
  typeSpeed: 30,
});


const wkit = new Waypoint({
  element: document.querySelector('#contact__waypoint'),
  handler() {
    const wkit = new Typed('.wkit', {
      strings: ["WE KEEP IN TOUCH."],
      typeSpeed: 30,
    });
  },
});

const thankyou = new Waypoint({
  element: document.querySelector('#contact__waypoint'),
  handler() {
    const thankYou = new Typed('.thankYou', {
      strings: ["THANK YOU FOR YOUR TIME."],
      typeSpeed: 30,
    });
  },
});
