const homeEden = document.getElementById('homeEden');
const bookingEden = document.getElementById('bookingEden');
const mapEden = document.getElementById('mapEden');

const imgEden1 = document.getElementById('eden__img__1');
const imgEden2 = document.getElementById('eden__img__2');
const imgEden3 = document.getElementById('eden__img__3');

const urlEden1 = document.getElementById('eden__url__1');
const urlEden2 = document.getElementById('eden__url__2');
const urlEden3 = document.getElementById('eden__url__3');



homeEden.addEventListener('click', () => {
  homeEden.classList.add('active__tab');
  bookingEden.classList.remove('active__tab');
  mapEden.classList.remove('active__tab');

  imgEden1.style.display = 'block';
  imgEden2.style.display = 'none';
  imgEden3.style.display = 'none';

  urlEden1.style.display = 'block';
  urlEden2.style.display = 'none';
  urlEden3.style.display = 'none';
});

bookingEden.addEventListener('click', () => {
  homeEden.classList.remove('active__tab');
  bookingEden.classList.add('active__tab');
  mapEden.classList.remove('active__tab');

  imgEden1.style.display = 'none';
  imgEden2.style.display = 'block';
  imgEden3.style.display = 'none';

  urlEden1.style.display = 'none';
  urlEden2.style.display = 'block';
  urlEden3.style.display = 'none';
});

mapEden.addEventListener('click', () => {
  homeEden.classList.remove('active__tab');
  bookingEden.classList.remove('active__tab');
  mapEden.classList.add('active__tab');

  imgEden1.style.display = 'none';
  imgEden2.style.display = 'none';
  imgEden3.style.display = 'block';

  urlEden1.style.display = 'none';
  urlEden2.style.display = 'none';
  urlEden3.style.display = 'block';
});
