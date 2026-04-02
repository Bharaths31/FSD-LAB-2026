const shopping_cart_items = [
    {
        "id": 1,
        "name": "Cat food",
        "price": 140,
        "quantity": 1
    }
    ,{
        "id": 2,
        "name": "Dog food",
        "price": 200,
        "quantity": 2
    }
    ,{
        "id": 3,
        "name": "Fish food",
        "price": 50,
        "quantity": 3
    }
    ,{
        "id": 4,
        "name": "Bird food",
        "price": 30,
        "quantity": 4
    }
    ,{
        "id": 5,
        "name": "Book",
        "price": 1000,
        "quantity": 4
    }
    ,{
        "id": 6,
        "name": "Toy",
        "price": 50,
        "quantity": 2
    }
    ,{
        "id": 7,
        "name": "pencil",
        "price": 100,
        "quantity": 10
    }
];

console.log("Shopping cart items:");
console.table(shopping_cart_items);

function calculateTotal(cartItems) {
    let total = 0;
    for (const item of cartItems) {
        total += item.price * item.quantity;
    }
    return total;
}

console.log("Total cost: Rs. " + calculateTotal(shopping_cart_items));