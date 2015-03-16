console.log("js is working");

var $ = function (id) { return document.getElementById(id); }

//var displayedTile = $("tileTemplate");
//var guess = $("guess");


var randomNumber = function (min, max) {
	return Math.floor ( Math.random() * ( max - min + 1 ) + min );
}

var tileNumber = randomNumber (1,4);

var answerArray = [false, false, false, false];

var tileSwitch = function () {

	switch (tileNumber) {
	case 1:
		document.getElementById("tileTemplate").src = "images/dogImage1.jpg";
		break;
	case 2:
		document.getElementById("tileTemplate").src = "images/dogImage2.jpg";
		break;
	case 3:
		document.getElementById("tileTemplate").src = "images/dogImage3.jpg";
		break;
	case 4:
		document.getElementById("tileTemplate").src = "images/dogImage4.jpg";
	break;
	}	
	document.getElementById("guess").focus();
}

var gamePlay = function () {
	var submittedGuess = parseInt(document.getElementById("guess").value);

	if (submittedGuess == "") {
		document.getElementById("guess").focus();
	} else {
		if (isNaN(submittedGuess) || submittedGuess > 4) {
		document.getElementById("verify").firstChild.nodeValue = "Please enter a valid number.";
		document.getElementById("guess").value = "";
		document.getElementById("guess").focus();
		return;
	}
	}
	document.getElementById("verify").firstChild.nodeValue = "";
	if (submittedGuess == tileNumber) {
		answerArray[tileNumber - 1] = true;
		if (answerArray[0] == true && answerArray[1] == true && 
				answerArray[2] == true && answerArray[3] == true ) {
				//alert("You won!");
				document.getElementById("tile1").src = "images/dogImage1.jpg";
				document.getElementById("tile2").src = "images/dogImage2.jpg";
				document.getElementById("tile3").src = "images/dogImage3.jpg";
				document.getElementById("tile4").src = "images/dogImage4.jpg";
				document.getElementById("tileTemplate").src = "images/youWon.jpg";
				$("guess").value = "";
			} else {
			
			console.log(answerArray);

			do { 
				tileNumber = randomNumber(1,4);
			} while ( answerArray[tileNumber - 1] == true ) 

			console.log(tileNumber);

			$("guess").value = "";
			document.getElementById("guess").focus();
			tileSwitch();
			return this;
		}
	}
	}

	var initializeGame = function () {
		document.getElementById("tile1").src = "images/tile1.jpg";
		document.getElementById("tile2").src = "images/tile2.jpg";
		document.getElementById("tile3").src = "images/tile3.jpg";
		document.getElementById("tile4").src = "images/tile4.jpg";
		document.getElementById("guess").focus();
		answerArray = [false, false, false, false];
		tileSwitch();
		gamePlay();
	}

window.onload = function (){
	$("letsBegin").onclick = tileSwitch;
	$("submitGuess").onclick = gamePlay;
	$("playAgain").onclick = initializeGame;
}
