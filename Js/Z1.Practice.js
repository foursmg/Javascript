let value =0;
function updateBag(){
    document.getElementById('nCartItem').innerHTML = `Your Bag has ${value} items`
}
function cart(){
    value++;
    updateBag();
}
function wishlist(){
    if(value>0){
        value--;
    }
    updateBag();
}
function item2(){
    value += 2;
    updateBag();
}








/*
let value= 0;
function cart(){
    value++; 
    document.getElementById('nCartItem').innerHTML = `Your Bag has ${value} items`;
}
function wishlist(){
    value--;
    if(value>=0){
        document.getElementById('nCartItem').innerHTML = `Your Bag has ${value} items`;
    }else{
        value=0;
    }  
}
function item2(){
    value +=2;
    document.getElementById('nCartItem').innerHTML = `Your Bag has ${value} items`;
}
    

<div><button id="cart" onclick="cart()">Add to Cart</button>
<button id="wishlist" onclick="wishlist()">Move To Wishlist</button>
<button id="item2" onclick="item2()">Add 1+1 sale item</button></div>
<p id="nCartItem" style="font-size:30px";>Your Bag Has 0 items</p>
<script src="/Js/Z1.Practice.js"></script>






*/