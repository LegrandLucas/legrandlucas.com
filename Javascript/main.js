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
      targets: '.menu',
      translateY: [-400, 0],
      duration: 4000,
      opacity: [0, 1]
    }),

  anime({
    targets: '.say-hi__emoji',
    // translateY: [-400, 0],
    rotate: '1turn',
    duration: 4000,
  })
})
