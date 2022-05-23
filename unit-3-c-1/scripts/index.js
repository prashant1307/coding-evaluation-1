//store the products array in localstorage as "products"
let productData=JSON.parse(localStorage.getItem('products')) || []

function productObj(t,d,p,i){
  this.type=t;
  this.desc=d;
  this.price=p;
  this.image=i;
}

function myFunction(event){
  event.preventDefault();
  let form=document.getElementById('products')
  let type=form.type.value;
  let desc=form.desc.value;
  let price=form.price.value;
  let image=form.image.value;

  let newProduct=new productObj(type,desc,price,image)

  productData.push(newProduct)
  //console.log(productData)
  localStorage.setItem('products',JSON.stringify(productData))

  document.getElementById('type').value=null;
  document.getElementById('desc').value=null;
  document.getElementById('price').value=null;
  document.getElementById('image').value=null;
}