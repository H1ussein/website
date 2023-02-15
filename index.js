//add and remove menu
let clicker = document.getElementById('clicker');
let menu = document.getElementById('menu');
let c = true;
clicker.onclick = function(){
    if(c == true){
      menu.style.right="-37px";
      menu.style.display="flex";
      c = false;
    }else{
        menu.style.right="-437px";
        menu.style.display="none";
        c = true;
    }
}
//add automatically 
let main_land = document.getElementById('main');
function addCaption(hcap,pcap,btncap){
let div = document.createElement("div");
div.style.cssText="width:100%; text-align:center; margin-top:20%; margin-bottom:5px; color:whitesmoke; z-index:2;";
let h1 = document.createElement('h1');
let p = document.createElement('p');
let btn = document.createElement("button");
btn.style.cssText="padding:10px; border:none; border-radius:15px; background-color:#40b7b7; color:whitesmoke;";

h1.appendChild(hcap);
p.appendChild(pcap);
btn.appendChild(btncap);
div.appendChild(h1);
div.appendChild(p);
div.appendChild(btn);
main_land.appendChild(div);
return;
}
//main function
function main (){
    let h1_landing = document.createTextNode("مرحباً بك في منصة مكاتب");
    let p_landing = document.createTextNode("منصة مكاتب هي منصة يومية تعمل على مساعدتك في الحصول على خدمات الكتابة من كتاب محترفين في إنشاء المحتوى لأي نوع من المقالات تريده");
    let btn_landing = document.createTextNode("اطلب الآن");
    addCaption(h1_landing,p_landing,btn_landing);
}
main();
//add overly to services
let img = document.querySelectorAll("#img-sec");
let over = document.querySelectorAll("#opacity");
for(let i=0; i<img.length ; i++){
 img[i].onmouseenter = function (){
    over[i].style.cssText=" visibility: visible; transition: 0.2s visibility ease-in-out;";
 }
 img[i].onmouseleave = function (){
    over[i].style.cssText=" visibility: hidden;";
 }
}
//show and hide caption for questions
let question = document.querySelectorAll(".question");
let caption = document.querySelectorAll(".caption");
let clicked = true;
for(let i=0; i< question.length; i++){
    question[i].onclick = function(){
           caption[i].style.cssText="width:100%; display:block;";
        }
    question[i].onmouseleave = function(){
        caption[i].style.cssText = "display:none";
    }
}
// to top
topUP = document.getElementById("toTop");
window.onscroll = function(){
    console.log(window.scrollY);
    if(window.scrollY >1 ){
     topUP.style.right="10px";
    }else{
        topUP.style.right="-50px";
    }
}
//scroll to top
topUP.onclick = function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth",
    });
}