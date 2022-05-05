const form = document.querySelector('form');
const inputName = document.querySelector('[name="name"]');
const inputPrice = document.querySelector('[name="price"]');
const shopUl = document.querySelector('.shopUl');
//const inputBtn = document.querySelector('[name="subBtn"]');
console.log(shopUl);
const addProductToShop = (e) => {
    e.preventDefault();
    //console.log(e.target.elements['name'].value);
    const name = inputName.value;
    const price = Number(inputPrice.value);

    const newLi = document.createElement('li');
    const newStrong = document.querySelector('strong');
    newStrong.innerText = name;

    const newPriceText = document.createTextNode(` ${price.toFixed(2)}`);


    newLi.appendChild(newStrong);
    newLi.appendChild(newPriceText);

    shopUl.appendChild(newLi);

};

form.addEventListener('submit', addProductToShop);



