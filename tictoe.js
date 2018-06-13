var currentPlayer = prompt("Who is The Current Player Happy=1 Sad=2");

var grid=new Array(3);
grid[0]=new Array(3);
grid[1]=new Array(3);
grid[2]=new Array(3);

var cat_score =0;
var dog_score =0;
var games_played =0;
document.getElementById("dogScore").innerHTML=dog_score;
document.getElementById("catScore").innerHTML=cat_score;
for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
  }
}

// Checks If Grid Is Already Clicked
function clickCell(x,y) {
  if (grid[x][y]>0) {
    alert("Spot is already clicked");
  } 


// Clicking Of Boxes
  else {
    if (currentPlayer==1) {
      document.getElementById("cell_"+x+"_"+y).innerHTML="<img src='/happy.png'width ='60' height ='60'>";
      grid[x][y]=1;
	  for(var i=0; i<=2; i++){
		  if(grid[i][0]===1 && grid[i][1]===1 && grid[i][2]===1){
			  cat_score +=1;
			  games_played +=1;
			  document.getElementById("catScore").innerHTML=cat_score;
			  alert("Happy won!");
			  if (games_played == 3){
				  congrats();
			  }
			  reset();
		  }
		  else if(grid[0][i]===1 && grid[1][i]===1 && grid[2][i]===1){
			  cat_score +=1;
			  games_played +=1;
			  document.getElementById("catScore").innerHTML=cat_score;
			  alert("Happy won!");
			  if (games_played == 3){
				  congrats();
			  }
			  reset();
		  }  
	  }
	 if(grid[0][0] ===1 && grid[1][1] ===1 && grid[2][2]===1){
		 cat_score +=1;
		 games_played +=1;
		 document.getElementById("catScore").innerHTML=cat_score;
		 alert("Happy won!");
		 if (games_played == 3){
				  congrats();
			  }
		 reset();
	 }
	else if(grid[2][0] ===1 && grid[1][1] ===1 && grid[0][2]===1){
		 cat_score +=1;
		 document.getElementById("catScore").innerHTML=cat_score;
		alert("Happy won!");
	    if (games_played == 3){
				  congrats();
			  }
		reset();
	}
        
		currentPlayer=2;
    } 
	 else {
       document.getElementById("cell_"+x+"_"+y).innerHTML="<img src='/sad.png 'width ='60' height ='60'>";
      grid[x][y]=2;
	  for(var i=0; i<=2; i++){
		  if(grid[i][0]===2 && grid[i][1]===2 && grid[i][2]===2){
			  dog_score +=1;
			  games_played +=1;
			  document.getElementById("dogScore").innerHTML=dog_score;
			  alert("Sad won!");
			  if (games_played == 3){
				  congrats();
			  }
			  reset();
		  }
		  else if(grid[0][i]===2 && grid[1][i]===2 && grid[2][i]===2){
			  dog_score +=1;
			  games_played +=1;
			  document.getElementById("dogScore").innerHTML=dog_score;
			  alert("Sad won!");
			  if (games_played == 3){
				  congrats();
			  }
			  reset();
		  }  
	  }
	 if(grid[0][0] ===2 && grid[1][1] ===2 && grid[2][2]===2){
		 dog_score +=1;
		 games_played +=1;
		 document.getElementById("dogScore").innerHTML=dog_score;
		 alert("Sad won!");
		 if (games_played == 3){
				  congrats();
			  }
		 reset();
	 }
	else if(grid[2][0] ===1 && grid[1][1] ===1 && grid[0][2]===1){
		dog_score +=1;
		games_played +=1;
		document.getElementById("catScore").innerHTML=dog_score;
		alert("Sad won!");
		if (games_played == 3){
				  congrats();
			  }
		reset();
	}
      
	 currentPlayer=1;
    }
      
    }
  }

//Congrats to best out of three and reset all scores
function congrats(){
	if (cat_score>dog_score){
		alert("Happy won this round!");
		cat_score=0;
		dog_score =0;
		games_played=0;
	}
	else if(dog_score>cat_score){
		alert("Sad won this round!");
		cat_score=0;
		dog_score =0;
		games_played=0;
	}
}




// Reset Game
function reset() {
for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
    document.getElementById("cell_"+i+"_"+j).innerHTML="&nbsp;";
  }
}
 currentPlayer= prompt("Who is The Current Player Happy=1 Sad=2");
}

