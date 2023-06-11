var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
        1,
        1,
        0,
        1,
        0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
}

function show(value, index, arrList) {
    //parent right div
    let leftDiv = document.createElement('div');
    leftDiv.className = 'left';

    //parent left div
    let rightDiv = document.createElement('div');
    rightDiv.className = 'right';

    // create img tag and add all images in right div 
    let previewImage = document.createElement('img');
    previewImage.src = value.preview;
    previewImage.classList = "previewImg"

    // add img to parent div rightDiv
    leftDiv.appendChild(previewImage);

    //add little-details to rightDiv
    let title = document.createElement('h1');
    title.innerHTML = value.name;
    rightDiv.appendChild(title);

    let company = document.createElement('h4');
    company.innerHTML = value.brand;
    rightDiv.appendChild(company);

    let sp = document.createElement('span');
    sp.innerHTML = "Price: Rs ";
    rightDiv.appendChild(sp);

    let rate = document.createElement('p');
    rate.innerHTML = value.price;
    rate.className = "val";
    rightDiv.appendChild(rate);

    let desTopic = document.createElement('h4');
    desTopic.innerHTML = "Description";
    rightDiv.appendChild(desTopic);

    let des = document.createElement('p');
    des.innerHTML = value.description;
    des.className = "about";
    rightDiv.appendChild(des);

    let imgeTopic = document.createElement('h4');
    imgeTopic.innerHTML = "Product Preview";
    rightDiv.appendChild(imgeTopic);

    let unList = document.createElement('ul');
    rightDiv.appendChild(unList);

    let listItems = document.createElement('li');
    listItems.id = "list";
    unList.appendChild(listItems);

    let images0 = document.createElement('img');
    images0.src = value.photos[0];
    images0.className = "active";
    images0.classList.add("image");
    listItems.appendChild(images0);

    let images1 = document.createElement('img');
    images1.src = value.photos[1];
    images1.classList = "image";
    listItems.appendChild(images1);

    let images2 = document.createElement('img');
    images2.src = value.photos[2];
    images2.classList = "image";
    listItems.appendChild(images2);

    let images3 = document.createElement('img');
    images3.src = value.photos[3];
    images3.classList = "image";
    listItems.appendChild(images3);

    let images4 = document.createElement('img');
    images4.src = value.photos[4];
    images4.classList = "image";
    listItems.appendChild(images4);

    // let images5 = document.createElement('img');
    // images5.src = value.photos[5];
    // images5.classList = "image5";
    // listItems.appendChild(images5);

    let btn = document.createElement('button');
    btn.innerHTML = "Add to Cart";
    btn.className = "subBtn";
    rightDiv.appendChild(btn);

    let prodPrePage = document.getElementById('productPreviewPage')
    prodPrePage.appendChild(leftDiv);
    prodPrePage.appendChild(rightDiv);

    // ---------------- Change Preview Image OnClick -------
    function clickImageforPreview() {
        // image 0
        images0.addEventListener("click", function () {
            previewImage.src = value.photos[0];
        });
        // image 1
        images1.addEventListener("click", function () {
            previewImage.src = value.photos[1];
        });
        // image 2
        images2.addEventListener("click", function () {
            previewImage.src = value.photos[2];
        });
        // image 3
        images3.addEventListener("click", function () {
            previewImage.src = value.photos[3];
        });
        // image 4
        images4.addEventListener("click", function () {
            previewImage.src = value.photos[4];
        });
        // Toggle Active Class
        // $(document).on("click", "previewImage img", function () {
        //     $(this)
        //.addClass("active");
        //.siblings();
        // .removeClass("active");
        // });

        const change = src => {
            document.getElementsByClassName('previewImg').src = src
        }
        let images = document.getElementsByClassName('image');
        for (let i = 0; i < images.length; i++) {
            // currClk[0].className.remove("active");
            this.className -= " active";

            images[i].addEventListener("click", function () {
                var currClk = document.getElementsByClassName("active");
                currClk[0].className = currClk[0].className.replace("active", "");
                this.className += " active";
            });
        }
    }
    clickImageforPreview()
}

show(productData);

