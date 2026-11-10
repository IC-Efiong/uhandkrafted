var CONFIG={
  brand:"Handcrafted",            // change to your real business name
  whatsapp:"2340000000000",        // phone number with country code, digits only
  email:"hello@example.com",
  instagram:"@yourhandle"
};
// To add or update a dress, edit this list. status: "available" | "sold" | "coming soon"
// colors = two or three CSS colours used as the placeholder image until real photos are added
var PHOTOS={tassel:"images/tassel.jpg",purple:"images/purple.jpg",green:"images/green.jpg",jacket:"images/jacket.jpg"};
var DRESSES=[
 {name:"Tassel Dress",desc:"Charcoal dress with a hand-painted portrait, purple tie-dye panel and tasselled hem.",price:"Price on request",status:"coming soon",colors:["#ddd1fb","#fff3cf","#ececec"],photo:PHOTOS.tassel},
 {name:"Purple Hooded Kaftan",desc:"Deep purple kaftan with tie-dye shoulders, yellow trim and a painted portrait.",price:"Price on request",status:"coming soon",colors:["#7c5cd6","#ddd1fb","#ffffff"],photo:PHOTOS.purple},
 {name:"Green Hooded Kaftan",desc:"Bright green kaftan with a striped tie-dye hood and hand-painted artwork.",price:"Price on request",status:"coming soon",colors:["#fff3cf","#ececec","#ddd1fb"],photo:PHOTOS.green},
 {name:"Lion Denim Jacket",desc:"Denim jacket with a vivid hand-painted lion on the back.",price:"Price on request",status:"coming soon",colors:["#111111","#7c5cd6","#ddd1fb"],photo:PHOTOS.jacket}
];
document.getElementById("brand").textContent=CONFIG.brand;
document.getElementById("foot").textContent="© "+new Date().getFullYear()+" "+CONFIG.brand+" · "+CONFIG.email+" · Instagram "+CONFIG.instagram;
var g=document.getElementById("grid"),sel=document.getElementById("p");
DRESSES.forEach(function(d,i){
  var c=document.createElement("div");c.className="card";
  c.innerHTML='<div class="img" style="background:conic-gradient(from '+(i*50)+'deg,'+d.colors.join(',')+','+d.colors[0]+')"></div><div class="body"><span class="tag"></span><h3></h3><p></p><strong></strong><button type="button">Order this dress</button></div>';
  c.querySelector(".tag").textContent=d.status;
  if(d.photo){c.querySelector(".img").style.cssText="background:url("+d.photo+") center/cover"}
  c.querySelector("h3").textContent=d.name;
  c.querySelector("p").textContent=d.desc;
  c.querySelector("strong").textContent=d.price;
  var b=c.querySelector("button");
  if(d.status==="sold"){b.disabled=true;b.textContent="Sold"}
  b.onclick=function(){sel.value=d.name;document.getElementById("order").scrollIntoView()};
  g.appendChild(c);
  if(d.status!=="sold"){var o=document.createElement("option");o.textContent=d.name;sel.appendChild(o)}
});
var o=document.createElement("option");o.textContent="Custom dress";sel.appendChild(o);
document.getElementById("wa").href="https://wa.me/"+CONFIG.whatsapp;
document.getElementById("f").onsubmit=function(e){
  e.preventDefault();
  var t="Hi "+CONFIG.brand+"! I'm "+n.value+". Interested in: "+p.value+". Size: "+s.value+". Notes: "+m.value;
  window.open("https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(t),"_blank");
};
