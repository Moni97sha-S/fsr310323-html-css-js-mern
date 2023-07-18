//! 2nd
$(document).ready(function () {
    let n = window.localStorage.getItem('cartNumber');
    console.log(n)
    let cartItems = window.localStorage.getItem('cartItems');

    if(n != null){
        $("#cartCount").html(n);
    } else {
        $("#cartCount").html("0");
    }

    function productCard(obj) {
        // Creation
        let  prodCheckoutContainer = $("<div>").addClass("prodCheckoutContainer");
        let  imageLeftBlock = $("<div>").addClass("imageLeftBlock");
        let  leftProdImg = $("<img>").attr("src", obj.preview);
        let  rightDetails = $("<div>").addClass("rightDetails");
        let  rightHeading = $("<h4>").addClass("rightHead").html(obj.name);
        let  rightProdCount = $("<p>")
        .addClass("rightProdCount")
        .html("x" + obj.count);
        let  rightProdPrice = $("<p>")
        .addClass("rightProdPrice")
        .html("Amount: Rs " + parseInt(obj.price) * obj.count);

        // Adding
        imageLeftBlock.append(leftProdImg);
        rightDetails.append(rightHeading);
        rightDetails.append(rightProdCount);
        rightDetails.append(rightProdPrice);
        
        prodCheckoutContainer.append(imageLeftBlock);
        prodCheckoutContainer.append(rightDetails);
        return prodCheckoutContainer;
    }
    // checking is cart Empty
    cartItems = cartItems !== null || cartItems !== "" ? cartItems : []; 
    cartItems = n > 0 ? [...JSON.parse(cartItems)] : [];
    console.log(`checkout-data: ${cartItems}`);
    console.log(typeof cartItems);
    console.log(cartItems);
    /*const output = Object.values(cartItems.reduce((a, c) => {
        a[c.id] = a[c.id] ? {id: c.id, count: ++a[c.id].count} : {id: c.id, count: 1};
        return a;
      }, {}));
      
    console.log(output);
    
      let res = output.map((mp, c) => {
      c = mp.count;
      return c;
      });
      console.log(res); */
      const count = 1;
      function getItemQuantity(id){
        return cartItems.find(item => item.id === id)? count : 0;
      }
      function increaseCartQuantity(id, count){
         return cartItems.find(currItems => {
            //? If our item doesn't already exists in cart, then we need to add it to cart.
            if (currItems.find(item => item.id === id) == null){
                //? All of our current items, we can add a new item with it's id & count = 1
                return [...currItems, {id, count:1}];
            } else {
                //? If the item exists in cart, we need to increment the count of it by 1
                return currItems.map(item => {
                    if (item.id === id){
                        return {...item, count: count + 1};
                    } else {
                        return item;
                    }
                })
            }
        })
      }
    // console.log(cartItems.push(counter));
    // Redirect to Order Confirmation Page
    // console.log(data);
    let total_Amt = 0;
    for( let i = 0; i < cartItems.length; i++ ){
        $('#cartList').append(productCard(cartItems[i]));
        console.log(getItemQuantity(cartItems[i].id));
        console.log(getItemQuantity(increaseCartQuantity(cartItems[i].id, cartItems[i].count)));
        console.log('Price => ', cartItems[i].price);
    }
});