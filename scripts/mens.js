
// -------------------------created by constructor function -------------------------

let arr = [];

let mycartArr = [];

function CreatePro(imgUrl,brandName,des,priceOfpro,discountOfpro,prepriceOfpro){

    this.img = imgUrl;
    this.brand = brandName;
    this.description = des;
    this.price = priceOfpro;
    this.discount  = discountOfpro;
    this.preprice = prepriceOfpro;
}


let product1 = new CreatePro('https://sslimages.shoppersstop.com/sys-master/images/h85/h74/17325042040862/A21FQLMOPG24867_RED.jpg_230Wx334H','ALLEN SOLLY','Stripes Cotton Linen Blend Regular Fit Mens Casual Shirt',999,58,'₹ 2399');

arr.push(product1);

let product2 = new CreatePro('https://sslimages.shoppersstop.com/sys-master/images/h26/h3e/17471888556062/A21FQSMOPA76407_MULTI.jpg_230Wx334H','ALLEN SOLLY','Stripes Cotton Regular Fit Mens Casual Shirt',1499,27,'₹ 2049');

arr.push(product2);

let product3 = new CreatePro('https://sslimages.shoppersstop.com/sys-master/images/h02/h0e/17268040007710/A21BHMLS21605WH_WHITE.jpg_230Wx334H','BEING HUMAN','Solid Cotton Slim Fit Mens Casual Shirt',1499,40,'₹ 2499');

arr.push(product3);

let product4 = new CreatePro('https://sslimages.shoppersstop.com/sys-master/images/h1a/h25/16162195046430/S21509MANDCORLB_LIGHT_BLUE.jpg_230Wx334H','LIFE','Solid Cotton Slim Fit Mens Casual Shirt',649,50,'₹ 1299');

arr.push(product4);

let product5 = new CreatePro('https://sslimages.shoppersstop.com/sys-master/images/h69/hea/17366445228062/A21MSH02BA184RE_RED.jpg_230Wx334H','SPYKAR','Checks Cotton Slim Fit Mens Casual Shirt',1439,40,'₹ 2399');

arr.push(product5);

let product6 = new CreatePro('https://sslimages.shoppersstop.com/sys-master/images/hba/h8f/17446434340894/A21MSH02BA102BL_BLACK.jpg_230Wx334H','SPYKAR','Printed Cotton Slim Fit Mens Casual Shirt',1259,40,'₹ 2099');

arr.push(product6);

let product7 = new CreatePro('https://sslimages.shoppersstop.com/sys-master/images/he2/h2f/17267650134046/A21BHMLS21625NA_NAVY.jpg_230Wx334H','BEING HUMAN','Solid Knitted Super Slim Fit Mens Casual Shirt',1799,40,'₹ 2899');

arr.push(product7);

let product8 = new CreatePro('https://sslimages.shoppersstop.com/sys-master/images/h74/h37/17267159498782/A21BHMLS21581BL_BLACK.jpg_230Wx334H','BEING HUMAN','Solid Cotton Super Slim Fit Mens Casual Shirt',1679,40,'₹ 2799');

arr.push(product8);

let product9 = new CreatePro('https://sslimages.shoppersstop.com/sys-master/images/hba/had/17269405122590/A21BHMLS21558BL_BLACK.jpg_230Wx334H','BEING HUMAN','Checks Cotton Slim Fit Mens Casual Shirt',1439,40,'₹ 2399');

arr.push(product9);

let product10 = new CreatePro('https://sslimages.shoppersstop.com/sys-master/images/h77/he3/26390076555294/A21SFESPP579863_OLIVE.jpg_230Wx334H','ALLEN SOLLY','Checks Cotton Regular Mens Sport Shirt',2639,20,'₹ 3299');

arr.push(product10);

let product11 = new CreatePro('https://sslimages.shoppersstop.com/sys-master/images/h52/h06/17263688581150/A21MSH01BA050WH_WHITE.jpg_230Wx334H','SPYKAR','Stripes Cotton Slim Fit Mens Casual Shirt',1379,40,'₹ 2299');

arr.push(product11);

let product12 = new CreatePro('https://sslimages.shoppersstop.com/sys-master/images/h38/hee/26432923041822/21A5EW65QV58906_GREEN.jpg_230Wx334H','LIFE','Solid Cotton Lycra Slim Fit Mens Casual Shirt',649,50,'₹ 1299');

arr.push(product12);

let product13 = new CreatePro('https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/1A06161163CE4C18A52E6B025793014A/205060785_9113_1A06161163CE4C18A52E6B025793014A.jpg','BEING HUMAN','Solid Men Shirt - khaki',1399,30,'₹ 1999');

arr.push(product13);




// ---------------------------append-----------------------------

function displayitem(data)
{
    document.querySelector('.main').innerHTML="";

data.map(function (elem) {

    var div = document.createElement("div");
    div.setAttribute("class", "product-box");

    var image_div = document.createElement("div");
    image_div.setAttribute("class", "image-box");

    var image = document.createElement("img");
    image.setAttribute("src", elem.img);

    var child_div = document.createElement("div");
    child_div.setAttribute("class", "pro_child_box");

    var brand = document.createElement("p");
    brand.innerHTML = elem.brand;
    brand.setAttribute("class", "brand-name")

    var brand_div = document.createElement("div");
    brand_div.setAttribute("class", "brand-box");

    var des = document.createElement("p");
    des.textContent = elem.description;

    var price = document.createElement("p");
    price.textContent = "₹" + elem.price;
    price.setAttribute("class", "price-bold");

    var previous_price = document.createElement("p");
    previous_price.textContent = elem.preprice

    var discount = document.createElement("p");
    discount.textContent = elem.discount+'%'+' '+'OFF';
    discount.setAttribute("class", "discount-color");
    previous_price.setAttribute("class", "line-on");

    var price_div = document.createElement("div");
    price_div.setAttribute("class", "price-box");

    let addTocart = document.createElement('button');
    addTocart.textContent = 'ADD TO CART';
    addTocart.setAttribute('class','cart-btn');


    addTocart.addEventListener('click', () => {

        alert('Item successfully added to cart');

        myCart(elem);

    });

    price_div.append(price, previous_price, discount);

    image_div.append(image);

    brand_div.append(brand, des)

    child_div.append(image_div, brand_div, price_div,addTocart);

    div.append(child_div);

    document.querySelector('.main').append(div);

});

}
displayitem(arr);

// ------------------------filter by brands----------------

function filterByBrands(){

    let brand = document.getElementById('filterbrand').value;

    let brandFilter = arr.filter((ele)=>{

        if(brand == 'brand'){
            return arr
        }
        else if(ele.brand == brand){
            return ele;
        }
    })

    displayitem(brandFilter);
    
}
// -------------------filter by discount------------------

function filterByDiscount(){

    let discount = document.getElementById('filterdiscount').value;

    let brandFilter = arr.filter((ele)=>{

        if(discount == 'all' ){
            return arr;
        }
        else if(discount == '20'){
            return ele.discount<=20;
        }
        else if(discount == '40'){
            return ele.discount <= 40 && ele.discount>=20;
        }
        else if(discount == '50'){
            return ele.discount == 50 ;
        }
    })

    displayitem(brandFilter);
    
}

// ---------------------------SORT by PRICE----------------------

function numsort(){

    let priceSort = document.getElementById('sort').value; 

    if(priceSort == 'low'){

        let sorted_arr = arr.sort((a,b) => {

            return a.price - b.price;
        })

        displayitem(sorted_arr);
    }
    else if(priceSort == 'high'){

        let sorted_arr = arr.sort((a,b)=>{

            return b.price - a.price;
        })

        displayitem(sorted_arr);
    }
     
}

// -----------------------------------------cart------------------------
function myCart(ele){

    mycartArr.push(ele);

    localStorage.setItem('myCart',JSON.stringify(mycartArr));
    // window.location.href = './cart.html'
    
}

let cart_btn = document.getElementById('cart-btn');
cart_btn.addEventListener('click',()=>{

    window.location.href = './cart.html'

})





