/* ======================================
   SEARCH FUNCTION
====================================== */

function searchEquipment(){

let input = document.getElementById("search")

if(!input) return

let value = input.value.toLowerCase()

let cards = document.querySelectorAll(".equipment-card")

cards.forEach(card => {

let text = card.innerText.toLowerCase()

if(text.includes(value)){
card.style.display = "block"
}else{
card.style.display = "none"
}

})

}


/* ======================================
   PROFILE PAGE FUNCTIONS
====================================== */

function showFarmerLogin(){

let farmer = document.getElementById("farmerLogin")
let owner = document.getElementById("ownerLogin")

if(farmer) farmer.style.display="block"
if(owner) owner.style.display="none"

}

function showOwnerLogin(){

let farmer = document.getElementById("farmerLogin")
let owner = document.getElementById("ownerLogin")

if(owner) owner.style.display="block"
if(farmer) farmer.style.display="none"

}

function loginFarmer(){

let login = document.getElementById("farmerLogin")
let dash = document.getElementById("farmerDash")

if(login) login.style.display="none"
if(dash) dash.style.display="block"

alert("Farmer Login Successful")

}

function loginOwner(){

let login = document.getElementById("ownerLogin")
let dash = document.getElementById("ownerDash")

if(login) login.style.display="none"
if(dash) dash.style.display="block"

alert("Owner Login Successful")

}

function toggleSection(id){

let sections = document.querySelectorAll(".section-box")

sections.forEach(sec=>{
sec.style.display="none"
})

let target = document.getElementById(id)

if(target) target.style.display="block"

}

function logoutUser(){
location.reload()
}

function farmerLogin(){

window.location.href="dashboards/farmer.html"

}

function ownerLogin(){

window.location.href="dashboards/owner.html"

}



//stay loggedin
/* ===== Save role and redirect ===== */

function farmerLogin(){
localStorage.setItem("krishix_role","farmer")
window.location.href="dashboards/farmer.html"
}

function ownerLogin(){
localStorage.setItem("krishix_role","owner")
window.location.href="dashboards/owner.html"
}

/* ===== Auto redirect if already logged ===== */

function checkLogin(){

const role = localStorage.getItem("krishix_role")

if(role === "farmer"){
window.location.href="dashboards/farmer.html"
}

if(role === "owner"){
window.location.href="dashboards/owner.html"
}

}

/* ===== Logout ===== */

function logoutUser(){
localStorage.removeItem("krishix_role")
window.location.href="../profile.html"
}

function getUserLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(showPosition);

}else{

alert("Geolocation not supported");

}

}

function showPosition(position){

const userLat = position.coords.latitude;
const userLon = position.coords.longitude;

console.log("User location:", userLat, userLon);

}

const equipments = [

{
name:"Tractor",
lat:22.3072,
lon:73.1812,
price:"1500"
},

{
name:"Sprayer",
lat:22.2950,
lon:73.1800,
price:"300"
},

{
name:"Rotavator",
lat:23.0225,
lon:72.5714,
price:"900"
}

]

function getDistance(lat1, lon1, lat2, lon2){

const R = 6371;

const dLat = (lat2-lat1) * Math.PI/180;
const dLon = (lon2-lon1) * Math.PI/180;

const a =
Math.sin(dLat/2) * Math.sin(dLat/2) +
Math.cos(lat1*Math.PI/180) *
Math.cos(lat2*Math.PI/180) *
Math.sin(dLon/2) * Math.sin(dLon/2);

const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

return R * c;

}

function findNearest(userLat,userLon){

equipments.forEach(eq=>{

eq.distance = getDistance(userLat,userLon,eq.lat,eq.lon);

});

equipments.sort((a,b)=>a.distance-b.distance);

console.log("Nearest equipment:",equipments);

}

function showPosition(position){

const userLat = position.coords.latitude;
const userLon = position.coords.longitude;

findNearest(userLat,userLon);

}

