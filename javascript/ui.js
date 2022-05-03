const basket = new Basket();
const basketUl = document.querySelector('.basket ul');

const buyBtns = [...document.querySelectorAll('[data-name]')]

function createBasketLi() {
    basketUl.innerText = "";
    for (const oneProductInfo of basket.getSummaryBasket()) {
        const newLi = document.createElement('li');
        newLi.innerText = oneProductInfo;
        basketUl.appendChild(newLi);
    }
}

const addProduct = function (e) {
    const name = e.target.dataset.name;
    const price = Number(e.target.dataset.price);

    const newProduct = new Product(name, price);
    basket.add(newProduct);
    console.log(basket.getSummaryBasket());
    createBasketLi();

}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', addProduct)
}

