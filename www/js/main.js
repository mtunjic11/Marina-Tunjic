
posaljiZahtjev();

let io=localStorage.getItem("kar");//već sortiran po starosti
object=JSON.parse(io);//
//prikaziMacice(object);

let mainImg = 0;
let prevImg = 3;
let nextImg = 1;

function loadGallery() {
  imgObject=object.slice(0,4);
  modal.style.display = "none";

  let mainView = document.getElementById("mainView");
  mainView.style.background = " url(" + imgObject[mainImg].Image + ") center / 600px 450px no-repeat";
  let x=document.getElementById("w3");
  x.setAttribute("class","text")
  x.innerHTML=imgObject[mainImg].name;
  
  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg].Image + ") center / 600px 450px no-repeat";

  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg].Image + ") center / 600px 450px no-repeat";
  startCountRight();

}

window.onclick = function(event) {
  document.getElementById("linkTag").addEventListener("click",prikaziModal);

  if (event.target == modal) {

    modal.style.display = "none";
  }
}

var t;
var timer_is_on = 0;

function timedCount() {

  t = setTimeout(timedCount, 1000);
}

function startCountRight() {
  if (!timer_is_on) {
    timer_is_on = 1;
    //timedCount();
    scrollRight();
  }
}
function startCountLeft() {
  if (!timer_is_on) {
    timer_is_on = 1;
    //timedCount();
    scrollLeft();
  }
}

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
}

function scrollRight() {
  imgObject=object.slice(0,4);
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  t = setTimeout(scrollRight, 1000);
  loadGallery();
};

function scrollLeft() {
  imgObject=object.slice(0,4);
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  t = setTimeout(scrollLeft, 1000);
  loadGallery();
  
};

document.getElementById("navRight").addEventListener("click", startCountRight);
document.getElementById("navLeft").addEventListener("click", startCountLeft);

var modal = document.getElementById("myModal");
//document.getElementById("linkTag").addEventListener("click",handler1);
//document.getElementById("linkTag").addEventListener("click",prikaziModal);

function prikaziModal() {
    modal.style.display = "flex";
    document.createElement("div").className = "moda";
    let zat=document.getElementById("_close");
    //popravit zatvori button
    //zatvori.setAttribute("class","zatvori");
    //zatvori.innerHTML="x";
    //zatvori.addEventListener("click",zatvorii);
    moda.innerHTML = "<h1> IME: "+imgObject[mainImg].name+" "+"<br>DOB: "+imgObject[mainImg].starost+"<br> BOJA: "+imgObject[mainImg].boja+" </h1>";
    var btn=document.createElement("button");
    btn.setAttribute("class","_udomi");
    btn.textContent="Udomi";
    btn.addEventListener("click",Udomi)
    zat.addEventListener("click",handler1)

    moda.appendChild(zat);
    moda.appendChild(btn);
    modal.appendChild(moda);
      
  }
  function handler1(){
    document.getElementById("linkTag").removeEventListener("click",prikaziModal);
    modal.style.display="none";
  }

 
  var btns=document.querySelectorAll("._udomi");
  btns.forEach(btn=>btn.addEventListener('click',function(){Udomi(btn)}));  
  
  function Udomi(){
    var x=confirm("Jeste li sigurni da želite udomiti mačića "+imgObject[mainImg].name+"?");
    if(x==true){
      modal.style.display = "none";

      imgObject=object.slice(0,4);
      imgObject=imgObject.filter((obj)=>obj.name!=imgObject[mainImg].name);//sad ih ima3
      object=object.filter((obj)=>obj.name!=object[mainImg].name);
      imgObject.push(object[0]);

      //biše istog mačića iz kartica
      let ls=localStorage.getItem("kar");
      lista=JSON.parse(ls);

      lista=lista.filter((obj)=>obj.name!=lista[mainImg].name);
      prikaziMacice(object);  
      loadGallery();   
  }else{
    return false;
  }
}
loadGallery();



