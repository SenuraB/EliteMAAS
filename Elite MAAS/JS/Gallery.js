function con1(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    document.getElementById("descriptionAndImageArea").innerHTML="<p><b>Cristiano Ronaldo's unbelivable bicycle kick was scorded against Juventus in the quarter finals of the UEFA champions league.It was also voted as UEFA's goal of the season. Juventus stadium rose to aplause the sensational bicycle kick which was scored by Cristiano Ronaldo.</b> </p>"           
  }
  function con2(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    document.getElementById("descriptionAndImageArea").innerHTML="<p><b>World's No.01 Novak Djokovic won his ninth Australian open title after dismanteling Daniil Madvedev.The Serberian claimed his 18th grand slam title at the Australian open 2021. He has never lost an Australian open final. </b></p>"          
  }
  function con3(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    document.getElementById("descriptionAndImageArea").innerHTML="<p> <b>2019 ICC Cricket world cup champions. Tropgy was lifted by England International cricket team.They faced New Zealand in the finals and won after an intense match which could not be decided even by a super over and the winner was decided by the most no of boundries. </b></p>"
  }
  function con4(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    document.getElementById("descriptionAndImageArea").innerHTML="<p><b>Michael Phelps won the highest no of medals by a single person in entire Olympics. His Olympics medals tally consists of 23 gold medals.He has featured in 05 olympic games 2004,2008,2012,2016. He is also the most decorated olympian of all time. </b></p>"
  }
  function con5(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    document.getElementById("descriptionAndImageArea").innerHTML="<p><b>Los Angeles Lakers earned their 17th NBA title by becoming champions in year 2020. Last time they won the NBA championship was back in 2010. The final was between Miami Heat and Los Angeles Lakers. </b></p>"
  }
  function con6(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    document.getElementById("descriptionAndImageArea").innerHTML="<p><b>The winners of UEFA champions league 2018 was non other than Real Madrid. It was their 3rd consecutive win in champions league finals. The Royal Whites has lifted 13 UCL Trophies which is the highest by an European Club.Cristiano Ronaldo was the top goal scorer in these winning champions league editions. The manager Zinedine Zidane was the backbone of the Royal Whites for the 3-peat.  </b></p>"
  }
  function ChangeBgColour(){
          var selectedColour=document.getElementById("backGroundColourOptions")[document.getElementById("backGroundColourOptions").selectedIndex].value;
              if(selectedColour==="#2e2e32"){
                  essContainer.style.backgroundColor="#2e2e32";
              }else if(selectedColour==="#39004d"){
                  essContainer.style.backgroundColor="#39004d";
              }else if(selectedColour==="#b30000"){
                  essContainer.style.backgroundColor="#b30000";
              }else if(selectedColour==="#0d0d26"){
                  essContainer.style.backgroundColor="#0d0d26";
              }else if(selectedColour==="#004d4d"){
                  essContainer.style.backgroundColor="#004d4d";
              }
          } 
          function ChangeFontColour(){
          var selectedColour=document.getElementById("fontColourOptions")[document.getElementById("fontColourOptions").selectedIndex].value;
              if(selectedColour==="#ffffff"){
                  document.body.style.color="#ffffff";
              }else if(selectedColour==="#ffcccc"){
                  document.body.style.color="#ffcccc";
              }else if(selectedColour==="#ffff00"){
                  document.body.style.color="#ffff00";
              }else if(selectedColour==="#00ffff"){
                  document.body.style.color="#00ffff";
              }else if(selectedColour==="#4dff4d"){
                  document.body.style.color="#4dff4d";
              }
            }