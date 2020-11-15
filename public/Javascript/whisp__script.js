const homeWhisp = document.getElementById('homeWhisp');
const profileWhisp = document.getElementById('profileWhisp');
const sportsWhisp = document.getElementById('sportsWhisp');

const imgwhisp1 = document.getElementById('whisp__img__1');
const imgwhisp2 = document.getElementById('whisp__img__2');
const imgwhisp3 = document.getElementById('whisp__img__3');


const urlwhisp1 = document.getElementById('whisp__url__1');
const urlwhisp2 = document.getElementById('whisp__url__2');
const urlwhisp3 = document.getElementById('whisp__url__3');



homeWhisp.addEventListener('click', () => {
  homeWhisp.classList.add('active__tab');
  profileWhisp.classList.remove('active__tab');
  sportsWhisp.classList.remove('active__tab');

  imgwhisp1.style.display = 'block';
  imgwhisp2.style.display = 'none';
  imgwhisp3.style.display = 'none';

  urlwhisp1.style.display = 'block';
  urlwhisp2.style.display = 'none';
  urlwhisp3.style.display = 'none';
});

profileWhisp.addEventListener('click', () => {
  homeWhisp.classList.remove('active__tab');
  profileWhisp.classList.add('active__tab');
  sportsWhisp.classList.remove('active__tab');

  imgwhisp1.style.display = 'none';
  imgwhisp2.style.display = 'block';
  imgwhisp3.style.display = 'none';

  urlwhisp1.style.display = 'none';
  urlwhisp2.style.display = 'block';
  urlwhisp3.style.display = 'none';
});

sportsWhisp.addEventListener('click', () => {
  homeWhisp.classList.remove('active__tab');
  profileWhisp.classList.remove('active__tab');
  sportsWhisp.classList.add('active__tab');

  imgwhisp1.style.display = 'none';
  imgwhisp2.style.display = 'none';
  imgwhisp3.style.display = 'block';

  urlwhisp1.style.display = 'none';
  urlwhisp2.style.display = 'none';
  urlwhisp3.style.display = 'block';
});
