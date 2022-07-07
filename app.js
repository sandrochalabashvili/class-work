// let x = 12;
// let y = 5;
// let z = x + y;
// console.log(z)

// let t = 32;
// let u = 5;
// let p = t - u;
// console.log(p)


// არგვაძლევს უფლებას შევქმნათ მსგავი სხვა მნიშვნელობით და ამავდროულად შეგვიძლია ჩავანაცბლოდ (m = 5) მნიშვნელობით
// let m = 32;
// let m = 5;

// let bool = true;
// let fol = false;

// console.log( y > 22 )



let img = 'img/iphone-13-pro.jpeg';
let title = 'Apple iPhone 13 Pro Max| 128GB Alpine Green';
let price = '4 099 GEL';
let themplate = `
<div class="col-lg-4 mx-auto">
<div class="card">
<img src="${img}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${title}</h5>
  <p class="card-text text-danger"> <hr>${price}</p>
  <a href="contact.html" class="btn btn-primary">Buy</a>
</div>
</div>
</div>`
let strs = document.getElementById('app').innerHTML = themplate;
console.log(themplate);

let themplate2 = `   
<div> 
<h2 class="text-center mt-2">
    404 Not Found
</h2>
<p class="text-center">nginx/1.18.0 (Ubuntu)</p>
</div>`
let strs1 = document.getElementById('app2').innerHTML = themplate2;


