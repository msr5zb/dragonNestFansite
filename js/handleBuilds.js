$(function() {

    
       function preloader() {
        if (document.images) {
            var img1 = new Image();
            var img2 = new Image();
            var img3 = new Image();
            var img4 = new Image();
            var img5 = new Image();
            var img6 = new Image();
            var img7 = new Image();
            var img8 = new Image();
            var img9 = new Image();
            var img10 = new Image();
            var img11 = new Image();
            var img12 = new Image();
            var img13 = new Image();
            var img14 = new Image();
            var img15 = new Image();
            var img16 = new Image();
            var img17 = new Image();
            var img18 = new Image();
            var img19 = new Image();
            var img20 = new Image();
            var img21 = new Image();
            var img22 = new Image();
            var img23 = new Image();
            var img24 = new Image();
            var img25 = new Image();
            var img26 = new Image();
            var img27 = new Image();
            var img28 = new Image();
            var img29 = new Image();
            var img30 = new Image();
            var img31 = new Image();
            var img32 = new Image();
            var img33 = new Image();
            var img34 = new Image();
            var img35 = new Image();
            var img36 = new Image();
            var img37 = new Image();
            var img38 = new Image();
            var img39 = new Image();
            var img40 = new Image();
            var img41 = new Image();
            var img42 = new Image();
            var img43 = new Image();
            var img44 = new Image();
            var img45 = new Image();
            var img46 = new Image();
            var img47 = new Image();
            var img48 = new Image();

            
            

            img1.src = "images/saint1.png";
            img2.src = "images/saint2.png";
            img3.src = "images/saint3.png";
            img4.src = "images/inq1.png";
            img5.src = "images/inq2.png";
            img6.src = "images/inq3.png";
            img7.src = "images/guard1.png";
            img8.src = "images/guard2.png";
            img9.src = "images/guard3.png";
            img10.src = "images/crus1.png";
            img11.src = "images/crus2.png";
            img12.src = "images/crus3.png";
            
            img13.src = "images/barb1.png";
            img14.src = "images/barb2.png";
            img15.src = "images/barb3.png";
            img16.src = "images/dest1.png";
            img17.src = "images/dest2.png";
            img18.src = "images/dest3.png";
            img19.src = "images/glad1.png";
            img20.src = "images/glad2.png";
            img21.src = "images/glad3.png";
            img22.src = "images/lunarknight1.png";
            img23.src = "images/lunarknight2.png";
            img24.src = "images/lunarknight3.png";
            
            img25.src = "images/sniper1.png";
            img26.src = "images/sniper2.png";
            img27.src = "images/sniper3.png";
            img28.src = "images/tempest1.png";
            img29.src = "images/tempest2.png";
            img30.src = "images/tempest3.png";
            img31.src = "images/warden1.png";
            img32.src = "images/warden2.png";
            img33.src = "images/warden3.png";
            img34.src = "images/windwalker1.png";
            img35.src = "images/windwalker2.png";
            img36.src = "images/windwalker3.png";
            
            img37.src = "images/chaos1.png";
            img38.src = "images/chaos2.png";
            img39.src = "images/chaos3.png";
            img40.src = "images/ice1.png";
            img41.src = "images/ice2.png";
            img42.src = "images/ice3.png";
            img43.src = "images/pyro1.png";
            img44.src = "images/pyro2.png";
            img45.src = "images/pyro3.png";
            img46.src = "images/war1.png";
            img47.src = "images/war2.png";
            img48.src = "images/war3.png";
            
            
            
            
            
        }
    }
    function addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function() {
                if (oldonload) {
                    oldonload();
                }
                func();
            }
        }
    }
    addLoadEvent(preloader); 
    
    

       classSelection = document.getElementsByClassName("classBuild")
        for(var i=0; i<classSelection.length; i++) { 
            classSelection[i].addEventListener("click", changeBuild);
        }
    
	//***********************Functions***********************//
    function changeBuild() {
        
        document.getElementById('threeBuilds').style.visibility = "visible";
        classBuild = event.target.text;
        switch(classBuild){
            case'Gladiator':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Warrior';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/glad1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Sword Master';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/glad2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Gladiator';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/glad3.png')";
                break;    
            case'Lunar Knight':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Warrior';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/lunarknight1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Sword Master';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/lunarknight2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Lunar Knight';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/lunarknight3.png')";
                break;     
            case'Barbarian':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Warrior';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/barb1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Mercenary';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/barb2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Barbarian';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/barb3.png')";
                break;    
            case'Destroyer':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Warrior';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/dest1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Mercenary';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/dest2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Destroyer';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/dest3.png')";
                break;    
                
            case'Sniper':  
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Archer';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/sniper1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Sharpshooter';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/sniper2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Sniper';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/sniper3.png')";
                break;              
            case'Warden':  
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Archer';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/warden1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Sharpshooter';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/warden2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Warden';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/warden3.png')";
                break;            
                
            case'Tempest':    
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Archer';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/tempest1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Acrobat';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/tempest2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Tempest';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/tempest3.png')";
                break; 
            case'Windwalker': 
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Archer';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/windwalker1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Acrobat';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/windwalker1.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Tempest';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/windwalker3.png')";
                break; 
            
            case'Pyromancer':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Sorceress';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/pyro1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Elementalist';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/pyro2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Pyromancer';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/pyro3.png')";
                break; 
            case'Ice Witch':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Sorceress';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/ice1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Elementalist';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/ice2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Ice Witch';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/ice3.png')";
                break;                             
             case'War Mage':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Sorceress';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/war1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Mystic';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/war2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'War Mage';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/war3.png')";
                break; 
             case'Chaos Mage':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Sorceress';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/chaos1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Mystic';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/chaos2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Chaos Mage';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/chaos3.png')";
                break;   
                
             case'Guardian':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Cleric';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/guard1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Paladin';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/guard2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Guardian';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/guard3.png')";
                break;   
              case'Crusader':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Cleric';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/crus1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Paladin';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/crus2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Crusader';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/crus3.png')";
                break;  
              case'Saint':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Cleric';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/saint1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Preist';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/saint2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Saint';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/saint3.png')";
                break; 
              case'Inquisitor':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Cleric';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/inq1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Preist';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/inq2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Inquisitor';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/inq3.png')";
                break; 
        }
        
        

    }
  	
    
});