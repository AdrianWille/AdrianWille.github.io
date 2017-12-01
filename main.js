var list = ["We shall see",
			"Yes",
			"No!",
			"Maybe.",
			"Ask again later.",
			"As I see it...yes.",
			"Certainly.",
			"Try again later.",
			"Doubtful.",
			"Signs point to yes."];

function randomNumber(){
	return Math.floor(Math.random() * 10);	
}

			//just testing javascript
function testJs(){
	alert("test!");
}

//this function handles clicking of 8 ball image
function shake8Ball(){
	document.getElementById("magic8ball2").src="magic8ball2.jpg";
	//alert("We shall see!")

		//change paragraph to magic 8 ball text
		document.getElementById("results").innerHTML=list[randomNumber()];

		//alert(randomNumber())
}

/*

Below is code for Tic Tac Toe 

*/

//holds X or O 
var character = "O";

//handles X and O turns
function turn(location){
	
	if(character == "X"){
		character = "O";
	}
	else{
		character = "X";
	}
	
		document.getElementById(location).innerHTML = character;
}

//clears X's and O's
function clearALL(){
	document.getElementById("r1c1").innerHTML = ""; 
	document.getElementById("r1c2").innerHTML = "";
	document.getElementById("r1c3").innerHTML = "";
	document.getElementById("r2c1").innerHTML = "";
	document.getElementById("r2c2").innerHTML = "";
	document.getElementById("r2c3").innerHTML = "";
	document.getElementById("r3c1").innerHTML = "";
	document.getElementById("r3c2").innerHTML = "";
	document.getElementById("r3c3").innerHTML = "";
}