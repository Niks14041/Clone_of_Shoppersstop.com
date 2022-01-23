let cartData = JSON.parse(localStorage.getItem('myCart'));

console.log(cartData);

display(cartData);

orderSummary(cartData)

// --------------display data -----------------

function display(arr){


    document.querySelector('.products').innerHTML = "";

    arr.map((ele,index)=>{

        // ---------img div---------

        let div = document.createElement('div');
        div.setAttribute('class',"cart-products")

        let imageDiv = document.createElement('div');
        imageDiv.setAttribute('class','image');

        let image = document.createElement("img");
        image.setAttribute("src", ele.img);

        imageDiv.append(image);

        // ------brand_div--------------

        let brand_div =document.createElement('div');
        brand_div.setAttribute('class','brand');

        let brand = document.createElement("p");
        brand.innerHTML = ele.brand;
        brand.setAttribute("class", "brand-name");

        let des = document.createElement("h5");
        des.textContent = ele.description;

        let sizeLabel = document.createElement('label');
        sizeLabel.textContent = "size : ";

        let size = document.createElement('select');
        
        let opt1 = document.createElement('option');
        opt1.textContent = 'S';

        let opt2 = document.createElement('option');
        opt2.textContent = 'M';

        let opt3 = document.createElement('option');
        opt3.textContent = 'L';

        let opt4 = document.createElement('option');
        opt4.textContent = 'XL';

        let opt5 = document.createElement('option');
        opt5.textContent = 'XXL';

        size.append(opt1,opt2,opt3,opt4,opt5);



        // ---------------------quantity----------------


        let quantityLabel = document.createElement('label');
        quantityLabel.textContent = "quantity : ";

        let quantity = document.createElement('select');
        quantityLabel.setAttribute('id','quantityRange');
        
        let opt11 = document.createElement('option');
        opt11.textContent = 1;

        let opt12 = document.createElement('option');
        opt12.textContent = 2;

        let opt13 = document.createElement('option');
        opt13.textContent = 3;

        let opt14 = document.createElement('option');
        opt14.textContent = 4;

        let opt15 = document.createElement('option');
        opt15.textContent = 5;

        var original_price = ele.price;

        quantity.addEventListener('change',()=>{
            
            let quantityNo = +quantity.value;

            ele.price = quantityNo * (original_price);
            price.textContent = "₹" + ele.price;
            orderSummary(cartData);

        })


        // ---------delete-------------------------

        let del = document.createElement('button');
        del.textContent = 'Remove';

        let delDiv =document.createElement('div');
        delDiv.append(del);
        delDiv.style.marginTop = '20px';


        del.addEventListener('click',(event)=>{

            event.target.parentNode.parentNode.parentNode.remove()
            console.log(event.target.parentNode.parentNode.parentNode)
            deleteItem(index)

        })

        quantity.append(opt11,opt12,opt13,opt14,opt15);


        brand_div.append(brand,des,sizeLabel,size,quantityLabel,quantity,delDiv);

        // ------------------Price-----------------

        let price_div = document.createElement("div");
        price_div.setAttribute('class','price')

        let price = document.createElement("p");
        price.textContent = "₹" + ele.price;
        price.setAttribute("class", "price-bold");
    
        let previous_price = document.createElement("p");
        previous_price.textContent = ele.preprice
    
        let discount = document.createElement("p");
        discount.textContent = ele.discount+'%'+' '+'OFF';
        discount.setAttribute("class", "discount-color");
        previous_price.setAttribute("class", "line-on");

        let priceAndpreDiv = document.createElement('div');
        priceAndpreDiv.append(previous_price,discount);
        priceAndpreDiv.style.display = 'flex';

        price_div.append(price,priceAndpreDiv)

        div.append(imageDiv,brand_div,price_div)

        document.querySelector('.products').append(div)

    })
}


// -----------------------ordersummary----------------------------

function orderSummary(arr){

    var total = 0;

    arr.map((ele)=>{
        total += ele.price 
    });

    let order_subtotal = document.getElementById('subtotal');
    order_subtotal.innerHTML = total;

    let payable = document.getElementById('payable');
    payable.innerHTML = "₹ "+ Math.ceil(total);

    let apply = document.getElementById('apply');

    apply.addEventListener('click',()=>{

        let couponText = document.getElementById('coupon').value;
        let invalid_display = document.getElementById('invalid');

        if(couponText=="MASAI20"){

            invalid_display.style.display = 'block';
            invalid_display.style.color = 'green';
            invalid_display.textContent = 'Coupon Applied !'


            let couponDiscount =document.getElementById('coupon-discount');
            
            couponDiscount.textContent = total*20/100;
    
            total = total - total*20/100;

            payable.innerHTML = "₹"+ Math.ceil(total);;
        }
        else{
            

            invalid_display.style.display = 'block';
            invalid_display.style.color = 'red';
            invalid_display.textContent = 'Invalid coupon'

        }
    })
}

// --------------------------------------deleteItem________________________________

function deleteItem(index){

    cartData.splice(index,1);
    localStorage.setItem("myCart",JSON.stringify(cartData));
    cartData = JSON.parse(localStorage.getItem('myCart')) || [];
    display(cartData);
    orderSummary(cartData)
}


let checkout_btn = document.getElementById('check-btn');
checkout_btn.addEventListener('click',()=>{
    window.location.href = './payment.html'
})