var productsdata=[
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_thumb_220-v1/4fe719a1eba3.jpg",brand:"Samsung",title:"Cycle",price:"5549",id:"t1"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16389/goods_thumb_220-v1/3a1f64dbcc1a.jpg",brand:"MI",title:"Gloves",price:"249",id:"t2"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15924/goods_thumb_220-v1/edae5a7b1ddf.jpg",brand:"One Plus",title:"Face Mask",price:"349",id:"t3"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16458/goods_thumb_220-v5/a305c61b8ef2.jpg",brand:"Oppo",title:"Electric Cycle",price:"349",id:"t4"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16409/goods_thumb_220-v1/e51aa2bc2d75.jpg",brand:"One Plus",title:"Cycle Bag",price:"449",id:"t5"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6914288247233507328/16502/goods_thumb_220-v1/f889c20a1742.jpg",brand:"MI",title:"Car Rear Tent",price:"649",id:"t6"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15973/goods_thumb_220-v1/26e45723deb8.jpg",brand:"Boat",title:"phone",price:"849",id:"t7"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6914288247233507328/16502/goods_thumb_220-v1/04007faa306f.jpg",brand:"Boat",title:"Campaign Car Tent",price:"$49",id:"t8"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6895742097949913088/16457/goods_thumb_220-v1/7f4d41d4fc19.jpg",brand:"Vivo",title:"Artillary",price:"749",id:"t9"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16064/goods_thumb_220-v1/45a320a7e5cd.jpg",brand:"Real Me",title:"phone",price:"49",id:"t10"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15988/goods_thumb_220-v1/8947b94356a2.jpg",brand:"One Plus",title:"SCREW Driver",price:"49",id:"t11"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16097/goods_thumb_220-v1/9aece772c026.jpg",brand:"Vivo",title:"Longer Drive",price:"49",id:"t12"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16472/goods_thumb_220-v1/64e215293e16.jpg",brand:"Oppo",title:"Outdoor Camera",price:"49",id:"t13"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/store/6882689559126274048/16489/goods_thumb_220-v7/4e06e8fb9369.jpg",brand:"Vivo",title:"Bluetooth Earphones",price:"749",id:"t14"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16483/goods_thumb_220-v1/4f2c2c8dfb39.jpg",brand:"Real Me",title:"phone",price:"49",id:"t15"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16457/goods_thumb_220-v1/0633cb3e76df.jpg",brand:"Samsung",title:"phone",price:"5149",id:"t16"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6868955312079171584/16502/goods_thumb_220-v1/4e9e81a0cd1c.jpg",brand:"Vivo",title:"Earphones",price:"8949",id:"t17"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16370/goods_thumb_220-v1/fdcb04ee1317.jpg",brand:"Oppo",title:"Outdoor Camera",price:"49",id:"t18"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16092/goods_thumb_220-v1/01308a95c0bd.jpg",brand:"Vivo",title:"phone",price:"749",id:"t19"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6919674405698334720/16530/goods_thumb_220-v1/9193e13d48db.jpg",brand:"Samsung",title:"phone",price:"4769",id:"t20"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878028664286670848/16501/goods_thumb_220-v1/3f611e27287f.jpg",brand:"One Plus",title:"phone",price:"49",id:"t21"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16403/goods_thumb_220-v1/167be3e01d5c.jpg",brand:"Vivo",title:"Earphones",price:"49",id:"t22"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6868955312079171584/16544/goods_thumb_220-v1/0e9be9735abe.jpg",brand:"Samsung",title:"Outdoor Camera",price:"1000",id:"t23"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/store/6882689559126274048/16489/goods_thumb_220-v7/4e06e8fb9369.jpg",brand:"Vivo",title:"Bluetooth Earphones",price:"749",id:"t24"},
];



var filter = document.getElementById("filter")
var box = document.querySelector("#products")
var card = JSON.parse(localStorage.getItem("cartpage")) || []


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
    cart.innerText="Add to cart"
    cart.addEventListener("click",function(){
      if(addtocart(elem.id)===true){
        alert("product added succesfully")
        card.push(elem)
        localStorage.setItem("cartpage",JSON.stringify(card))
      }
      else{
        alert("Product already Added")
      }
    })
    container.append(photo,title,price,brand,cart)
    box.append(container)
   })
  
}

displaydata(productsdata)
document.querySelector("#price").addEventListener("change",pricesort)
function pricesort(){
    var selected=document.querySelector("#price").value
    if(selected=="HTL")
    {
        productsdata.sort(function(a,b){
            return b.price -a.price
        })
        displaydata(productsdata)
    }
    if(selected=="LTH")
    {
        productsdata.sort(function(a,b){
            return a.price -b.price
        })
        displaydata(productsdata)
    }

}

 

filter.addEventListener("change",function(){
    if(filter.value=="All"){
        displaydata(productsdata)
    }
    else{
        var filtered=productsdata.filter(function(elem){
            return elem.brand==filter.value
        })
        displaydata(filtered)
    }
})

function addtocart(cd){
    for(var i=0;i<card.length;i++)
    {
        if(card[i].id == cd){
            return false
        }
    }
    return true
}