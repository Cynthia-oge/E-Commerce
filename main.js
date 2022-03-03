function openSideMenu(){
    document.getElementById('side-menu').style.width = '100%';
    document.getElementById('main').style.marginLeft = '250px';
}

function closeSideMenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}

document.getElementById('cart-bttn').addEventListener("click", function(){
    document.querySelector('#form-bg').style.display = 'flex';
})

document.getElementById('close').addEventListener("click", function(){
    document.querySelector('#form-bg').style.display = 'none';
})

// var btn = document.getElementById("add-to");
    // var changeText = function(){
    //     if(btn.innerText=="ADD TO CART"){
    //    btn.innerText="REMOVE FROM CART";
    //   }
    // else{
    //   btn.innerText="ADD TO CART";
    //   }
    // }
  
//    var changeText = function(event) {
    //    if(!clicked){
    //        clicked = true;
    //        btn.innerHTML = 'REMOVE FROM CART'
    //    }else{
    //        clicked = false;
    //        btn.innerHTML = 'REMOVE FROM CART';
    //    }
    // var counter = 0;
    // var increment = document.querySelector('.counter');
    // var btn = document.querySelectorAll('.add-to');
    //     var text = event.textContent || event.innertText;
    //     if(text == 'ADD TO CART'){
    //         event.innerHTML = 'REMOVE FROM CART';
    //         counter ++;
    //         increment.innerHTML = counter;
    //     }else{
    //         event.innerHTML = 'ADD TO CART';
    //         counter --;
    //         increment.innerHTML = counter;
    //     }
//    }

  let products = [{
    index: 1,
    tag: 'p1',
    name: 'Samsung TV',
    price: 500000,
    inCart: 0
},
{
    index: 2,
    tag: 'p2',
    name: 'Pixel 4a',
    price: 250000,
    inCart: 0
},
{
    index: 3,
    tag: 'p3',
    name: 'PS 5',
    price: 300000,
    inCart: 0
},
{
    index: 4,
    tag: 'p4',
    name: 'MacBook Air',
    price: 800000,
    inCart: 0
},
{
    index: 5,
    tag: 'p5',
    name: 'Apple Watch',
    price: 95000,
    inCart: 0
},
{
    index: 6,
    tag: 'p6',
    name: 'Air Pods',
    price: 75000,
    inCart: 0
}

];


   let carts = document.querySelectorAll('.add-to');
   for (let i = 0; i < carts.length; i++) {
       carts[i].addEventListener('click', () =>{
           cartNumbers(products[i]);
           totalCost(products[i]);
        //    changeText()
       })
    }
       function onLoadCartNumber() {
        let productNumbers = localStorage.getItem('cartNumbers');

        if (productNumbers) {
            document.querySelector('.counter').textContent = productNumbers;
        }
       }

       function cartNumbers(product){
           let productNumbers = localStorage.getItem('cartNumbers');
           
           productNumbers = parseInt(productNumbers);
           if (productNumbers) {
            localStorage.setItem('cartNumbers', productNumbers + 1)
            document.querySelector('.counter').textContent = productNumbers + 1;
           } else {
            localStorage.setItem('cartNumbers', 1)
            document.querySelector('.counter').textContent = 1;
           }
           setItems(product) 
       }
       function setItems(product){
        
           let cartItems = localStorage.getItem('ProductsInCart');
           cartItems = JSON.parse(cartItems);
         
     if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
                    cartItems = {
                       ...cartItems,
                        [product.tag] : product
                   }  
                  }
         cartItems[product.tag].inCart += 1;
         
     } else {
        product.inCart = 1;
          
          cartItems = {
            [product.tag] : product
     }  
     }
     
    
          console.log("my cartItems are ", cartItems);
        localStorage.setItem("productsInCart", JSON.stringify (cartItems));
        }
   
       function totalCost(product){
           let cartCost = localStorage.getItem('totalCost');
           
           if (cartCost != null) {
            cartCost = parseInt(cartCost)
               localStorage.setItem("totalCost", cartCost + product.price)
           }else{
            localStorage.setItem("totalCost", product.price )
           }
           console.log("the product is " + product.price);
           localStorage.setItem("totalCost", product.price )
       }

   onLoadCartNumber()