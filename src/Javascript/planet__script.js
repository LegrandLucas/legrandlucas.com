const homePlanet = document.getElementById('homePlanet');
const planetsPlanet = document.getElementById('planetsPlanet');
const bookingPlanet = document.getElementById('bookingPlanet');

const imgPlanet1 = document.getElementById('planet__img__1');
const imgPlanet2 = document.getElementById('planet__img__2');
const imgPlanet3 = document.getElementById('planet__img__3');


const urlPlanet1 = document.getElementById('planet__url__1');
const urlPlanet2 = document.getElementById('planet__url__2');
const urlPlanet3 = document.getElementById('planet__url__3');



homePlanet.addEventListener('click', () => {
  homePlanet.classList.add('active__tab');
  planetsPlanet.classList.remove('active__tab');
  bookingPlanet.classList.remove('active__tab');

  imgPlanet1.style.display = 'block';
  imgPlanet2.style.display = 'none';
  imgPlanet3.style.display = 'none';

  urlPlanet1.style.display = 'block';
  urlPlanet2.style.display = 'none';
  urlPlanet3.style.display = 'none';
});

planetsPlanet.addEventListener('click', () => {
  homePlanet.classList.remove('active__tab');
  planetsPlanet.classList.add('active__tab');
  bookingPlanet.classList.remove('active__tab');

  imgPlanet1.style.display = 'none';
  imgPlanet2.style.display = 'block';
  imgPlanet3.style.display = 'none';

  urlPlanet1.style.display = 'none';
  urlPlanet2.style.display = 'block';
  urlPlanet3.style.display = 'none';
});

bookingPlanet.addEventListener('click', () => {
  homePlanet.classList.remove('active__tab');
  planetsPlanet.classList.remove('active__tab');
  bookingPlanet.classList.add('active__tab');

  imgPlanet1.style.display = 'none';
  imgPlanet2.style.display = 'none';
  imgPlanet3.style.display = 'block';

  urlPlanet1.style.display = 'none';
  urlPlanet2.style.display = 'none';
  urlPlanet3.style.display = 'block';
});
