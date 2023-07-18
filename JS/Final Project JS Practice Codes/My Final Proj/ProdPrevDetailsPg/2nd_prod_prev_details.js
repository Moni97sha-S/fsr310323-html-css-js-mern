if (localStorage.getItem("cartNumber") != null) {
    $("#cartCount").html(localStorage.getItem("cartNumber"));
  } else {
    $("#cartCount").html("0");
  }

$(document).ready(function () {

    // https://test-hosting-8f9bf.web.app/product/details.html?p=3
    const productId = window.location.search.split('=')[1];
    // console.log(productId);

    function createProdImages(url, id) {
        var mainImage = $("<img>").attr('src', url);

        if(id === 0){
            mainImage.addClass('active-image');
        }

        mainImage.click(function(){
            // console.log('Clicked');
            $("#prod-images img").removeClass("active-image");
            mainImage.addClass('active-image');
            $('#prevImg').attr('src', url);
        });
        return mainImage;
    }

    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + productId, 
    function(data, status){
        // console.log(data);
        // console.log(status);

        $('#prevImg').attr("src", data.preview);
        $('#prod-title').html(data.name);
        $('#prod-brand').html(data.brand);
        $('#prod-description').html(data.description);
        $('#prod-price').html(data.price);

        for(let i = 0;  i < data.photos.length; i++) {
            $('#prod-images').append(createProdImages(data.photos[i], i));
        }

        //AddToCartBtn
        $('#addToCartBtn').click(function () {
            // console.log('Clicked');
            //** Animation **//
            $('#addToCartBtn').addClass('bigger');
            setTimeout(function () {
                $('#addToCartBtn').removeClass('bigger');
            }, 200);
            
            //** Saving Number of times we adding an item into cart in 'n' variable **//
            let n = window.localStorage.getItem('cartNumber');
            if( n === null){
                n = 0;
            }
            n++;
            console.log(n);
            
            // Changing Cart Number 
            // location.reload();
            if(n != null){
                $('#cartCount').html(n);
                // localStorage.getItem('cartNumber')
            }else{                
                $('#cartCount').html('0');
            }

            // console.log(cartItems.length);

            localStorage.setItem('cartNumber', n);
            console.log('cartNumber', n);
            
            //! Adding/Pushing every Item into (an Empty array) Cart
            let productList = [];
            var cartItems=JSON.parse(localStorage.getItem("cartItems") || "[]");
            function itemCount() {
                let count = 1;
                return count
            }
            cartItems.forEach((c) => {c.quantity = itemCount();});
            console.log(cartItems);
            (function(){
                if(cartItems.length<1){
                    cartItems.push(data) 
                    localStorage.setItem("cartItems", JSON.stringify(cartItems));
                }else{
                    let dupFlag=0;
                    // let itemCount, count = 1;
                    for(var i=0;i<cartItems.length;i++){
                        // count = 1;
                        console.log(data.id, cartItems[i].id);
                        if((cartItems[i].id)==(data.id) ) {
                            dupFlag=1;
                            console.log("flag")
                            break;
                        }
                    }
                    if(dupFlag==0){
                        ("push data")
                        cartItems.push(data) 
                        localStorage.setItem("cartItems", JSON.stringify(cartItems));
                    } 
                }
                   

                //localStorage.setItem("productItems", JSON.stringify(productItems));
                cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
                
                console.log(cartItems);
                })();
            //** Getting Selected cart Items are saved in 'cartItems' variable **//
            /* let cartItems = window.localStorage.getItem('cartItems');
            if(cartItems != null){
                productList.push(...JSON.parse(cartItems));
                productList.push(data);
                localStorage.setItem('cartItems', JSON.stringify(productList));
                // let result = localStorage.getItem('cartItems');
                console.log('cartItems:', JSON.parse(cartItems));
            } else {
                productList.push(data);
                localStorage.setItem('cartItems', JSON.stringify(productList));
                // let result = localStorage.getItem('cartItems');
                console.log('cartItems:', JSON.parse(cartItems));
            }
            console.log(productList);
            //console.log(localStorage.getItem('cartNumber'));     */
        });
    });
});