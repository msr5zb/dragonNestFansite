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

            
            

            img1.src = "images/builds/cleric/saint1.png";
            img2.src = "images/builds/cleric/saint2.png";
            img3.src = "images/builds/cleric/saint3.png";
            img4.src = "images/builds/cleric/inq1.png";
            img5.src = "images/builds/cleric/inq2.png";
            img6.src = "images/builds/cleric/inq3.png";
            img7.src = "images/builds/cleric/guard1.png";
            img8.src = "images/builds/cleric/guard2.png";
            img9.src = "images/builds/cleric/guard3.png";
            img10.src = "images/builds/cleric/crus1.png";
            img11.src = "images/builds/cleric/crus2.png";
            img12.src = "images/builds/cleric/crus3.png";
            
            img13.src = "images/builds/warrior/barb1.png";
            img14.src = "images/builds/warrior/barb2.png";
            img15.src = "images/builds/warrior/barb3.png";
            img16.src = "images/builds/warrior/dest1.png";
            img17.src = "images/builds/warrior/dest2.png";
            img18.src = "images/builds/warrior/dest3.png";
            img19.src = "images/builds/warrior/glad1.png";
            img20.src = "images/builds/warrior/glad2.png";
            img21.src = "images/builds/warrior/glad3.png";
            img22.src = "images/builds/warrior/lunarknight1.png";
            img23.src = "images/builds/warrior/lunarknight2.png";
            img24.src = "images/builds/warrior/lunarknight3.png";
            
            img25.src = "images/builds/archer/sniper1.png";
            img26.src = "images/builds/archer/sniper2.png";
            img27.src = "images/builds/archer/sniper3.png";
            img28.src = "images/builds/archer/tempest1.png";
            img29.src = "images/builds/archer/tempest2.png";
            img30.src = "images/builds/archer/tempest3.png";
            img31.src = "images/builds/archer/warden1.png";
            img32.src = "images/builds/archer/warden2.png";
            img33.src = "images/builds/archer/warden3.png";
            img34.src = "images/builds/archer/windwalker1.png";
            img35.src = "images/builds/archer/windwalker2.png";
            img36.src = "images/builds/archer/windwalker3.png";
            
            img37.src = "images/builds/sorceress/chaos1.png";
            img38.src = "images/builds/sorceress/chaos2.png";
            img39.src = "images/builds/sorceress/chaos3.png";
            img40.src = "images/builds/sorceress/ice1.png";
            img41.src = "images/builds/sorceress/ice2.png";
            img42.src = "images/builds/sorceress/ice3.png";
            img43.src = "images/builds/sorceress/pyro1.png";
            img44.src = "images/builds/sorceress/pyro2.png";
            img45.src = "images/builds/sorceress/pyro3.png";
            img46.src = "images/builds/sorceress/war1.png";
            img47.src = "images/builds/sorceress/war2.png";
            img48.src = "images/builds/sorceress/war3.png";
            
            
            
            
            
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
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/warrior/glad1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Sword Master';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/warrior/glad2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Gladiator';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/warrior/glad3.png')";
                break;    
            case'Lunar Knight':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Warrior';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/warrior/lunarknight1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Sword Master';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/warrior/lunarknight2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Lunar Knight';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/warrior/lunarknight3.png')";
                break;     
            case'Barbarian':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Warrior';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/warrior/barb1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Mercenary';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/warrior/barb2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Barbarian';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/warrior/barb3.png')";
                break;    
            case'Destroyer':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Warrior';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/warrior/dest1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Mercenary';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/warrior/dest2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Destroyer';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/warrior/dest3.png')";
                break;    
                
            case'Sniper':  
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Archer';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/archer/sniper1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Sharpshooter';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/archer/sniper2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Sniper';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/archer/sniper3.png')";
                break;              
            case'Warden':  
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Archer';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/archer/warden1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Sharpshooter';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/archer/warden2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Warden';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/archer/warden3.png')";
                break;            
                
            case'Tempest':    
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Archer';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/archer/tempest1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Acrobat';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/archer/tempest2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Tempest';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/archer/tempest3.png')";
                break; 
            case'Windwalker': 
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Archer';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/archer/windwalker1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Acrobat';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/archer/windwalker1.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Tempest';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/archer/windwalker3.png')";
                break; 
            
            case'Pyromancer':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Sorceress';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/sorceress/pyro1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Elementalist';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/sorceress/pyro2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Pyromancer';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/sorceress/pyro3.png')";
                break; 
            case'Ice Witch':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Sorceress';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/sorceress/ice1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Elementalist';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/sorceress/ice2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Ice Witch';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/sorceress/ice3.png')";
                break;                             
             case'War Mage':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Sorceress';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/sorceress/war1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Mystic';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/sorceress/war2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'War Mage';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/sorceress/war3.png')";
                break; 
             case'Chaos Mage':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Sorceress';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/sorceress/chaos1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Mystic';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/sorceress/chaos2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Chaos Mage';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/sorceress/chaos3.png')";
                break;   
                
             case'Guardian':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Cleric';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/cleric/guard1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Paladin';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/cleric/guard2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Guardian';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/cleric/guard3.png')";
                break;   
              case'Crusader':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Cleric';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/cleric/crus1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Paladin';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/cleric/crus2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Crusader';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/cleric/crus3.png')";
                break;  
              case'Saint':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Cleric';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/cleric/saint1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Preist';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/cleric/saint2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Saint';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/cleric/saint3.png')";
                break; 
              case'Inquisitor':
                document.getElementById('firstSkillBuildColumnBanner').innerHTML = 'Cleric';
                document.getElementById('firstBuild').style.backgroundImage = "url('images/builds/cleric/inq1.png')";
                document.getElementById('secondSkillBuildColumnBanner').innerHTML = 'Preist';
                document.getElementById('secondBuild').style.backgroundImage = "url('images/builds/cleric/inq2.png')";
                document.getElementById('thirdSkillBuildColumnBanner').innerHTML = 'Inquisitor';
                document.getElementById('thirdBuild').style.backgroundImage = "url('images/builds/cleric/inq3.png')";
                break; 
        }
        
        

    }
  	
    
});