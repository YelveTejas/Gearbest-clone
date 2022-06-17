var productsdata=[
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16519/goods_thumb_220-v1/e9c161b9300d.jpg",title:"phone",price:"$49",id:"t14"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"t15"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878400698325856256/16419/goods_img-v1/22549f61229b.jpg",title:"Puzzle",price:"$49",id:"t16"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16539/goods_img-v1/7a6e1bdf0f46.jpg",title:"Smart Watch",price:"$49",id:"t17"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6896502277952172032/16460/goods_img-v3/5b9d1b9f7836.jpg",title:"Electric Cycle",price:"$49",id:"t18"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_img-v1/126354806df6.jpg",title:"Pen",price:"$49",id:"t19"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16519/goods_img-v1/ad5af71dbbf9.jpg",title:"Cardio",price:"$199",id:"t20"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6882688590640508928/16488/goods_img-v1/78ad914ae7ca.jpg",title:"Oxygen Meter",price:"$49",id:"t21"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_img-v3/a06e3d5ad873.jpg",title:"Gym Bag",price:"$49",id:"t22"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6904007303549349888/16474/goods_img-v1/394534e30d4e.jpg",title:"Sensor",price:"$49",id:"t23"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16456/goods_img-v1/937ce184d834.jpg",title:"Media",price:"$49",id:"t24"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6882688590640508928/16508/goods_img-v1/83e81faaf67b.jpg",title:"Wireless Bluetooth",price:"$49",id:"t25"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6905960412823613440/16538/goods_img-v5/cb7d91b7d1ad.jpg",title:"Monitor",price:"$49",id:"t26"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16498/goods_img-v5/eca3dcc2ab20.jpg",title:"x Drone",price:"$49",id:"27"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16500/goods_img-v4/49b1c9f03a79.jpg",title:"T-Shirt",price:"$49",id:"28"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16487/goods_img-v1/26ff9a54dea9.jpg",title:"Samsung S22",price:"$49",id:"29"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16519/goods_thumb_220-v1/e9c161b9300d.jpg",title:"phone",price:"$49",id:"t14"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",title:"phone",price:"$49",id:"t15"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878400698325856256/16419/goods_img-v1/22549f61229b.jpg",title:"Puzzle",price:"$49",id:"t16"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16539/goods_img-v1/7a6e1bdf0f46.jpg",title:"Smart Watch",price:"$49",id:"t17"},
];




 var card = JSON.parse(localStorage.getItem("cartpage")) ||[]
var box = document.querySelector("#product")
function displaydata(productsdata){
   productsdata.forEach(function(elem){
    var container = document.createElement("div")
    var photo = document.createElement("img")
    photo.src=elem.img;
    var title=document.createElement("h3")
    title.innerText=elem.title
    var price = document.createElement("p")
    price.innerText=elem.price;
    var cart = document.createElement("button")
    cart.innerText="Add to cart"
    cart.addEventListener("click",function(){
     if(addtocart(elem.id)==true)
     {
        alert("Product added successfully")
        card.push(elem)
        localStorage.setItem("cartpage",JSON.stringify(card))
     }
     else{
        alert("Product already Added")
     }
    })
    container.append(photo,title,price,cart)
    box.append(container)
   })
  
}

displaydata(productsdata)

function addtocart(cd){
    for(var i=0;i<card.length;i++)
    {
        if(card[i].id==cd)
        {
            return false
        }
    }
    return true
}
