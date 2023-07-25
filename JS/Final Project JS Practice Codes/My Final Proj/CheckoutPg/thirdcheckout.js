$(document).ready(function () {
    let n = window.localStorage.getItem('cartNumber');
    let cartItems = window.localStorage.getItem('cartItems');
    // console.log(cartItems)
    console.log(n)
    if (cartItems != null) {
        let arr = JSON.parse(cartItems);
        console.log(`checkout-data: ${arr}`);
        console.log(arr);
        if(n != null){
            $("#cartCount").html(n);
        } else {
            $("#cartCount").html("0");
        }
        
        for(let j = 0; j < arr.length; j++){
            console.log(n);
            $("#countItems").html(n);
            let prodCheckoutContainer = $("<div>").addClass("prodCheckoutContainer").html('<i class="fas fa-trash aria-hidden="true"></i>');
            let  imageLeftBlock = $("<div>").addClass("imageLeftBlock");
            let  leftProdImg = $("<img>").attr("src", arr[j].preview);
            let  rightDetails = $("<div>").addClass("rightDetails");
            let  rightHeading = $("<h4>").addClass("rightHead").html(arr[j].name);
            let  rightProdCount = $("<p>")
            .addClass("rightProdCount")
            .html("x" + arr[j].counter);
            let  rightProdPrice = $("<p>")
            .addClass("rightProdPrice")
            .html("Amount: Rs " + arr[j].price * arr[j].counter);
            
            $("#cartList").append(prodCheckoutContainer);
            prodCheckoutContainer.append(imageLeftBlock);
            prodCheckoutContainer.append(rightDetails);
            imageLeftBlock.append(leftProdImg);
            rightDetails.append(rightHeading);
            rightDetails.append(rightProdCount);
            rightDetails.append(rightProdPrice);

            // Redirect to Order Confirmation Page
            console.log(typeof arr);
            console.log(arr);
            console.log(typeof arr[j].counter)
            console.log(arr[j].counter)
            let total_Amt = 0;
            for(cost of arr){
                // console.log(cost);
                total_Amt += (cost.counter * cost.price);
            }
            console.log(total_Amt);
            $("#totalAmount").html(total_Amt);
             // render Total_Amt
            $('.placeOrder').on("click",function() {
                let orderItemsArr = [];
                for(let i = 0; i < arr.length; i++) {
                    console.log(typeof arr[i].id);
                    
                    let prodObj = {
                        "id": arr[i].id,
                        "name": arr[i].name,
                        "quantity":arr[i].counter,
                        "brand": arr[i].brand,
                        "price": arr[i].price,
                        "preview": arr[i].preview,
                        "isAccessory": arr[i].isAccessory
                    }
                    // console.log(prodObj);
                    let prodObjCopy = prodObj;
                    orderItemsArr.push(prodObjCopy);
                }
                
                console.log(orderItemsArr);
                renderTotalAmt();               
                // console.log(total_Amt);

                let dataObj = {
                    amount: total_Amt,
                    products: orderItemsArr
                }
                $.post("https://jsonplaceholder.typicode.com/todos", dataObj, function() {
                    alert("Order Placed Successfully!");
                    localStorage.setItem('orderItemsArr', JSON.stringify(orderItemsArr));
                    localStorage.setItem('dataObj', JSON.stringify(dataObj));
                    location.assign('../OrderConfirmationPg/orderPlaced.html')
                })

            });
        }
       
        $(".prodCheckoutContainer").click(function (){
            for(let i = 0; i < arr.length; i++) {
                removeItemFromCart(arr[i].id, arr[i].counter);
            }
        });

        // renderTotalAmt
        /*function renderTotalAmt() {
            let total_Amt = 0, totalItems = 0;
            for(let i=0; i<arr.length; i++) {
                // console.log(cost);
                totalPrice += arr[i].counter * arr[i].price;
                totalItems += arr[i].counter;
            };
            let totAmt = document.getElementById("totalAmount");
            
            return total_Amt;
        } 
        console.log(total_Amt); */

        // Remove item from cart
        function removeItemFromCart(id, counter){
            // console.log(cartItems);
            // console.log(arr);
            console.log(id);
            // arr.filter((i) => condition);
            cart = arr.filter((item) => item.id !== id);
            updateCart(id, counter);
        }

        // Update count onclick of trash icon
        function updateCart(id, counter){
            cart = arr.map((item) =>{
                counter = item.counter;
                price = item.price
                console.log(price);
                if(item.id === id && counter > 0){
                    counter--;
                    console.log(counter);
                    if(counter === 0){
                        $('.prodCheckoutContainer').remove();
                    }
                    $('.rightProdCount').html("x" + counter);
                    console.log(price);
                    $('.rightProdPrice').html("Amount: Rs " + item.price * counter);
                    console.log(price * counter);
                    // renderTotalAmt();
                    // console.log(total_Amt);
                    let totAmt = document.getElementById("totalAmount");
                    totAmt.innerHTML = price * counter;
                    // $("#totalAmount").html(item.price * counter); 
                  /*  const index = arr.findIndex(item => item.id === id);
                    if(index > -1){
                        arr.splice(index, 1);
                    }
                    n--;
                    window.localStorage.setItem("cartNumber", JSON.stringify(cartNumber, n));

                    $('cartCount').html(n); */
                    
                } else counter;
                console.log(counter); 
                console.log(price * counter); 
                console.log(n);
                return {...item, counter};
            })
            update
        }
       
    }else{
        console.log("No data available");
        cartItems = [];
    }
}); 
    // window.onload = function() {
        //     $('.placeOrder').on("click",function() {
        //         $.ajax({
        //             type: 'GET',
        //             url:"https://5d76bf96515d1a0014085cf9.mockapi.io/order",
        //             success:function(data){
        //                 console.log("Clicked");
        //                 // console.log(data);
        //             },
        //             cache: false
        //         });
        //     });
        // }
        //Try to use this API instead. 
        /* $("#plceordrBtn").click(function (e){ 
            var itemInmyCart={ 
                let product: productItems, 
                var totalAmount: totalcost 
            } 
            $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/order", function(){
                $.post("https://jsonplaceholder.typicode.com/todos", function() { 
                    alert('Your order is Successfully Placed');
                     localStorage.setItem('product-list', []); 
                    location.assign("order_confirm.html"); 
                }) 
            })
        }) */
            
