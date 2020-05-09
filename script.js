pizzaJson.map((item, index) => {
  let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
  //preencher as informações em pizzaitem

  document.querySelector('.pizza-area').append( pizzaItem );
});