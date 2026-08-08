const channels=[
 {name:"AnimeZone",icon:"🎌",desc:"Anime, actualités, sondages et analyses",members:"25.4K abonnés",url:"https://t.me/"},
 {name:"IA & Future",icon:"🤖",desc:"Intelligence artificielle et nouvelles technologies",members:"18.7K abonnés",url:"https://t.me/"},
 {name:"Otaku World",icon:"🍥",desc:"La communauté des passionnés d'anime",members:"14.2K abonnés",url:"https://t.me/"},
 {name:"Business Daily",icon:"💰",desc:"Business, entrepreneuriat et opportunités",members:"9.8K abonnés",url:"https://t.me/"},
 {name:"Gaming Hub",icon:"🎮",desc:"Actualités, astuces et nouveautés gaming",members:"8.1K abonnés",url:"https://t.me/"},
 {name:"Music Zone",icon:"🎵",desc:"Nouveautés musicales et découvertes",members:"6.5K abonnés",url:"https://t.me/"}
];
const categories=[["🎌","Anime"],["🎮","Gaming"],["🎵","Musique"],["🤖","IA"],["💰","Business"],["📚","Éducation"],["😂","Humour"],["📰","Actualités"]];

const $=s=>document.querySelector(s);
function card(c){
 return `<article class="channel">
   <div class="logo">${c.icon}</div>
   <div class="channel-info"><div class="channel-name">${c.name}</div><div class="channel-desc">${c.desc}</div><div class="members">👥 ${c.members}</div></div>
   <button class="join" onclick="window.open('${c.url}','_blank')">Voir</button>
 </article>`;
}
function render(list=channels){
 $("#trending").innerHTML=list.slice(0,3).map(card).join("")||'<div class="empty">Aucun canal trouvé.</div>';
 $("#newChannels").innerHTML=list.slice(3).map(card).join("")||'<div class="empty">Aucun canal trouvé.</div>';
}
$("#categories").innerHTML=categories.map(c=>`<button class="cat" onclick="filterCat('${c[1]}')"><div>${c[0]}</div><small>${c[1]}</small></button>`).join("");
function filterCat(name){ $("#searchInput").value=name; search(name); window.scrollTo({top:0,behavior:"smooth"}); }
function search(q){const term=q.trim().toLowerCase(); render(term?channels.filter(c=>(c.name+" "+c.desc).toLowerCase().includes(term)):channels)}
$("#searchInput").addEventListener("input",e=>search(e.target.value));

const modal=$("#modal");
$("#addBtn").onclick=()=>modal.classList.remove("hidden");
$("#closeModal").onclick=()=>modal.classList.add("hidden");
$("#closeModal2").onclick=()=>modal.classList.add("hidden");

function showProfile(){
 $("#main").classList.add("hidden"); $("#profileView").classList.remove("hidden");
 document.querySelectorAll(".nav-item").forEach(b=>b.classList.remove("active"));
}
function home(){
 $("#profileView").classList.add("hidden"); $("#main").classList.remove("hidden");
 document.querySelector('[data-nav="home"]').classList.add("active");
}
$("#profileBtn").onclick=showProfile;
$("#backHome").onclick=home;
document.querySelectorAll("[data-nav]").forEach(b=>b.onclick=()=>{
 if(b.dataset.nav==="profile") showProfile(); else home();
});
render();
