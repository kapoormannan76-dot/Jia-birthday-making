let current = 1;

function nextStep() {

document.getElementById("step"+current).classList.remove("active");

current++;

if(current<=3){

document.getElementById("step"+current).classList.add("active");

}

}

function confettiRain(){

for(let i=0;i<150;i++){

let heart=document.createElement("div");

heart.innerHTML=["💖","💕","💗","🎉","✨"][Math.floor(Math.random()*5)];

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-50px";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.transition="4s linear";

heart.style.zIndex="9999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="110vh";

heart.style.transform="rotate(720deg)";

},100);

setTimeout(()=>heart.remove(),4500);

}

alert("💖 Happy Birthday Jia! 💖");
}
