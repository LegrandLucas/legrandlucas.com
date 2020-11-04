// /* eslint-disable no-undef */
// const { body } = document;

// const title = document.querySelector('.project__background');
// // scroll 140

// const classTest = 'class-test';

// // window.addEventListener('scroll', () => {
// //   const currentScroll = window.pageYOffset;
// //   if (currentScroll >= 500) {
// //     const move = currentScroll / 20;
// //     console.log(move);
// //     // title.classList.add(classTest);
// //     title.translate((currentScroll / 20), 70);
// //   } else {
// //     title.classList.remove(classTest);
// //   }

// //   // if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
// //   //   // down
// //   //   body.classList.remove(scrollUp);
// //   //   body.classList.add(scrollDown);
// //   // } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
// //   //   // up
// //   //   body.classList.remove(scrollDown);
// //   //   body.classList.add(scrollUp);
// //   // }
// //   // lastScroll = currentScroll;
// // });

// // function getScrollY() {
// //   let currentY = 0;

// //   if (typeof (window.pageYOffset) === 'number') {
// //     currentY = window.pageYOffset;
// //   } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
// //     currentY = document.body.scrollTop;
// //   } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
// //     currentY = document.documentElement.scrollTop;
// //   }
// //   return currentY;
// // }

// // setTransform = (element, elTransformArg) => {
// //   const transformString = (`translateY(${elTransformArg.toString()}px`);
// //   console.log(transformString, element, elTransformArg);
// //   // now attach that variable to each prefixed style
// //   element.style.webkitTransform = transformString;
// //   element.style.MozTransform = transformString;
// //   element.style.msTransform = transformString;
// //   element.style.OTransform = transformString;
// //   element.style.transform = transformString;
// // };

// setMove = () => {
//   window.addEventListener('scroll', () => {
//     const currentScroll = window.pageYOffset;
//     let move = currentScroll / 20;
//     title.css({ transform: 'translateY(' + move + '%)' });
//     // console.log(move)
//     // return move;
//   });

// };


// console.log(setMove());
// // setTransform(title, move);

