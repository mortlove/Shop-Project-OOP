class Basket {
    constructor() {
        this.items = this.loadFromLocalStorage();

    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage();
    }

    clear() {
        this.items.splice(0);
        this.saveToLocalStorage();
        //this.items = []; wszytkie czyszcza ale tutaj tworzymy nowa tablice
        //this.items.length = 0;
    }

    getAllValue() {
        return this.items.reduce((prev, curr) => {
            let acc = Number(prev);
            let current = acc + curr.price;
            current = current.toFixed(2);
            current = Number(current);
            return current;

        }, 0);
    }

    getSummaryBasket() {
        return this.items
            .map((product, i) => {
                return {
                    id: i + 1,
                    text: `${i + 1}. ${product.name} - ${product.price.toFixed(2)} zł.`,
                }
            })
        //.forEach(newBasket => console.log(newBasket));

    }

    remove(no) {
        this.items.splice(no - 1, 1);
        this.saveToLocalStorage();
    }


    saveToLocalStorage() {
        localStorage.setItem('basket-items', JSON.stringify(this.items));

    }

    loadFromLocalStorage() {
        const itemsJson = localStorage.getItem('basket-items');

        if (itemsJson === null) {
            return [];
        } else {
            return JSON.parse(itemsJson);
        }
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
