function displayitem(data,appendData)
{
    appendData.innerHTML="";

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
    discount.textContent = elem.discount;
    discount.setAttribute("class", "discount-color");
    previous_price.setAttribute("class", "line-on");

    var price_div = document.createElement("div");
    price_div.setAttribute("class", "price-box");

    price_div.append(price, previous_price, discount);

    image_div.append(image);

    brand_div.append(brand, des)

    child_div.append(image_div, brand_div, price_div);

    div.append(child_div);

    appendData.append(div);

});

}

export default displayitem 