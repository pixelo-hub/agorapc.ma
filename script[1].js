const products=[
{id:1,n:"Agora Starter",p:3999,img:"https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1000&q=85",s:"Ryzen 5 • 16 Go RAM • SSD NVMe • GPU dédiée"},
{id:2,n:"Agora Gaming",p:5499,img:"https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1000&q=85",s:"Ryzen 5 • 16 Go RAM • 1 To NVMe • GPU gaming"},
{id:3,n:"Agora Beast",p:7999,img:"https://images.unsplash.com/photo-1587202372583-49330a15584d?auto=format&fit=crop&w=1000&q=85",s:"CPU performant • 32 Go RAM • 1 To NVMe • GPU haut de gamme"}];
let cart=JSON.parse(localStorage.agoraCart||"[]");const money=n=>n.toLocaleString("fr-FR")+" DH";
products.forEach(p=>productsBox.innerHTML+=`<article class="card"><img src="${p.img}"><div><small>DISPONIBLE SUR COMMANDE</small><h3>${p.n}</h3><p>${p.s}</p><div class="price">${money(p.p)}</div><button class="btn" onclick="add(${p.id})">🛒 Ajouter au panier</button></div></article>`);
function save(){localStorage.agoraCart=JSON.stringify(cart);count.textContent=cart.reduce((a,x)=>a+x.q,0)}
function add(id){let x=cart.find(x=>x.id==id);x?x.q++:cart.push({id,q:1});save();openCart()}
function openCart(){items.innerHTML=cart.length?cart.map(x=>{let p=products.find(p=>p.id==x.id);return `<div class="row"><img src="${p.img}"><div><b>${p.n}</b><br>${x.q} × ${money(p.p)}</div><button onclick="del(${x.id})">Suppr.</button></div>`}).join(""):"<p>Panier vide.</p>";let t=cart.reduce((a,x)=>a+products.find(p=>p.id==x.id).p*x.q,0);total.textContent=money(t);cartEl.classList.remove("hide")}
const cartEl=document.getElementById("cart");
function del(id){cart=cart.filter(x=>x.id!=id);save();openCart()}function closeCart(){cartEl.classList.add("hide")}
function order(){if(!cart.length)return;details.value=cart.map(x=>{let p=products.find(p=>p.id==x.id);return `${p.n} x${x.q} — ${money(p.p*x.q)}`}).join(" | ");amount.value=money(cart.reduce((a,x)=>a+products.find(p=>p.id==x.id).p*x.q,0));closeCart();form.classList.remove("hide")}
function closeForm(){form.classList.add("hide")}save();