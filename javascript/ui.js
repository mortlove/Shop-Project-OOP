const basket = new Basket();
const basketUl = document.querySelector('.basket ul');
const buyBtns = [...document.querySelectorAll('[data-name]')];
const submitOrder = document.querySelector(".submitOrder");
const btnRemover = document.querySelector('.remover');

/*const lastVisit = localStorage.getItem("last-visit");
const pStorage = document.querySelector('.storage p');
pStorage.innerText = JSON.parse(lastVisit);*/
const removeItem = event => {
    const id = Number(event.target.dataset.id);
    console.log(id);
    basket.remove(id);
    createBasketLi();
}

function cleanUl() {
    basketUl.innerText = "";
    basket.clear();
    const basketTotalValue = basket.getAllValue()
    submitOrder.disabled = basketTotalValue === 0;
    submitOrder.innerText = `Make the Order!`;
    console.log(basketTotalValue);
}

function createBasketLi() {
    basketUl.innerText = "";

    for (oneProductInfo/*const {id, text}*/ of basket.getSummaryBasket()) {
        const {id, text} = oneProductInfo
        const newLi = document.createElement('li');
        newLi.innerText = text;
        newLi.addEventListener('click', removeItem);
        newLi.dataset.id = id;
        basketUl.appendChild(newLi);
        //localStorage.setItem("last-visit", JSON.stringify(basket.getSummaryBasket()));
    }

    const basketTotalValue = basket.getAllValue()
    console.log(basketTotalValue);
    submitOrder.innerText = `Submit the order due to ${basketTotalValue} PLN.`;
    submitOrder.disabled = basketTotalValue === 0;
    if (basketTotalValue === 0) {
        submitOrder.innerText = `Make the Order!`;
    }
       /*if (basketTotalValue !== null) {
        submitOrder.disabled = false;
        submitOrder.innerText = `Submit the order due to ${basketTotalValue} PLN.`;

    } else {
        submitOrder.setAttribute("style", "disabled: true")
        submitOrder.innerText = `Make the Order`;
    }*/

    /*
        if (basketTotalValue > 0) {
            submitOrder.removeAttribute("disabled");
        } else {
            submitOrder.setAttribute("disabled");
        }
     */

}

const addProduct = function (e) {
    const name = e.target.dataset.name;
    const price = Number(e.target.dataset.price);
    const newProduct = new Product(name, price);
    basket.add(newProduct);
    createBasketLi();
}

function buyAll() {
    const basketTotalValue = basket.getAllValue()
    alert(`Ordered for ${basketTotalValue}`);
    basket.clear();
    createBasketLi();
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', addProduct)
}

submitOrder.addEventListener("click", buyAll);
btnRemover.addEventListener('click', cleanUl);

