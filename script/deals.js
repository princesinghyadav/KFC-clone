let list=document.getElementById("national-offers-list")
 

let noffersarr=[
{
  img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg?ver=41.8 ",
  offers:" Free Chicken zinger...",
  offrs2:" 1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for"
},
{
  img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/ADDCHK99.jpg?ver=41.8",
  offers:" Add 2 Pc Hot n Crispy",
  offrs2:"Add 2 Pc Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd "
},
{
  img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/BIGSAVE.jpg?ver=41.8 ",
  offers:"Upto Rs 100 off on min... ",
  offrs2:" Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order onwards for signed in user."
},
{
  img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/PHP75.jpg?ver=41.8 ",
  offers:" Get flat Rs.75 off on a cart...",
  offrs2:"Get flat Rs.75 off on a cart value of 599 or above "
},
{
  img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/YAYPOP.jpg?ver=41.8 ",
  offers:" Free Popcorn (Med) on a",
  offrs2:"Free Popcorn (Med) on a cart value of 499 or more. Friday only."
},
{
  img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/YAYCHKN.jpg?ver=41.8",
  offers:"Free 1pc Chicken on a cart ",
  offrs2:"Free 1pc Chicken on a cart value of 499 or more. Friday only. "
},
{
  img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/YAYSTRIPS.jpg?ver=41.8 ",
  offers:"Free 3pc Strips on a cart ",
  offrs2:"Free 3pc Strips on a cart value of 499 or more. Friday only. "
},
{
  img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/YAYVZINGER.jpg?ver=41.8 ",
  offers:"Free Veg Zinger on a cart ",
  offrs2:"Free Veg Zinger on a cart value of 499 or more. Friday only. "
},
{
  img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/YAYFRIES.jpg?ver=41.8",
  offers:" Free Fries (Med) on a cart",
  offrs2:"Free Fries (Med) on a cart value of 499 or more. Friday only. "
},
 
]

let show=[
  {
    
  img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYVZINGER.jpg?ver=41.8 ",
  offers:" Free Veg Zinger on a",
  offrs2:"Free Popcorn (Med) on a cart value of 499 or more. Friday only. "
  },
  {
    
    img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/YAYFRIES.jpg?ver=41.8 ",
    offers:"Free Fries (Med) on a cart value...",
    offrs2:"Free Fries (Med) on a cart value of 499 or more. Friday only."
    },
    {
    
      img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/VEGZINGER.jpg?ver=41.8",
      offers:" 1 Pc free Veg Zinger on a cart",
      offrs2:"1 Pc free Veg Zinger on a cart value of 499 or above on first order. Only for registered users "
      },
      {
    
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/YAYZINGER.jpg?ver=41.8",
        offers:"Free Chicken Zinger on a cart",
        offrs2:"Free Chicken Zinger on a cart value of 499 or more. Friday only"
        },
        {
    
          img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/FREEROLL.jpg?ver=41.8 ",
          offers:" Free Double chicken roll on a",
          offrs2:"Free Double chicken roll on a cart value of 999 or above. "
          }
]

function national (noffersarr){
 
let container= noffersarr.forEach((ele)=>{
let div_peri=document.createElement("div")
// list.innerHTML=""
div_peri.innerHTML=""
div_peri.className="classes"
let div_peri_img=document.createElement("img")
div_peri_img.src= ele.img;
div_peri_img.alt="chicken image";

let div_peri_quantity=document.createElement("h1")
div_peri_quantity.innerHTML= ele.offers;

let div_peri_veg_nonveg=document.createElement("p")
div_peri_veg_nonveg.innerHTML=ele.offrs2;

let div_peri_viewdetails=document.createElement("p")
div_peri_viewdetails.innerHTML= "view details";
let anchor=document.createElement("a")
anchor.href=" ";
anchor.appendChild(div_peri_viewdetails)

let div_peri_delete=document.createElement("button")
div_peri_delete.className="peri_button";
div_peri_delete.innerHTML="Apply ";
div_peri_delete.addEventListener("click",alertfunction)

div_peri.append(div_peri_img,div_peri_quantity,div_peri_veg_nonveg,anchor,div_peri_delete );
list.append(div_peri);

});
}


function showmore(){
national(show);
let sticky = document.getElementById("sticky");
 
}

function creatediv(event){

event.preventDefault()
console.log(event)
let targe=event.target;
let img= targe[0].value;
let h1= targe[1].value;
let p = targe[2].value;
console.log(img,h1,p);
let obj={
  img: img,
  offers:h1 ,
  offrs2: p,
}

noffersarr.push(obj)

national(noffersarr);
}


let form=document.querySelector("form")
form.addEventListener("submit",function (event){
  creatediv(event)
})

function alertfunction(){
  alert("This is a clone Website of KFC made by students to explore their skills  ")
}



national(noffersarr);
