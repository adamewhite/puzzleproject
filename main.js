
var $ = function(id) { return document.getElementById(id) };

var randomNumber = function (min, max) {
	return Math.floor ( Math.random() * ( max - min + 1 ) + min );
}

var tileNumber = 0;
var answerArray = []
var countdownTimer;
var seconds;
var gridsize = 0;
var playOrder = [];

var tileSetup = function () {

	if (document.getElementById("2x2").selected) {
		document.getElementById("gameBoard2x2").style.display = "block";
		document.getElementById("gameBoard2x3").style.display = "none";
		document.getElementById("gameBoard3x3").style.display = "none";
		gridsize = 4;
		tileNumber = randomNumber (1,4)
		answerArray = [false, false, false, false];
	} else if (document.getElementById("2x3").selected) {
		document.getElementById("gameBoard2x3").style.display = "block";
		document.getElementById("gameBoard3x3").style.display = "none";
		document.getElementById("gameBoard2x2").style.display = "none";
		gridsize = 6;
		tileNumber = randomNumber (1,6)
		answerArray = [false, false, false, false, false, false];
	} else if (document.getElementById("3x3").selected) {
		document.getElementById("gameBoard3x3").style.display = "block";
		document.getElementById("gameBoard2x3").style.display = "none";
		document.getElementById("gameBoard2x2").style.display = "none";
		gridsize = 9;
		tileNumber = randomNumber (1,9)
		answerArray = [false, false, false, false, false, false, false, false, false];
	}

	var initialArray = [];

	var orderTile = function (length) {

		for (i = 1; i < length + 1; i++) {
			initialArray.push(i);
		}
		return;
	}

	orderTile(gridsize);

	if (document.getElementById("sequential").checked) {

		playOrder = initialArray;

		if (gridsize == 4) {
			initialArray = ("2x2tileNode" + initialArray.join('2x2tileNode')).split(/(?=2x2tileNode)/);
			for (var i = 0; i < initialArray.length; i++) {
				document.getElementById(initialArray[i]).src = "images/tile" + (i + 1) + ".png";
		}
		} else if (gridsize == 6) {
			initialArray = ("2x3tileNode" + initialArray.join('2x3tileNode')).split(/(?=2x3tileNode)/);
			for (var i = 0; i < initialArray.length; i++) {
				document.getElementById(initialArray[i]).src = "images/tile" + (i + 1) + ".png";
		}
		} else if (gridsize == 9) {
			initialArray = ("3x3tileNode" + initialArray.join('3x3tileNode')).split(/(?=3x3tileNode)/);
			for (var i = 0; i < initialArray.length; i++) {
				document.getElementById(initialArray[i]).src = "images/tile" + (i + 1) + ".png";
		}
		}

	} else {

		var shuffleTile = function (array) {
		    var i = array.length,
		        j = 0,
		        temp;

		    while (i--) {
		        j = Math.floor(Math.random() * (i+1));
		        temp = array[i];
		        array[i] = array[j];
		        array[j] = temp;
		    }
		    return initialArray;
		}

		shuffleTile(initialArray);

		if (gridsize == 4) {
			initialArray = ("2x2tileNode" + initialArray.join('2x2tileNode')).split(/(?=2x2tileNode)/);
			for (var i = 0; i < initialArray.length; i++) {
				document.getElementById(initialArray[i]).src = "images/tile" + (i + 1) + ".png";
		}
		} else if (gridsize == 6) {
			initialArray = ("2x3tileNode" + initialArray.join('2x3tileNode')).split(/(?=2x3tileNode)/);
			for (var i = 0; i < initialArray.length; i++) {
				document.getElementById(initialArray[i]).src = "images/tile" + (i + 1) + ".png";
		}
		} else if (gridsize == 9) {
			initialArray = ("3x3tileNode" + initialArray.join('3x3tileNode')).split(/(?=3x3tileNode)/);
			for (var i = 0; i < initialArray.length; i++) {
				document.getElementById(initialArray[i]).src = "images/tile" + (i + 1) + ".png";
		}
		}


		var temp = [];

		if (gridsize == 4) {
			for (var i = 1; i < (initialArray.length + 1); i++) {
				temp.push(document.getElementById("2x2tileNode" + i).src);
		}
		} else if (gridsize == 6) {
			for (var i = 1; i < (initialArray.length + 1); i++) {
				temp.push(document.getElementById("2x3tileNode" + i).src);
		}
		} else if (gridsize == 9) {
			for (var i = 1; i < (initialArray.length + 1); i++) {
			 temp.push(document.getElementById("3x3tileNode" + i).src);
		}
		}
		
		var temp2 = [];
		
 		for (i = 0; i < temp.length; i++) {
			temp2.push(parseInt(temp[i].slice(-5, -4)));	
		 } 
	
		playOrder = temp2;

	}


	tileSwitch();

	}

var secondPassed = function() {
	var remainingSeconds = parseFloat(seconds / 10);

    document.getElementById('timer').innerHTML = remainingSeconds;

    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('timer').innerHTML = "";

        for (i = 0; i < answerArray.length; i++) {
			if (answerArray[i] == true) {
				gameWon = true;
			} else {
				gameWon = false;
				break;
			}
		} 

		if (gameWon) { 
			console.log("Winner!");
        } else {
        	gameOver();
        }

    } else {
        seconds--;
    }
}



var tileSwitch = function () {

	if (countdownTimer != null) {
		clearInterval(countdownTimer);
	}

	if (tileNumber) {
		if (gridsize == 4) {
			document.getElementById("tileTemplate").src = "images/2x2images/game1/" + tileNumber + ".jpg";
		} else if (gridsize == 6) {
			document.getElementById("tileTemplate").src = "images/2x3images/game1/" + tileNumber + ".jpg";
		} else if (gridsize == 9) {
			document.getElementById("tileTemplate").src = "images/3x3images/game1/" + tileNumber + ".jpg";
		}
	}

	document.getElementById("guess").focus();

	if (document.getElementById("slow").checked) {
		seconds = 100;
	} else if (document.getElementById("medium").checked) {
		seconds = 50;
	} else {
		seconds = 20;
	}

	countdownTimer = setInterval('secondPassed()', 100);
	
}

var gamePlay = function () {

	var submittedGuess = parseInt(document.getElementById("guess").value);

	if (submittedGuess == "") {
		document.getElementById("guess").focus();
	} else {
		if (isNaN(submittedGuess) || submittedGuess > gridsize) {
		document.getElementById("verify").firstChild.nodeValue = "Please enter a valid number.";
		document.getElementById("guess").value = "";
		document.getElementById("guess").focus();
		return;
	}
	}

	document.getElementById("verify").firstChild.nodeValue = "";

	var gameWon = false;
	
	if (submittedGuess != playOrder[tileNumber - 1]) {
		gameOver();
	}

	if (submittedGuess == playOrder[tileNumber - 1]) {
		answerArray[playOrder[tileNumber - 1] - 1] = true;

		for (i = 0; i < answerArray.length; i++) {
			if (answerArray[i] == true) {
				gameWon = true;
			} else {
				gameWon = false;
				break;
			}
		}

		if (gameWon) {		
			var tileArray = [];

			for ( var i = 1; i <= answerArray.length; i++) {
				tileArray.push("tileNode" + i);
			}

			// for (var i = 0; i < tileArray.length; i++) {
			// 	if (gridsize == 4) {
			// 		document.getElementsByClassName(tileArray[i]).src = "images/2x2images/game1/" + (i + 1) + ".jpg";
			// 	} else if (gridsize == 6) {
			// 		document.getElementsByClassName(tileArray[i]).src = "images/2x3images/game1/" + (i + 1) + ".jpg";
			// 	} else if (gridsize == 9) {
			// 		document.getElementsByClassName(tileArray[i]).src = "images/3x3images/game1/" + (i + 1) + ".jpg";
			// 	} 
			// }

			
			if (gridsize == 4) {
					document.getElementById("2x2tileNode1").src = "images/2x2images/game1/" + 1 + ".jpg";
					document.getElementById("2x2tileNode2").src = "images/2x2images/game1/" + 2 + ".jpg";
					document.getElementById("2x2tileNode3").src = "images/2x2images/game1/" + 3 + ".jpg";
					document.getElementById("2x2tileNode4").src = "images/2x2images/game1/" + 4 + ".jpg";
			} else if (gridsize == 6) {
					document.getElementById("2x3tileNode1").src = "images/2x3images/game1/" + 1 + ".jpg";
					document.getElementById("2x3tileNode2").src = "images/2x3images/game1/" + 2 + ".jpg";
					document.getElementById("2x3tileNode3").src = "images/2x3images/game1/" + 3 + ".jpg";
					document.getElementById("2x3tileNode4").src = "images/2x3images/game1/" + 4 + ".jpg";
					document.getElementById("2x3tileNode5").src = "images/2x3images/game1/" + 5 + ".jpg";
					document.getElementById("2x3tileNode6").src = "images/2x3images/game1/" + 6 + ".jpg";
			} else if (gridsize == 9) {
					document.getElementById("3x3tileNode1").src = "images/3x3images/game1/" + 1 + ".jpg";
					document.getElementById("3x3tileNode2").src = "images/3x3images/game1/" + 2 + ".jpg";
					document.getElementById("3x3tileNode3").src = "images/3x3images/game1/" + 3 + ".jpg";
					document.getElementById("3x3tileNode4").src = "images/3x3images/game1/" + 4 + ".jpg";
					document.getElementById("3x3tileNode5").src = "images/3x3images/game1/" + 5 + ".jpg";
					document.getElementById("3x3tileNode6").src = "images/3x3images/game1/" + 6 + ".jpg";
					document.getElementById("3x3tileNode7").src = "images/3x3images/game1/" + 7 + ".jpg";
					document.getElementById("3x3tileNode8").src = "images/3x3images/game1/" + 8 + ".jpg";
					document.getElementById("3x3tileNode9").src = "images/3x3images/game1/" + 9 + ".jpg";
			}
			

			document.getElementById("tileTemplate").src = "images/youWon.png";
			document.getElementById("letsBegin").disabled = true;
			document.getElementById("guess").value = "";
			document.getElementById("guess").blur();
			seconds = 0;

		} else {

			do { 
				tileNumber = randomNumber(1,gridsize);
			} while ( answerArray[playOrder[tileNumber - 1] - 1] == true ) 

			document.getElementById("guess").value = "";
			document.getElementById("guess").focus();
			tileSwitch();
		}
	}
}

var gameOver = function () {
	document.getElementById("tileTemplate").src = "images/gameOver.png";
	document.getElementById("guess").value = "";	
	document.getElementById("verify").firstChild.nodeValue = "";	
	document.getElementById("guess").blur();	
	document.getElementById("letsBegin").disabled = true;	
	seconds = 0;
}

var initializeGame = function () {
	document.getElementById("gameBoard3x3").style.display = "none";
	document.getElementById("gameBoard2x3").style.display = "none";
	document.getElementById("gameBoard2x2").style.display = "none";
	document.getElementById("tileTemplate").src = "images/tileBlank.png";
	document.getElementById("letsBegin").disabled = false;
	document.getElementById("guess").blur();
	document.getElementById("verify").firstChild.nodeValue = "";
	document.getElementById("timer").innerHTML = "";
	clearInterval(countdownTimer);
	gameWon = false;

	}


window.onload = function () {
	$("letsBegin").onclick = tileSetup;
	$("guess").onkeyup = gamePlay;
	$("resetGame").onclick = initializeGame;
}
