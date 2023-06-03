let productList = [];
productList.forEach(function (val, index, list) {
    console.log(val);
    // div parent div

    let cardParent = document.createElement('div');
    cardParent.className = 'card';

    //add img
    let imgCloth = document.createElement('img');
    imgCloth.src = value.preview;
    //add img to [parent]
    cardParent.appendChild(imgCloth);

    //details
    let cardinfo = document.createElement('div');
    cardinfo.className = 'details';

    let title = document.createElement('h1');
    title.innerHTML = value.name;

    let description = document.createElement('h2');
    title.innerHTML = value.description;
    let price = document.createElement('p');
    title.innerHTML = value.price;

    cardinfo.appendChild(title);
    cardinfo.appendChild(description);
    cardinfo.appendChild(price);

    cardparent.appendChild(cardinfo);

    const productBox =document.getElementById('product-box');
    const cloth = document.getElementById('cloth-box');

    
})