const homePizza = document.getElementById('homePizza');
const allPizza = document.getElementById('allPizza');
const orderPizza = document.getElementById('orderPizza');

const imgPizza1 = document.getElementById('pizza__img__1');
const imgPizza2 = document.getElementById('pizza__img__2');
const imgPizza3 = document.getElementById('pizza__img__3');

const urlPizza1 = document.getElementById('pizza__url__1');
const urlPizza2 = document.getElementById('pizza__url__2');
const urlPizza3 = document.getElementById('pizza__url__3');

homePizza.addEventListener('click', () => {
  homePizza.classList.add('active__tab');
  allPizza.classList.remove('active__tab');
  orderPizza.classList.remove('active__tab');

  imgPizza1.style.display = 'block';
  imgPizza2.style.display = 'none';
  imgPizza3.style.display = 'none';

  urlPizza1.style.display = 'block';
  urlPizza2.style.display = 'none';
  urlPizza3.style.display = 'none';
});

allPizza.addEventListener('click', () => {
  homePizza.classList.remove('active__tab');
  allPizza.classList.add('active__tab');
  orderPizza.classList.remove('active__tab');

  imgPizza1.style.display = 'none';
  imgPizza2.style.display = 'block';
  imgPizza3.style.display = 'none';

  urlPizza1.style.display = 'none';
  urlPizza2.style.display = 'block';
  urlPizza3.style.display = 'none';
});

orderPizza.addEventListener('click', () => {
  homePizza.classList.remove('active__tab');
  allPizza.classList.remove('active__tab');
  orderPizza.classList.add('active__tab');

  imgPizza1.style.display = 'none';
  imgPizza2.style.display = 'none';
  imgPizza3.style.display = 'block';

  urlPizza1.style.display = 'none';
  urlPizza2.style.display = 'none';
  urlPizza3.style.display = 'block';
});
