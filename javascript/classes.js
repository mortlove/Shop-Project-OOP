class Basket {
    constructor() {
        this.items = [];

    }

    add(item) {
        this.items.push(item);

    }

    getAllValue() {
        return this.items.reduce((prev, curr) => {
            let acc = Number(prev);
            let current = acc + curr.price;
            current = current.toFixed(2);
            current = Number(current);
            return current;

        },0);
    }

    showBasket() {
        this.items
            .map((product ,i)=> {
                return `${i + 1}. ${product.name} - ${product.price.toFixed(2)} zł.`;
            })
            .forEach(basket => console.log(basket))
    }

    remove(no) {
        this.items.splice(no - 1, 1);
    }
}

class Product {
    constructor(producteName, productePrice) {
        this.name = producteName;
        this.price = productePrice;
    }

    setNewPrice(newPrice) {
        this.price = newPrice;
    }
}
/*
const shopBasket = new Basket();

const oranges = new Product("Pomarańcze LUZ", 7.55);
const cucumbers = new Product("Ogórek duży", 8.2);
const pizza = new Product("Pizza Hawajska, Mrożona", 12.47)

console.log(shopBasket.getAllValue());

shopBasket.add(cucumbers);
shopBasket.add(oranges);
shopBasket.add(pizza);

shopBasket.add(pizza);
shopBasket.add(pizza);

shopBasket.showBasket();

console.log(shopBasket.getAllValue());
*/
