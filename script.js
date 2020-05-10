const query = (element) => document.querySelector(element);
const queryAll = (element) => document.querySelectorAll(element);

pizzaJson.map((item, index) => {
  let pizzaItem = query('.models .pizza-item').cloneNode(true);

  pizzaItem.setAttribute('data-key', index);
  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
  pizzaItem.querySelector('a').addEventListener('click', (e)=> {
    e.preventDefault();
    let key = e.target.closest('.pizza-item').getAttribute('data-key');

    query('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    query('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
    query('.pizzaBig img').src = pizzaJson[key].img;

    query('.pizzaWindowArea').style.opacity = 0;
    query('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
      query('.pizzaWindowArea').style.opacity = 1;
    }, 200)
  })
  query('.pizza-area').append( pizzaItem );
});


