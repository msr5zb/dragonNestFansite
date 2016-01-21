<?php

	//Connect To Database
    $conn_string = "host=localhost port=5432 dbname=dragonnest user=adminxaycqqp password=3s3vsp2TR2Vr";
	$dbconn = pg_connect($conn_string)or die('Could not connect: ' . pg_last_error());
	
if(!$dbconn) 
	{
		echo "<p>Failed to connect to DB</p>\n";
	}	
?>

<!DOCTYPE html>
<html lang="en" class="no-js demo5">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<title>Final Project</title>
    	<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
    	<script type="text/javascript" src="js/bootstrap.min.js"></script>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

        
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="css/style.css" />
		<link rel="stylesheet" type="text/css" href="css/styleIndex.css" />

	</head>
	<body>
	  <div id="wrapper"> 
     	<!--Header For Logo/Login/Logout/Register-->
        <div id="banner">
            <div align = "right">  
                <a href="index.php"><img src="images/logo5.png" alt="Logo" id="logo"></a>
               
            </div>
		</div>
          
        <div class="menu">
				<a href="index.php" class="active">Home</a>
				<a href="guides.php">Guides</a>
				<a href="classes.php">Classes</a>
				<a href="skillBuilds.php">Skill Builds</a>
				<a href="music.php">Music</a>
        </div>
        <div  id="content">
            <div id="trailer">
            <iframe width="1000" height="550" src="https://www.youtube.com/embed/lkKL_E3Yv68" frameborder="0" allowfullscreen></iframe>
            </div>
            
        </div>  
          
          
        </div>    
        <div id="footer">
            <div id="navbar" >
                <ul>
                    <li><a href="index.php" >Home |</a></li>
                    <li><a href="guides.php" >Guides |</a></li>
                    <li><a href="classes.php">Classes |</a></li>
                    <li><a href="skillBuilds.php">Skill Builds |</a></li>
                    <li><a href="music.php">Music |</a></li>
                </ul>
            &copy; 2015 Michael Rallo - SaintSaves <br />
            </div>
        </div>
	</body>
</html>