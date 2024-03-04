function getValueById(elementId){
    const elementString = document.getElementById(elementId);
    const element = elementString.value;
    elementString.value = '';
    return element;
}

function addProduct (){
    const productName = getValueById('product-name');
    const productQuantity = getValueById('product-quantity');
    
    displayProduct(productName, productQuantity);
    console.log(productName, productQuantity);

    saveProductToLocalStorage(productName, productQuantity);
}

const displayProduct =(product, quantity )=>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText=`${product} ${quantity}`;
    productContainer.appendChild(li);
}
const getStoredShoppingCart = ()=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage =(product, quantity )=>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const displayProductFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    for (const product in savedCart) {
        const productValue = savedCart[product];
        console.log(product, productValue);
        displayProduct(product, productValue);
    }
}
displayProductFromLocalStorage();