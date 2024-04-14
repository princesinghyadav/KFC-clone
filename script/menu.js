
let  peri_periarr=[
   

    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/sm/D-PR00002144.jpg?ver=41.47",
        quantity:"5 Leg Pc & 2 Dips Bucket ",
        veg_nonveg:"veg",
        rupees:"₹  519",
        offer:"Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each) "
    },
    {
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/sm/D-PR00002319.jpg?ver=41.47 ",
        quantity:"Peri Peri 10 Pc Chicken Strips & 2 Dips ",
        veg_nonveg:"Non veg",
        rupees:" ₹ 499.05 ",
        offer:"Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002141.jpg?ver=41.47",
        quantity:"Peri Peri 10 Leg Pc & 4 Dips ",
        veg_nonveg:"Non veg",
        rupees:" ₹ 948.57 ",
        offer:"Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each) "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002158.jpg?ver=41.47",
        quantity:"  Peri Peri 6pc Chicken Strips",
        veg_nonveg:"Non veg",
        rupees:"  ₹ 299.05",
        offer:" Save 16% on 6 Spicy Peri Peri chicken boneless strips"
    }
]
 

//  catching elements of kfc-product element
let peri_peri= document.getElementById("peri-peri")
peri_peri.id="maindiv";
let valuesnack=document.getElementById("valuesnackerarr")

let  chickenbucket=document.getElementById("chickenbucket")

let  biryanibucket=document.getElementById("biryanibucket")

let  boxmeals=document.getElementById("boxmeals")
let  burgers =document.getElementById("burgers")

let snack=document.getElementById("snacks")

let  beverages=document.getElementById("beverages")

let chickensRolls=document.getElementById("chickenRoll")

//  function for only peri peri chicken 

function Showdata (peri_periarr){

  peri_peri.innerHTML="";
    let peri_peridib=peri_periarr.forEach((ele,i)=>{

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

let div_peri_addtocart=document.createElement("button")
div_peri_addtocart.className="peri_button";
div_peri_addtocart.innerHTML=" Add to Cart";

let div_peri_delete=document.createElement("button")
div_peri_delete.className="peri_button";
div_peri_delete.innerHTML="Delete";
div_peri_delete.addEventListener("click",function(){
    delete_div(i,peri_periarr)
})

 
div_peri.append(  div_peri_img ,div_peri_quantity,div_peri_veg_nonveg,div_peri_price,
div_peri_offer,div_peri_addtocart,div_peri_delete)
peri_peri.append(div_peri)


});


}

// delete div for peri peri chicken 
function delete_div(index,arrr){
    // console.log(index)
 arrr.splice(index,1);
// console.log(arrr);
 Showdata(arrr)
 
 }


//  array of product element 
 
let valuesnackerarr=[
 
        {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/sm/D-K617.jpg?ver=41.64 ",
        quantity:" Single Chicken Roll ",
        veg_nonveg:"Non veg",
        rupees:"₹119.05 ",
        offer:" Street style roll with single chicken strip, onions and two spicy sauce "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002348.jpg?ver=41.64 ",
        quantity:"Chicken Longer Burger & 2 Strips Combo  ",
        veg_nonveg:"Non veg",
        rupees:" ₹219.05 ",
        offer:" Longgg burger with crunchy chicken, onions & a punchy sauce , served with 2 peri peri chicken strips "
    },
    {
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K136.jpg?ver=41.64  ",
        quantity:" Regular Popcorn ",
        veg_nonveg:"Non veg",
        rupees:" ₹115.24 ",
        offer:"Signature bite-sized boneless chicken, with special spices  "
    },
 
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002301.jpg?ver=41.64 ",
        quantity:" 2 Veg Longer Burger ",
        veg_nonveg:"Veg",
        rupees:" ₹198.10 ",
        offer:"The really long burger with Veg Patty, Onion, Lettuce and two sauce  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K701.jpg?ver=41.64 ",
        quantity:"Chocolate Lava Cake  ",
        veg_nonveg:"Veg",
        rupees:"₹108.57  ",
        offer:" Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal "
    }
 
]

let chickenRollsarr=[
{
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002324.jpg?ver=41.64 ",
        quantity:" Classic Chicken Roll & Pepsi Combo ",
        veg_nonveg:"Non Veg",
        rupees:"₹176.19 ",
        offer:"  Our new Classic Chicken Roll served with Pepsi 475ml "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002325.jpg?ver=41.64 ",
        quantity:" Classic Chicken Roll Meal for 1 ",
        veg_nonveg:"Non Veg",
        rupees:" ₹339.05",
        offer:" Deal combo of 1 Classic Chicken Roll, Large Fries, 2 Dips & Pepsi 475ml  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002325.jpg?ver=41.64 ",
        quantity:" Double Chicken Roll & Pepsi Combo ",
        veg_nonveg:"Non Veg",
        rupees:"₹225.71 ",
        offer:" Our new Double Chicken Roll served with Pepsi 475ml  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002069.jpg?ver=41.64 ",
        quantity:"Double Chicken Roll Meal for 1  ",
        veg_nonveg:"Non Veg",
        rupees:"₹379.05 ",
        offer:" Deal combo of 1 Double Chicken Roll, Large Fries, 2 Dips & Pepsi 475ml  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K617.jpg?ver=41.64 ",
        quantity:"Double Chicken Roll  ",
        veg_nonveg:"Non Veg",
        rupees:" ₹168.57",
        offer:"KFC's take on the street style roll with double chicken strips, onions & spicy sauces   "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K617.jpg?ver=41.64 ",
        quantity:"Classic Chicken Roll  ",
        veg_nonveg:"Non Veg",
        rupees:" ₹119.05",
        offer:"KFC's take on the street style roll with single chicken strip, onions & spicy sauces"
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002068.jpg?ver=41.64 ",
        quantity:" Classic Chicken Roll Meal for 2 ",
        veg_nonveg:"Non Veg",
        rupees:"₹479.05 ",
        offer:" Deal combo of 2 Classic Chicken Rolls, Large Fries, 2 Dips & Pepsi 475ml  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002068.jpg?ver=41.64 ",
        quantity:" Double Chicken Roll Meal for 2 ",
        veg_nonveg:"Non Veg",
        rupees:" ₹548.57",
        offer:" Deal combo of 2 Classic Chicken Rolls, Large Fries, 2 Dips & Pepsi 475ml  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002315.jpg?ver=41.64 ",
        quantity:" 2 Classic Chicken Roll ",
        veg_nonveg:"Non Veg",
        rupees:"₹228.57 ",
        offer:"  Double the fun with 2 Classic Chicken Rolls "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002315.jpg?ver=41.64 ",
        quantity:"2 Double Chicken Roll  ",
        veg_nonveg:"Non Veg",
        rupees:"₹328.57 ",
        offer:" Double the fun with 2 Double Chicken Rolls  "
    },
]

let chickenbucketarr=[
{
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002228.jpg?ver=41.64   ",
        quantity:"The Allu Arjun Combo   ",
        veg_nonveg:"Non Veg",
        rupees:" ₹523.00₹448.57 ",
        offer:" Try Allus fav-1 Hot & Crispy Chicken,1 Smoky Red, Reg Popcorn, Spicy Fries & 1 Dip 20gm  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002340.jpg?ver=41.64  ",
        quantity:" All in One Bucket  ",
        veg_nonveg:"Non Veg",
        rupees:" ₹726.00₹548.57 ",
        offer:" 1 Leg, 1 Hot & Crispy, 2 Wings, 2 Strips, 1 Zinger Fillet, 3 Dips [20gm each] & 1 Pepsi 475 ml  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00000892.jpg?ver=41.64  ",
        quantity:" Bucket for Two  ",
        veg_nonveg:"Non Veg",
        rupees:"₹744.00₹599.05  ",
        offer:" Flat Rs. 115 off on combo of 2pc Hot & Crispy, 2 pc Smoky Red Chicken & Large Popcorn  "
    },
    {
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002169.jpg?ver=41.64   ",
        quantity:"Stay Home Bucket   ",
        veg_nonveg:"Non Veg",
        rupees:" ₹788.57 ",
        offer:"Save 21% on 4 Hot & Crispy, 4 Wings, 6 Peri Strips & 2 dips (20gm each)   "
    },
    {
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002155.jpg?ver=41.64   ",
        quantity:" Peri Peri 10 Leg pc & 4 Dips  ",
        veg_nonveg:"Non Veg",
        rupees:"₹924.76  ",
        offer:"Leg before any wicket! Save 27% on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)   "
    },
    {
        img:"   https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002156.jpg?ver=41.64",
        quantity:"Peri Peri 5 Leg Pc Meal  ",
        veg_nonveg:"Non Veg",
        rupees:"₹628.57  ",
        offer:" 5 Spicy Peri Peri Leg Pieces, 2 Dips (20gm each), 1 Med Fries & 1 Pepsi 475ml  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002157.jpg?ver=41.64  ",
        quantity:"  Big 12 ",
        veg_nonveg:"Non Veg",
        rupees:"₹1046.00₹748.57  ",
        offer:" Save 28% on 6pc Hot & Crispy Chicken, 6 Hot Wings & 2 dips (20gm each)  "
    },
    {
        img:" http//orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00000638.jpg?ver=41.64  ",
        quantity:"Ultimate Savings Bucket   ",
        veg_nonveg:"Non Veg",
        rupees:" ₹1094.00₹699.05 ",
        offer:" Save 35% on 4pc Hot & Crispy, 6 Wings, 4 Strips, 2 Dips (20gm each) & 1 Pepsi 475ml  "
    },
    {
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00000891.jpg?ver=41.64   ",
        quantity:" Big 8 ",
        veg_nonveg:"Non Veg",
        rupees:"₹1008.00₹684.76  ",
        offer:" Save 29% on this variety bucket of 4pc Hot & Crispy chicken & 4pc Smoky Red chicken  "
    },
    {
        img:" http//orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K445.jpg?ver=41.64  ",
        quantity:" Mingles Bucket Meal  ",
        veg_nonveg:"Non Veg",
        rupees:"₹499.05  ",
        offer:" Save Rs. 71 on 4 Wings,2 Peri Strips, Reg Popcorn, Med Fries & 1 Pepsi 475m  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K009.jpg?ver=41.64  ",
        quantity:" 6 pc Hot & Crispy Chicken  ",
        veg_nonveg:"Non Veg",
        rupees:"₹726.00₹628.57  ",
        offer:" Flat 10% off on 6pc signature Hot & crispy chicken  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002162.jpg?ver=41.64  ",
        quantity:" Mingles Bucket Meal  ",
        veg_nonveg:"Non Veg",
        rupees:"₹499.05  ",
        offer:" Save Rs. 71 on 4 Wings,2 Peri Strips, Reg Popcorn, Med Fries & 1 Pepsi 475ml  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K009.jpg?ver=41.64  ",
        quantity:" 8 pc Hot & Crispy Chicken  ",
        veg_nonveg:"Non Veg",
        rupees:"  ₹968.00₹768.57",
        offer:" Save Rs. 182 & get 8pc signature Hot & crispy chicken  "
    },
    {
        img:"  https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K445.jpg?ver=41.64 ",
        quantity:" 5pc Smoky Red Chicken  ",
        veg_nonveg:"Non Veg",
        rupees:" ₹655.00₹528.57 ",
        offer:" Flat 20% off on 5pc Smoky red grilled chicken  "
    },
    
]

let biryanibucketarr=[
{
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002166.jpg?ver=41.64  ",
        quantity:"Classic Biryani Combo   ",
        veg_nonveg:"Veg",
        rupees:" ₹740.00 ",
        offer:"  ₹740.00 "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002017.jpg?ver=41.64  ",
        quantity:" Smoky Grilled Biryani Combo  ",
        veg_nonveg:"Non Veg",
        rupees:" ₹740.00 ",
        offer:" Large Biryani rice with 2 Smoky Red, 2 Gravies, Med Popcorn & 1 Pepsi 475ml  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002052.jpg?ver=41.64  ",
        quantity:" Popcorn Biryani Combo  ",
        veg_nonveg:"Non Veg",
        rupees:" ₹690.48 ",
        offer:" Large Biryani & Chicken Popcorn, 2 Spicy Gravies, 4 Wings & 1 Pepsi 475ml  "
    },
    {
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K626.jpg?ver=41.64   ",
        quantity:" Classic Chicken Biryani Bucket (Large  ",
        veg_nonveg:"Non Veg",
        rupees:" ₹475.24 ",
        offer:" Large portions of Biryani rice served with 2 pc Hot & Crispy Chicken & 2 Gravies  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K627.jpg?ver=41.64  ",
        quantity:" Smoky Grilled Biryani Bucket (Large  ",
        veg_nonveg:"Non Veg",
        rupees:"₹475.24  ",
        offer:" Large portions of Biryani rice served with 2 pc Smoky Red Chicken & 2 Gravies  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K623.jpg?ver=41.64  ",
        quantity:"Classic Chicken Biryani Bucket   ",
        veg_nonveg:"Non Veg",
        rupees:" ₹229.52 ",
        offer:" Hyderabadi style Biryani rice served with 1 pc Hot & Crispy & Spicy Gravy  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K624.jpg?ver=41.64  ",
        quantity:" Popcorn Chicken Biryani Bucket  ",
        veg_nonveg:"Non Veg",
        rupees:" ₹229.52 ",
        offer:" Hyderabadi style Biryani rice served with Popcorn & Spicy Gravy  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K625.jpg?ver=41.64  ",
        quantity:"Smoky Grilled Biryani Bucket   ",
        veg_nonveg:"Non Veg",
        rupees:" ₹229.52 ",
        offer:"Hyderabadi style Biryani rice served with 1 pc Smoky Red & Spicy Gravy   "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K622.jpg?ver=41.64  ",
        quantity:" Smoky Grilled Biryani Bucket  ",
        veg_nonveg:"Non Veg",
        rupees:" ₹229.52 ",
        offer:" Hyderabadi style Biryani rice served with 1 pc Smoky Red & Spicy Gravy  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K622.jpg?ver=41.64   ",
        quantity:"Veg Biryani Bucket   ",
        veg_nonveg:"Non Veg",
        rupees:" ₹199.05 ",
        offer:" Hyderabadi style Biryani rice served with Veg Patty & Spicy Gravy  "
    },
]

let boxmealsarr=[
{
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002167.jpg?ver=41.64   ",
        quantity:" All Chicken Box  ",
        veg_nonveg:"Non Veg",
        rupees:"₹189.52  ",
        offer:" A Box with your favorites! Get 1 pc Hot & Crispy, 2 Hot Wings & 1 Chicken Strip at a deal price  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00001003.jpg?ver=41.64  ",
        quantity:"  Zinger Tandoori Box ",
        veg_nonveg:"Non Veg",
        rupees:" ₹313.33 ",
        offer:" A deal for Tandoori lovers : Get 1 Tandoori Zinger, 2 Hot Wings, 1 Veg Patty & 1 Pepsi 475ml  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00001039.jpg?ver=41.64  ",
        quantity:" Popcorn Biryani Box  ",
        veg_nonveg:"Veg",
        rupees:"₹328.57  ",
        offer:"Biryani lovers unite : Get 1 Popcorn Biryani Bucket with gravy, 2 Hot Wings & 1 Pepsi 475ml  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00001004.jpg?ver=41.64  ",
        quantity:" Veg Zinger Box  ",
        veg_nonveg:"Veg",
        rupees:"₹313.33  ",
        offer:" A deal for the Veg Zinger lovers : Get 1 Veg Zinger, 2 Veg Patties & 1 Pepsi 475ml  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00001038.jpg?ver=41.64  ",
        quantity:" Veg Biryani Box  ",
        veg_nonveg:"Non Veg",
        rupees:" ₹279.05 ",
        offer:"Biryani lovers unite : Get 1 Veg Biryani Bucket with gravy, 1 Veg Patty & 1 Pepsi 475ml  "
    },
]

let burgersarr=[
{
        img:"  https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00000974.jpg?ver=41.64 ",
        quantity:" Family Feast  ",
        veg_nonveg:"Non Veg",
        rupees:"₹859.05  ",
        offer:" Family Deal of 3 chicken zingers, med popcorn, med fries & 1 Pepsi 475ml  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00001025.jpg?ver=41.64  ",
        quantity:"2 Chicken Krisper Burgers   ",
        veg_nonveg:"Non Veg",
        rupees:"  ₹248.57 ",
        offer:" 2 delicious chicken value burgers - at a deal price  "
    },
    {
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00000956.jpg?ver=41.64   ",
        quantity:" Mixed Zinger Doubles  ",
        veg_nonveg:"Non Veg",
        rupees:" ₹368.57 ",
        offer:" Best-seller combo of classic chicken zinger & tandoori zinger  "
    },
    {
        img:"  https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00001023.jpg?ver=41.64 ",
        quantity:" 2 Veg Krispers Meal  ",
        veg_nonveg:"veg",
        rupees:" ₹288.57 ",
        offer:" 2 veg value burgers, crispy medium fries & 2 delicious dips (20 gm each) at a deal price  "
    }
     
]

let snacks=[
{
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K701.jpg?ver=41.64  ",
        quantity:"Chocolate Lava Cake   ",
        veg_nonveg:"Veg",
        rupees:" ₹108.57 ",
        offer:" Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00000789.jpg?ver=41.64  ",
        quantity:"  Chicken & Fries Bucket ",
        veg_nonveg:"Non Veg",
        rupees:" ₹299.05 ",
        offer:" Crowd-favorite combo of 2pc Hot & Crispy chicken with Medium Fries  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K264.jpg?ver=41.64  ",
        quantity:" Mingles Bucket  ",
        veg_nonveg:"Non Veg",
        rupees:" ₹339.05 ",
        offer:" Crowd-favorite combo of 2pc Hot & Crispy chicken with Medium Fries  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K137.jpg?ver=41.64  ",
        quantity:"  Medium Popcorn ",
        veg_nonveg:"Non Veg",
        rupees:" ₹168.57 ",
        offer:" Signature bite-sized boneless chicken, with special spices  "
    },
    {
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K444.jpg?ver=41.64   ",
        quantity:"2 pcs Smoky Red Chicken   ",
        veg_nonveg:"Non Veg",
        rupees:"₹248.57  ",
        offer:" Spicy, red, grilled chicken  "
    },
     
    
 
]

let beveragesarr=[
{
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K350.jpg?ver=41.64  ",
        quantity:"Pepsi 475ml PET   ",
        veg_nonveg:"Veg",
        rupees:"₹57.14  ",
        offer:"Pepsi 475ml PET   "
    },
    {
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K485.jpg?ver=41.64   ",
        quantity:"Pepsi Can 300 ml   ",
        veg_nonveg:"Veg",
        rupees:"₹57.14  ",
        offer:" Pepsi Can 300 ml  "
    },
    {
        img:"  https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K487.jpg?ver=41.64 ",
        quantity:" 7UP Can 300 ml  ",
        veg_nonveg:"Veg",
        rupees:" ₹57.14 ",
        offer:" 7UP Can 300 ml  "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K488.jpg?ver=41.64  ",
        quantity:"Mirinda Can 300 ml   ",
        veg_nonveg:"Veg",
        rupees:" ₹57.14",
        offer:"Mirinda Can 300 ml   "
    },
    {
        img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-K486.jpg?ver=41.64  ",
        quantity:"  Pepsi Black Can 300 ml ",
        veg_nonveg:"Non Veg",
        rupees:" ₹57.14 ",
        offer:" Pepsi Black Can 300 ml  "
    },
]







//  functin for 3 colomn 

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

let btndiv=document.createElement("div")
btndiv.id="divbtn"
let div_peri_addtocart=document.createElement("button")
div_peri_addtocart.className="peri_button";
div_peri_addtocart.innerHTML=" Add to Cart";
div_peri_addtocart.addEventListener("click", function(){
    cartfunc(product,i);
})

let div_peri_delete=document.createElement("button")
div_peri_delete.className="peri_button";
div_peri_delete.innerHTML="Delete";
div_peri_delete.addEventListener("click",()=>{
    deletediv(i,product,divname)
})

 btndiv.append(div_peri_addtocart,div_peri_delete)
div_peri.append(  div_peri_img ,div_peri_quantity,div_peri_veg_nonveg,div_peri_price,
div_peri_offer,btndiv)
  divname.append(div_peri)


});


}
//  function for cart page
let localdata=[];
 function savedatatolocal(){
localStorage.setItem("localdata", JSON.stringify(localdata))

}

function cartfunc(arr,index){

    let obj={
       img:arr[index].img ,
       quantity:arr[index].quantity,
       veg_nonveg:arr[index].veg_nonveg ,
       rupees: arr[index].rupees,
       offer: arr[index].offer,
    }
 localdata.push(obj);
 console.log(localdata)
 savedatatolocal();

}

 


//   function for search product

 function searchProduct() {
    let searchInput = document.getElementById("kfc-product-btn");
 var  valuesn=  valuesnackerarr.filter((element)=>{
    return (element.veg_nonveg.toLowerCase()===searchInput.value.toLowerCase())
 })

 var   chickroll= chickenRollsarr.filter((element)=>{
    return (element.veg_nonveg.toLowerCase()===searchInput.value.toLowerCase())
 })

 var  chickbuck =  chickenbucketarr.filter((element)=>{
    return (element.veg_nonveg.toLowerCase()===searchInput.value.toLowerCase())
 })
 var   birbuck=  biryanibucketarr.filter((element)=>{
    return (element.veg_nonveg.toLowerCase()===searchInput.value.toLowerCase())
 })
 var   box=  boxmealsarr.filter((element)=>{
    return (element.veg_nonveg.toLowerCase()===searchInput.value.toLowerCase())
 })
 var   burge=  burgersarr.filter((element)=>{
    return (element.veg_nonveg.toLowerCase()===searchInput.value.toLowerCase())
 })
 var   snak=  snacks.filter((element)=>{
    return (element.veg_nonveg.toLowerCase()===searchInput.value.toLowerCase())
 })
 var   beverag=  beveragesarr.filter((element)=>{
    return (element.veg_nonveg.toLowerCase()===searchInput.value.toLowerCase())
 })
 var   peri_=  peri_periarr.filter((element)=>{
   
    return (element.veg_nonveg.toLowerCase()===searchInput.value.toLowerCase())
 
 })
 
 Showdata(peri_);
 Showdata3colom(valuesn,valuesnack);
 Showdata3colom(chickroll,chickensRolls);
 Showdata3colom( chickbuck,chickenbucket);
 Showdata3colom(birbuck,biryanibucket);
 Showdata3colom(box,boxmeals);
 Showdata3colom(burge,burgers);
 Showdata3colom(snak,snack);
 Showdata3colom(beverag,beverages);


}



//  catching of seacrch product 

let searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", searchProduct);

//  delete the div 
function deletediv(index,arrr,divname){
    // console.log(index)
 arrr.splice(index,1);
// console.log(arrr);
 Showdata3colom(arrr,divname)
 
 }


//  calling of all function
Showdata(peri_periarr);

Showdata3colom(valuesnackerarr,valuesnack);

Showdata3colom(chickenRollsarr,chickensRolls);
Showdata3colom(chickenbucketarr,chickenbucket)
Showdata3colom(biryanibucketarr,biryanibucket)
Showdata3colom(boxmealsarr,boxmeals )
Showdata3colom( burgersarr,burgers  )
Showdata3colom(snacks, snack )
Showdata3colom( beveragesarr,beverages) 

 