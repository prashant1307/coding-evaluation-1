var all_products=JSON.parse(localStorage.getItem('products'))
console.log(all_products)
let container=document.getElementById('all_products')
function display(){
  console.log(all_products)
   all_products.forEach(function(el,index){
      let box=document.createElement('div')

      let img=document.createElement('img')
      img.src=el.image;

      let type=document.createElement('h2')
      type.innerText=el.type;

      let desc=document.createElement('h3')
      desc.innerText=el.desc;

      let price=document.createElement('h3')
      price.innerText=el.price;

      let remove=document.createElement('button')
      remove.innerText='Remove'
      remove.setAttribute('id','remove_product')
      remove.addEventListener('click',function(){
        remove1(el,index)
      })

      box.append(img,type,desc,price,remove)
      container.append(box)
   })
}
display()
function remove1(el,index){
  //console.log('heello')
  all_products.splice(index,1)
  localStorage.setItem('products',JSON.stringify(all_products))
  window.location.reload()
}