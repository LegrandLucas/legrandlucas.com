// eslint-disable-next-line no-undef

// document.addEventListener('DOMContentLoaded', () => {
//   const waypoint = new Waypoint({
//     element: document.querySelector('#contact__waypoint'),
//     handler() {
//       anime({
//         targets: '.contact__element',
//         translateY: [-400, 0],
//         easing: 'easeOutExpo',
//         delay: 1000,
//         duration: 3000,
//         opacity: [0, 1],
//       });
//     },
//     offset: '100%',
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-unused-expressions
  anime({
    targets: '.turn__signal',
    opacity: 0.1,
    duration: 3000,
    loop: true,
  }),

  anime({
    targets: '.moving__square',
    opacity: [0, 1],
    keyframes: [
      { translateX: 300 },
      { translateX: 0 },
    ],
    duration: 3000,
    easing: 'easeInOutCirc',
    loop: true,
  }),

  anime({
    targets: ['.menu', '.contact__element'],
    translateY: [-400, 0],
    easing: 'easeOutExpo',
    delay: 1000,
    duration: 3000,
    opacity: [0, 1],
  }),

  anime({
    targets: '.say-hi__emoji',
    rotate: '1turn',
    duration: 3000,
  }),

  anime({
    targets: '.moving__arrow__right',
    keyframes: [
      { translateX: -100 },
      { translateX: 0 },
    ],
    duration: 3000,
    easing: 'easeInBounce',
    loop: true,
  });

  anime({
    targets: '.moving__arrow__left',
    keyframes: [
      { translateX: 100 },
      { translateX: 0 },
    ],
    duration: 3000,
    easing: 'easeInBounce',
    loop: true,
  });

  const Waycontact = new Waypoint({
    element: document.querySelector('#contact__waypoint'),
    handler() {
      anime({
        targets: '.contact__element',
        translateY: [-400, 0],
        easing: 'easeOutExpo',
        delay: 1000,
        duration: 3000,
        opacity: [0, 1],
      });
    },
    offset: '100%',
  });

  const WayBye = new Waypoint({
    element: document.querySelector('#contact__waypoint'),
    handler() {
      anime({
        targets: ['.wkit', '.thankyou'],
        translateX: [-400, 0],
        easing: 'easeOutExpo',
        delay: 2000,
        duration: 3000,
        opacity: [0, 1],
      });
    },
    offset: '100%',
  });

  const WaySquarePlanet = new Waypoint({
    element: document.querySelector('#planet__invaders'),
    handler() {
      anime({
        targets: '.moving__square__planet',
        keyframes: [
          { translateY: 50 },
        ],
        duration: 1200,
        easing: 'easeOutBounce',
      });
    },
  });

  const WaySquareWhisp = new Waypoint({
    element: document.querySelector('#whisp'),
    handler() {
      anime({
        targets: '.moving__square__whisp',
        keyframes: [
          { translateY: 50 },
        ],
        duration: 1200,
        easing: 'easeOutBounce',
      });
    },
  });
  const WaySquareEden = new Waypoint({
    element: document.querySelector('#eden__garden'),
    handler() {
      anime({
        targets: '.moving__square__eden',
        keyframes: [
          { translateY: 50 },
        ],
        duration: 1200,
        easing: 'easeOutBounce',
      });
    },
  });
});
