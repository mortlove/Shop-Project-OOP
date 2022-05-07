const form = document.querySelector('form');
const inputName = document.querySelector('[name="name"]');
const inputPrice = document.querySelector('[name="price"]');
const shopUl = document.querySelector('.products ul');
//const inputBtn = document.querySelector('[name="subBtn"]');

const addProductToShop = (e) => {
    e.preventDefault();
    //console.log(e.target.elements['name'].value);
    const name = inputName.value;
    const price = Number(inputPrice.value);

    const newLi = document.createElement('li');
    const newStrong = document.createElement('strong');
    newStrong.innerText = name;

    const newPriceText = document.createTextNode(` ${price.toFixed(2)}`);
    const newBtn = document.createElement('button');
    newBtn.classList.add('btn-buy-product');
    newBtn.dataset.name = name;
    newBtn.dataset.price = price.toFixed(2);
    newBtn.innerText = "Buy";

    newLi.appendChild(newStrong);
    newLi.appendChild(newPriceText);
    newLi.appendChild(newBtn);

    shopUl.appendChild(newLi);

    newBtn.addEventListener('click', addProduct);
  };

form.addEventListener('submit', addProductToShop);



