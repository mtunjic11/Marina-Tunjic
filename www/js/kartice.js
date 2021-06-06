
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
//udomljavanje mačića iz kartica
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

//sortiranje i filteri
  var checks=document.querySelectorAll('input[type=checkbox][name="dodatnifilter"]');
  checks.forEach(check => check.addEventListener('change',()=>myfunction()));
  var radio1 = document.querySelectorAll('input[type=radio][name="sort"]');
  var radio2 = document.querySelectorAll('input[type=radio][name="smjer"]');
  radio1.forEach(radio => radio.addEventListener('change', () => myfunc()));
  radio2.forEach(radio => radio.addEventListener('change', () => myfunc()));
  

  function myfunction(){
    var filter3m=document.getElementById("3m").checked;
    var filter6m=document.getElementById("6m").checked;
    var filtercb=document.getElementById("cb").checked;
    if(!(filter3m || filter6m || filtercb)){

      prikaziKartice(object);

    }
    else if(filter6m && !filter3m && !filtercb){
      temp=temp.filter((a)=>a.starost<6);
      console.log(temp);
      prikaziKartice(temp.filter((a)=>a.starost<6));
    }
    else if(filter3m && !filter6m && !filtercb){
      prikaziKartice(temp.filter((a)=>a.starost<3));
      temp=temp.filter((a)=>a.starost<3);
      console.log(temp);
    }
    else if(filtercb && !filter3m && !filter6m){   
      prikaziKartice(temp.filter((a)=>a.boja === "crna"));
      temp=temp.filter((a)=>a.boja === "crna");
    }
    else if(filter6m && filter3m && !filtercb){
      prikaziKartice(temp.filter((a)=>a.starost<3));
      temp=temp.filter((a)=>a.starost<3);
    }
    else if(filter6m && filtercb && !filter3m){
      prikaziKartice(temp.filter((a)=>a.starost<6&&a.boja==="crna"));
      temp=temp.filter((a)=>a.starost<6&&a.boja==="crna");
    }
    else if(filter3m && filtercb && !filter6m){
      prikaziKartice(temp.filter((a)=>a.starost<6&&a.boja==="crna"));
      temp=temp.filter((a)=>a.starost<3&&a.boja==="crna");
    }
    else if(filter3m && filtercb && filter6m){
      prikaziKartice(temp.filter((a)=>a.starost<6&&a.boja==="crna"&&a.starost<3));
      temp=temp.filter((a)=>a.starost<3&&a.boja==="crna"&&a.starost<3);
    }
    else
    {
      temp=object;
      prikaziKartice(object);
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
    
  }



function pretrazi() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  var ar=[];
  if(input.length==0)
  {
    temp=object;
    myfunction();
    prikaziKartice(temp);
  }
  else{
    console.log(temp);
    for (i = 0; i < temp.length; i++) { 
      if (temp[i].name.toLowerCase().includes(input)) {
        ar.push(temp[i]);
      }
      console.log(ar);
      //temp=ar;
      
    }
    prikaziKartice(ar);
  }
  }  


