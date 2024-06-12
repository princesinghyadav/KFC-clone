 
let cart =  document.getElementById("cart")

// function cartdataa(){
    let cartdat=JSON.parse(localStorage.getItem("cartdata"))
    // console.log(cartdat)
// }

// cartdataa()
console.log("locallll",cartdat)

function Showdata3colom(product,divname){
    divname.innerHTML="";
        let title=document.createElement("h1");
        title.textContent="  PERI PERI CHICKEN "
        let peri_peridib= product.forEach((ele,i)=>{
    
    let div_peri=document.createElement("div")
     
    div_peri.className="classs"
    let div_peri_img=document.createElement("img")
    div_peri_img.src= ele.img;
    div_peri_img.alt="chicken image";
     
    let div_peri_quantity=document.createElement("h5")
    div_peri_quantity.innerHTML= ele.quantity;
    
    let div_peri_veg_nonveg=document.createElement("p")
    div_peri_veg_nonveg.innerHTML=ele.veg_nonveg;
    
    let div_peri_price=document.createElement("h4")
    div_peri_price.innerHTML= ele.rupees;
    
    let div_peri_offer=document.createElement("p")
    div_peri_offer.innerHTML=ele.offer;
    
    // let btndiv=document.createElement("div")
    // btndiv.id="divbtn"
 

    let div_peri_delete=document.createElement("button")
    div_peri_delete.className="peri_button";
    div_peri_delete.innerHTML="Delete";
    div_peri_delete.addEventListener("click",()=>{
        deletediv(i,product,ele)
    })
    
    //  btndiv.append(div_peri_addtocart,div_peri_delete)
    div_peri.append(  div_peri_img ,div_peri_quantity,div_peri_veg_nonveg,div_peri_price,
    div_peri_offer ,div_peri_delete)
      divname.append(div_peri)
    
    
    });
}
function deletediv(index,arrr,ele){
arrr.splice(index,1);

localStorage.removeItem("arrr");


Showdata3colom(arrr,cart)

}

Showdata3colom(cartdat,cart)
