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
prikaziKartice(temp);



  

function _udomi(btn){
  var x=confirm("Jeste li sigurni da želite udomiti mačića "+temp[btn.value].name+"?");
  if (x==true){
    
    imgObject=object.slice(0,4);
    imgObject=imgObject.filter((obj)=>obj.name!=temp[btn.value].name);//sad ih ima3
      object=object.filter((obj)=>obj.name!=temp[btn.value].name);
      imgObject.push(object[0]);
      loadGallery();
      temp=temp.filter((obj)=>obj.name!=temp[btn.value].name);
      prikaziKartice(temp);
  }
  else{
    return false;
  }
 
}

  var checks=document.querySelectorAll('input[type=checkbox][name="dodatnifilter"]');
  checks.forEach(check => check.addEventListener('change',()=>myfunction()));
  var radio1 = document.querySelectorAll('input[type=radio][name="sort"]');
  var radio2 = document.querySelectorAll('input[type=radio][name="smjer"]');
  radio1.forEach(radio => radio.addEventListener('change', () => myfunc()));
  radio2.forEach(radio => radio.addEventListener('change', () => myfunc()));
  

  function myfunction(){
    if(document.getElementById("3m").checked){
      temp=temp.filter((a)=>a.starost<3);
      prikaziKartice1(temp.filter((a)=>a.starost<3));
      
    }
    else if(document.getElementById("6m").checked){
      temp=temp.filter((a)=>a.starost<6);
      prikaziKartice1(temp);
      
    }
    else if(document.getElementById("cb").checked){
      temp=temp.filter((a)=>a.boja === "crna");
      prikaziKartice1(temp);
      
    }
    else if(document.getElementById("6m").checked && document.getElementById("cb").checked)
    {
      temp=temp.filter(function(a){return a.starost<6 && a.boja==="crna"})
      prikaziKartice1(temp);
      
    }
    else{
      temp=odgovor;
      prikaziKartice1(odgovor);
    }
  }
  function myfunc(){
    if(document.getElementById("smjer1").checked && document.getElementById("sort1").checked){
      prikaziKartice(temp.sort((a, b) => (a.name > b.name) ? 1 : -1));
      temp=temp.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } 
    else if(document.getElementById("smjer1").checked && document.getElementById("sort").checked){
      prikaziKartice(temp.sort((firstItem, secondItem) => firstItem.starost - secondItem.starost));
      temp=temp.sort((firstItem, secondItem) => firstItem.starost - secondItem.starost);
    } 
    else if(document.getElementById("smjer").checked && document.getElementById("sort1").checked){
      prikaziKartice(temp.sort((a, b) => (a.name < b.name) ? 1 : -1));
      temp=temp.sort((a, b) => (a.name < b.name) ? 1 : -1);
    } 
    else if(document.getElementById("smjer").checked && document.getElementById("sort").checked){
      prikaziKartice(temp.sort((firstItem, secondItem) => secondItem.starost - firstItem.starost));
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
  
  
  prikaziKartice1(temp);
  
  
}
