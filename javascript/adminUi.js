const form = document.querySelector('form');
const inputName = document.querySelector('[name="name"]');
const inputPrice = document.querySelector('[name="price"]');
const shopUl = document.querySelector('.shopUl');
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


    newLi.appendChild(newStrong);
    newLi.appendChild(newPriceText);

    shopUl.appendChild(newLi);
    console.log(shopUl.childNodes[0].value);
    console.log(shopUl.childNodes[1].value);
    console.log(shopUl.childNodes[2].value);


};

form.addEventListener('submit', addProductToShop);



