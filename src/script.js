/* Add any JavaScript you need to this file. */
/* eslint-env jquery */

//  imageSlide(ad)
function showAd() {
  var rnd = Math.random() * 2;
  var no = Math.floor(rnd + 1);
  var path = 'images/ad' + no + '.jpg';
  var p = document.getElementById('ad');
  window.setTimeout(showAd, 2000);
  p.src = path;
}

$(function() {
  $('#allCategory').click(function() {
    $('#new10').show();
    $('#top10').show();
    $('#brand10').show();
  });
});

$(function() {
  $('#newProd').click(function() {
    $('#new10').show();
    $('#top10').hide();
    $('#brand10').hide();
  });
});

$(function() {
  $('#best10').click(function() {
    $('#new10').hide();
    $('#top10').show();
    $('#brand10').hide();
  });
});

$(function() {
  $('#brand').click(function() {
    $('#new10').hide();
    $('#top10').hide();
    $('#brand10').show();
  });
});

$(function() {
  $('#review').click(function() {
    $('#new10').hide();
    $('#top10').hide();
    $('#brand10').hide();
    $('#reviewContent').show();
  });
});

//--------------------------------------------------------------------
function newProduct() {
  let data = window.New10productsData;

  data.forEach(element => {
    let imgdiv = document.querySelector('#new10ImgDiv');

    let content1 = document.createElement('div');
    content1.setAttribute('class', 'newContent');

    let img = document.createElement('img');
    img.classList.add('product_image');
    img.setAttribute('src', element.imageUrl);
    content1.appendChild(img);

    let name = document.createElement('p');
    name.setAttribute('class', 'name');
    name.textContent = element.name;
    content1.appendChild(name);

    let price = document.createElement('p');
    price.textContent = 'Price: $' + element.productPrice;
    price.setAttribute('class', 'originalPrice');
    content1.appendChild(price);

    let des = document.createElement('p');
    des.textContent = element.productDesc;
    des.setAttribute('class', 'productExplain');
    content1.appendChild(des);

    let saleprice = document.createElement('p');
    saleprice.textContent = 'Sale Price: $ ' + element.salesPrice;
    saleprice.setAttribute('class', 'discountPrice');
    content1.appendChild(saleprice);

    imgdiv.appendChild(content1);
  });
}

window.onload = () => {
  showAd();
  newProduct();
  topProduct();
  brandList();
};

// top10
function topProduct() {
  let data = window.Top10productsData;

  data.forEach(element => {
    let imgdiv = document.querySelector('#top10ImgDiv');
    let content1 = document.createElement('div');
    content1.setAttribute('class', 'topContent');
    let img = document.createElement('img');
    img.classList.add('product_image');
    img.setAttribute('src', element.imageUrl);

    content1.appendChild(img);
    let name = document.createElement('p');
    name.setAttribute('class', 'name');
    name.textContent = element.name;
    content1.appendChild(name);

    let price = document.createElement('p');
    price.textContent = 'Price: $' + element.productPrice;
    price.setAttribute('class', 'originalPrice');
    content1.appendChild(price);

    let des = document.createElement('p');
    des.textContent = element.productDesc;
    des.setAttribute('class', 'productExplain');
    content1.appendChild(des);

    let saleprice = document.createElement('p');
    saleprice.textContent = 'Sale Price: $ ' + element.salesPrice;
    saleprice.setAttribute('class', 'discountPrice');
    content1.appendChild(saleprice);

    imgdiv.appendChild(content1);
  });
}

function brandList() {
  let data = window.brand10List;

  data.forEach(element => {
    let imgdiv = document.querySelector('#brand10ImgDiv');
    let content1 = document.createElement('div');
    content1.setAttribute('class', 'brandContent');

    let img = document.createElement('img');
    img.classList.add('brand_image');
    img.setAttribute('src', element.imageUrl);

    content1.appendChild(img);
    let name = document.createElement('p');

    content1.appendChild(name);

    imgdiv.appendChild(content1);
  });
}
