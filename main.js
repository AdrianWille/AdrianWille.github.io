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