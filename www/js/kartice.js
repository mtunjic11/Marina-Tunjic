posaljiZahtjev();
function posaljiZahtjev(){
    var zahtjev = new XMLHttpRequest();
    zahtjev.open('GET','../../www/data.json',true);
    zahtjev.onreadystatechange = primiOdgovor;
    zahtjev.send();
  }
 

  
  function primiOdgovor(zahtjev) {
      var odg = JSON.parse(zahtjev.currentTarget.response)
      odgovor=odg.sort((a, b) => (a.starost > b.starost) ? 1 : -1);
      jsonstring=JSON.stringify(odgovor);
      localStorage.setItem("kar",jsonstring);
      }
      

let ioo=localStorage.getItem("kar");
odgovor=JSON.parse(ioo);
temp=odgovor;
prikaziMacice(temp);

function prikaziMacice(param){
  document.getElementById("album-rotator").innerHTML="";
  for( var i = 0; i < 20; i++){ // 
    var albumdetail=document.createElement("span");
    albumdetail.setAttribute("class","album-details");
  
    var icon=document.createElement("span");
    icon.setAttribute("class","icon");
    icon.style.background="url(" +param[i].Image+") center / 260px 230px no-repeat";
    var subtex=document.createElement("span");
    subtex.setAttribute("class","subtext");
    subtex.innerHTML="Ime: "+ param[i].name +"<br>Dob: "+param[i].starost+"m"+"<br>Boja: "+param[i].boja;
    var btn=document.createElement("button");
    btn.setAttribute("class","udomi");
    btn.setAttribute("value",i);
    btn.textContent="Udomi";
    albumdetail.appendChild(icon);
    albumdetail.appendChild(subtex);
    albumdetail.appendChild(btn);
  
    var albumitem=document.createElement("div");
    albumitem.setAttribute("class","album-item");
    albumitem.appendChild(albumdetail);
  
    document.getElementById("album-rotator").appendChild(albumitem);
    
    }
    
    
      param=param.sort((firstItem, secondItem) => firstItem.starost - secondItem.starost);
  
      var ucitaj=document.createElement("button");
      ucitaj.setAttribute("class","prikaziVise");
      ucitaj.setAttribute("id","ucitaj");
      ucitaj.textContent="Prikaži više";
      document.getElementById("album-rotator").appendChild(ucitaj);
  
      ucitaj.onclick = function(){
        document.getElementById("ucitaj").style.display = "none";
        document.getElementById("album-rotator").innerHTML="";

        for( var i = 0; i < param.length; i++){ 
          var albumdetail=document.createElement("span");
          albumdetail.setAttribute("class","album-details");
        
          var icon=document.createElement("span");
          icon.setAttribute("class","icon");
          icon.style.background="url(" +param[i].Image+") center / 260px 230px no-repeat";
          var subtex=document.createElement("span");
          subtex.setAttribute("class","subtext");
          subtex.innerHTML="Ime: "+ param[i].name +"<br>Dob: "+param[i].starost+"m"+"<br>Boja: "+param[i].boja;
          var btn=document.createElement("button");
          btn.setAttribute("value",i);
          btn.setAttribute("class","udomi");
          btn.textContent="Udomi";
          albumdetail.appendChild(icon);
          albumdetail.appendChild(subtex);
          albumdetail.appendChild(btn);
        
          var albumitem=document.createElement("div");
          albumitem.setAttribute("class","album-item");
          albumitem.appendChild(albumdetail);
        
          document.getElementById("album-rotator").appendChild(albumitem);
          
        }
        console.log("dsafsdf");
  temp=param;
  var btns=document.querySelectorAll(".udomi");
  btns.forEach(btn=>btn.addEventListener('click',function(){_udomi(btn)}));
  
      }
      //temp=odgovor; 
      
  console.log("dsafsdf");
  temp=param;
  var btns=document.querySelectorAll(".udomi");
  btns.forEach(btn=>btn.addEventListener('click',function(){_udomi(btn)}));
  
  }

  

function _udomi(btn){
  var x=confirm("Jeste li sigurni da želite udomiti mačića "+temp[btn.value].name+"?");
  if (x==true){
    
    imgObject=object.slice(0,4);
    imgObject=imgObject.filter((obj)=>obj.name!=temp[btn.value].name);//sad ih ima3
      object=object.filter((obj)=>obj.name!=temp[btn.value].name);
      imgObject.push(object[0]);
      loadGallery();
      temp=temp.filter((obj)=>obj.name!=temp[btn.value].name);
      prikaziMacice(temp);
  }
  else{
    return false;
  }
 
}

  var checks=document.querySelectorAll('input[type=checkbox][name="dodatnifilter"]');
  checks.forEach(check => check.addEventListener('change',()=>myfunction()));
  var radios = document.querySelectorAll('input[type=radio][name="sort"]');
  var radioss = document.querySelectorAll('input[type=radio][name="smjer"]');
  radios.forEach(radio => radio.addEventListener('change', () => myfunc()));
  radioss.forEach(radio => radio.addEventListener('change', () => myfunc()));
  

  function myfunction(){
    if(document.getElementById("3m").checked){
      temp=temp.filter((a)=>a.starost<3);
      prikaziMacice1(temp.filter((a)=>a.starost<3));
      
    }
    else if(document.getElementById("6m").checked){
      temp=temp.filter((a)=>a.starost<6);
      prikaziMacice1(temp);
      
    }
    else if(document.getElementById("cb").checked){
      temp=temp.filter((a)=>a.boja === "crna");
      prikaziMacice1(temp);
      
    }
    else if(document.getElementById("6m").checked && document.getElementById("cb").checked)
    {
      temp=temp.filter(function(a){return a.starost<6 && a.boja==="crna"})
      prikaziMacice1(temp);
      
    }
    else{
      temp=odgovor;
      prikaziMacice1(odgovor);
    }
  }
  function myfunc(){
    if(document.getElementById("smjer1").checked && document.getElementById("sort1").checked){
      prikaziMacice(temp.sort((a, b) => (a.name > b.name) ? 1 : -1));
      temp=temp.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } 
    else if(document.getElementById("smjer1").checked && document.getElementById("sort").checked){
      prikaziMacice(temp.sort((firstItem, secondItem) => firstItem.starost - secondItem.starost));
      temp=temp.sort((firstItem, secondItem) => firstItem.starost - secondItem.starost);
    } 
    else if(document.getElementById("smjer").checked && document.getElementById("sort1").checked){
      prikaziMacice(temp.sort((a, b) => (a.name < b.name) ? 1 : -1));
      temp=temp.sort((a, b) => (a.name < b.name) ? 1 : -1);
    } 
    else if(document.getElementById("smjer").checked && document.getElementById("sort").checked){
      prikaziMacice(temp.sort((firstItem, secondItem) => secondItem.starost - firstItem.starost));
      temp=temp.sort((firstItem, secondItem) => secondItem.starost - firstItem.starost)
    }
    else{
      console.log("ništa");
    }
    
  }

function pretrazi() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  var ar=[];
  for (i = 0; i < object.length; i++) { 
      if (object[i].name.toLowerCase().includes(input)) {
        ar.push(object[i]);
        
      }
      temp=ar;
  }
  
  
  prikaziMacice1(temp);
  
  
}
function prikaziMacice1(param){
  document.getElementById("album-rotator").innerHTML="";
  for( var i = 0; i < param.length; i++){ // 
    var albumdetail=document.createElement("span");
    albumdetail.setAttribute("class","album-details");
  
    var icon=document.createElement("span");
    icon.setAttribute("class","icon");
    icon.style.background="url(" +param[i].Image+") center / 260px 230px no-repeat";
    var subtex=document.createElement("span");
    subtex.setAttribute("class","subtext");
    subtex.innerHTML="Ime: "+ param[i].name +"<br>Dob: "+param[i].starost+"m"+"<br>Boja: "+param[i].boja;
    var btn=document.createElement("button");
    btn.setAttribute("class","udomi");
    btn.setAttribute("value",i);
    btn.textContent="Udomi";
    albumdetail.appendChild(icon);
    albumdetail.appendChild(subtex);
    albumdetail.appendChild(btn);
  
    var albumitem=document.createElement("div");
    albumitem.setAttribute("class","album-item");
    albumitem.appendChild(albumdetail);
  
    document.getElementById("album-rotator").appendChild(albumitem);
    
    }
    temp=param;
  var btns=document.querySelectorAll(".udomi");
  btns.forEach(btn=>btn.addEventListener('click',function(){_udomi(btn)}));
  }