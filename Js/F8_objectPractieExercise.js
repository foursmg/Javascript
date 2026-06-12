// 1. Create Object to Represent Product from Myntra

let product = {
    name : 'Shirt',
    size :  'S',
    fit :  'Slim fit',
    'delivery-time' : 'Same Day Delivery', // 3. Use Bracket Noattaion to display the delivery time.
};


// 2. Create an Object with two references and log changes to one Object by Changing the other one

let copyProduct = product;
console.log(copyProduct);  // {name: 'Shirt', size: 'S', fit: 'Slim fit'}

copyProduct.size = 'M';
console.log(copyProduct.size);  //M
console.log(product.size);      //M   

copyProduct.fit = 'Regular';
console.log(copyProduct.fit);  //Regular
console.log(product.fit);  //Regular


// 3.
// Accesseing/displaying delivery time of product object
// console.log(product.delivery-time); // this would produce error cause deilvery has been declared in bracket notation
console.log(product['delivery-time']);  // Same Day Delivery //Right way to access bracket notation 


// 4. Given an Object {message: 'good job', status:'complete'}, use de-structuring to create two variables message and status.

let obj = {
    message: 'Good Job',
    status: 'Complete',
};

let {message, status} = obj;
console.log(obj); // {message: 'Good Job', status: 'Complete'}
console.log(message); //Good Job
console.log(status); //complete

console.log("___(isIdenticalProduct())___");


// 5. Add funtion isIdenticalProduct to compare two Product Objects.

function isIdenticalProduct(product1,product2){
    if(typeof(product1) !== 'object' || typeof(product2) !== 'object'){
        console.warn('Prameter Passed was not an Object');
        return false;
    }

    if(product1 == product2){
        return true;
    }

    if((product1.name === product2.name) &&
        (product1.size === product2.size) && 
        (product1.fit === product2.size)){
        return true;
    }else{
        return false;
    }
};


//Now Creating Products

let product1 = {
    name : 'pant',
    size : 'S',
    fit : 'Regular',
    'delivery-time': 'Same Day Delivery'
}

let product2 = product1;

let product3 = {
    name : 'pant',
    size : 'M',
    fit : 'Regular',
    'delivery-time': 'Same Day Delivery'
}

let product4 = {
    name : 'pant',
    size : 'S',
    fit : 'Regular',
    'delivery-time': 'Same Day Delivery'
}


// Now calling the isIdenticalProduct function to check if the products are same or different

console.log(isIdenticalProduct(product1,product1)); //true
console.log(isIdenticalProduct(product1,product2)); //true
console.log(isIdenticalProduct(product1,product3)); //false
console.log(isIdenticalProduct(product3,product4)); //false
console.log(isIdenticalProduct(product1,''));  // F8_objectPractieExercise.js:50 Prameter Passed was not an Object
                                               // false
console.log(isIdenticalProduct(product1,87)); // F8_objectPractieExercise.js:50 Prameter Passed was not an Object
                                               // false                                              