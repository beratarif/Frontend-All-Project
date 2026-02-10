const text = [
  "Frontend Developer",
  "UI Designer",
  "Web Enthusiast"
];

let index = 0;
let char = 0;
const speed = 90;
const el = document.getElementById("typing");

function type(){
  if (!el) return;
  if (char < text[index].length){
    el.textContent += texts[index][char++];
    setTimeout(type , speed);
  }
  else{
    setTimeout(erase, 1400);
  }
}

function erase(){
  if(char>0 ){
    el.textContent = texts[index].slice(0, --char);
    setTimeout(erase, speed / 2 );
  }else{
    index = (index+1)% texts.length;
    setTimeout(type,300);
  }
}

type();