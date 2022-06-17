var productsdata=[
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16519/goods_thumb_220-v1/e9c161b9300d.jpg",title:"phone",price:"$49",id:"t14"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"t15"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"t16"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"t17"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"t18"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"t19"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"t20"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"t21"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"t22"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"t23"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"t24"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"t25"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"t26"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"27"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"28"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"29"},
];



var carddata=JSON.parse(localStorage.getItem("cartpage"))||[]
var box = document.querySelector("#products")
function displaydata(productsdata){
    document.querySelector("#products").innerHTML=""
   productsdata.forEach(function(elem){
    var container = document.createElement("div")
    var photo = document.createElement("img")
    photo.src=elem.img;
    var title=document.createElement("h3")
    title.innerText=elem.title
    var price = document.createElement("p")
    price.innerText=elem.price;
    var brand =document.createElement("h4")
    brand.innerText=elem.brand
    var cart = document.createElement("button")
    cart.innerText="Delete"
    cart.addEventListener("click",function(){
        dilit(elem.id)
    })
    var payment=document.createElement("button")
    payment.innerText="PAYMENT"
   
    container.append(photo,title,price,brand,cart,payment)
    box.append(container)
   })
  
}
displaydata(carddata)

function dilit(cd){
   var deleted=carddata.filter(function(elem){
    return elem.id != cd
   })
   localStorage.setItem("cartpage",JSON.stringify(deleted))
   window.location.reload()
}
