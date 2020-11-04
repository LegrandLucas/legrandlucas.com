document.addEventListener('DOMContentLoaded', () => {

  anime({
    targets: '.turn__signal',
    opacity: .1,
    duration: 3000,
    loop: true
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
    loop: true
  }),

    anime({
      targets: '.moving__square__2',
      keyframes: [
        { translateY: 50 },
      ],
      duration: 2000,
      easing: 'easeOutBounce',
    }),

  anime({
      targets: '.menu',
      translateY: [-400, 0],
      easing: 'easeOutExpo',
      delay: 1000,
      duration: 3000,
      opacity: [0, 1]
    }),

  anime({
    targets: '.say-hi__emoji',
    // translateY: [-400, 0],
    rotate: '1turn',
    duration: 3000,
  })

  anime({
    targets: '.contact__element',
    duration: 1500,
  });
});


// document.addEventListener('.menu', ('click') => {
//   anime({
//     targets: '.menu',
//     translateY: [- 400, 0],
//     easing: 'easeOutExpo',
//     duration: 4000,
//     opacity: [0, 1]
//   }),
// });
