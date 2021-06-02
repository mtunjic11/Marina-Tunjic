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
            
        console.log("dsafsdf");
        temp=param;
        var btns=document.querySelectorAll(".udomi");
        btns.forEach(btn=>btn.addEventListener('click',function(){_udomi(btn)}));
        
        }