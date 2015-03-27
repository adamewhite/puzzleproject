
var randomNumber = function (min, max) {
	return Math.floor ( Math.random() * ( max - min + 1 ) + min );
}

var tileNumber = 0;
var answerArray = [];
var countdownTimer;
var seconds;
var gridsize = 0;
var playOrder = [];
var difficulty;



var tileSetup = function () {

	document.getElementById("letsBegin").disabled = true;

	// if (document.getElementById("easyDiff").selected) {
	// 	difficulty = 600;
	// } else if (document.getElementById("medDiff").selected) {
	// 	difficulty = 300;
	// } else if (document.getElementById("hardDiff").selected) {
	// 	difficulty = 100;
	// }

	answerArray = [];

	var answerArraySetup = function() {
		for (var i = 0; i < gridsize; i++) {
			answerArray.push(false);
		}
		return answerArray;
	}

	if (document.getElementById("2x2").selected) {
		document.getElementById("gameBoard2x2").style.display = "block";
		document.getElementById("gameBoard2x3").style.display = "none";
		document.getElementById("gameBoard3x3").style.display = "none";
		gridsize = 4;
		tileNumber = randomNumber (1,4)
		answerArraySetup();
	} else if (document.getElementById("2x3").selected) {
		document.getElementById("gameBoard2x3").style.display = "block";
		document.getElementById("gameBoard3x3").style.display = "none";
		document.getElementById("gameBoard2x2").style.display = "none";
		gridsize = 6;
		tileNumber = randomNumber (1,6)
		answerArraySetup();
	} else if (document.getElementById("3x3").selected) {
		document.getElementById("gameBoard3x3").style.display = "block";
		document.getElementById("gameBoard2x3").style.display = "none";
		document.getElementById("gameBoard2x2").style.display = "none";
		gridsize = 9;
		tileNumber = randomNumber (1,9)
		answerArraySetup();
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
			setTimeout((function () {$("#2x2tileNode1").fadeOut()}), 0)
			setTimeout((function () {$("#2x2tileNode1").fadeIn()}), 1000)
			setTimeout((function () {$("#2x2tileNode2").fadeOut()}), 200)
			setTimeout((function () {$("#2x2tileNode2").fadeIn()}), 1200)
			setTimeout((function () {$("#2x2tileNode3").fadeOut()}), 0);
			setTimeout((function () {$("#2x2tileNode3").fadeIn()}), 1000);
			setTimeout((function () {$("#2x2tileNode4").fadeOut()}), 200);
			setTimeout((function () {$("#2x2tileNode4").fadeIn()}), 1200);
		} else if (gridsize == 6) {
			initialArray = ("2x3tileNode" + initialArray.join('2x3tileNode')).split(/(?=2x3tileNode)/);
			for (var i = 0; i < initialArray.length; i++) {
				document.getElementById(initialArray[i]).src = "images/tile" + (i + 1) + ".png";
				}
			setTimeout((function () {$("#2x3tileNode1").fadeOut()}), 0)
			setTimeout((function () {$("#2x3tileNode1").fadeIn()}), 1000)
			setTimeout((function () {$("#2x3tileNode2").fadeOut()}), 200)
			setTimeout((function () {$("#2x3tileNode2").fadeIn()}), 1200)
			setTimeout((function () {$("#2x3tileNode3").fadeOut()}), 400);
			setTimeout((function () {$("#2x3tileNode3").fadeIn()}), 1400);
			setTimeout((function () {$("#2x3tileNode4").fadeOut()}), 0);
			setTimeout((function () {$("#2x3tileNode4").fadeIn()}), 1000);
			setTimeout((function () {$("#2x3tileNode5").fadeOut()}), 200);
			setTimeout((function () {$("#2x3tileNode5").fadeIn()}), 1200);
			setTimeout((function () {$("#2x3tileNode6").fadeOut()}), 400);
			setTimeout((function () {$("#2x3tileNode6").fadeIn()}), 1400);
		} else if (gridsize == 9) {
			initialArray = ("3x3tileNode" + initialArray.join('3x3tileNode')).split(/(?=3x3tileNode)/);
			for (var i = 0; i < initialArray.length; i++) {
				document.getElementById(initialArray[i]).src = "images/tile" + (i + 1) + ".png";
		}
			setTimeout((function () {$("#3x3tileNode1").fadeOut()}), 0)
			setTimeout((function () {$("#3x3tileNode1").fadeIn()}), 1000)
			setTimeout((function () {$("#3x3tileNode2").fadeOut()}), 200)
			setTimeout((function () {$("#3x3tileNode2").fadeIn()}), 1200)
			setTimeout((function () {$("#3x3tileNode3").fadeOut()}), 400);
			setTimeout((function () {$("#3x3tileNode3").fadeIn()}), 1400);
			setTimeout((function () {$("#3x3tileNode4").fadeOut()}), 0);
			setTimeout((function () {$("#3x3tileNode4").fadeIn()}), 1000);
			setTimeout((function () {$("#3x3tileNode5").fadeOut()}), 200);
			setTimeout((function () {$("#3x3tileNode5").fadeIn()}), 1200);
			setTimeout((function () {$("#3x3tileNode6").fadeOut()}), 400);
			setTimeout((function () {$("#3x3tileNode6").fadeIn()}), 1400);
			setTimeout((function () {$("#3x3tileNode7").fadeOut()}), 0);
			setTimeout((function () {$("#3x3tileNode7").fadeIn()}), 1000);
			setTimeout((function () {$("#3x3tileNode8").fadeOut()}), 200);
			setTimeout((function () {$("#3x3tileNode8").fadeIn()}), 1200);
			setTimeout((function () {$("#3x3tileNode9").fadeOut()}), 400);
			setTimeout((function () {$("#3x3tileNode9").fadeIn()}), 1400);
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

		if (gridsize == 4) {
			setTimeout((function () {$("#2x2tileNode1").fadeOut()}), 0)
			setTimeout((function () {$("#2x2tileNode1").fadeIn()}), 1000)
			setTimeout((function () {$("#2x2tileNode2").fadeOut()}), 200)
			setTimeout((function () {$("#2x2tileNode2").fadeIn()}), 1200)
			setTimeout((function () {$("#2x2tileNode3").fadeOut()}), 0);
			setTimeout((function () {$("#2x2tileNode3").fadeIn()}), 1000);
			setTimeout((function () {$("#2x2tileNode4").fadeOut()}), 200);
			setTimeout((function () {$("#2x2tileNode4").fadeIn()}), 1200);
		} else if (gridsize == 6) {
			setTimeout((function () {$("#2x3tileNode1").fadeOut()}), 0)
			setTimeout((function () {$("#2x3tileNode1").fadeIn()}), 1000)
			setTimeout((function () {$("#2x3tileNode2").fadeOut()}), 200)
			setTimeout((function () {$("#2x3tileNode2").fadeIn()}), 1200)
			setTimeout((function () {$("#2x3tileNode3").fadeOut()}), 400);
			setTimeout((function () {$("#2x3tileNode3").fadeIn()}), 1400);
			setTimeout((function () {$("#2x3tileNode4").fadeOut()}), 0);
			setTimeout((function () {$("#2x3tileNode4").fadeIn()}), 1000);
			setTimeout((function () {$("#2x3tileNode5").fadeOut()}), 200);
			setTimeout((function () {$("#2x3tileNode5").fadeIn()}), 1200);
			setTimeout((function () {$("#2x3tileNode6").fadeOut()}), 400);
			setTimeout((function () {$("#2x3tileNode6").fadeIn()}), 1400);
		} else if (gridsize == 9) {
			setTimeout((function () {$("#3x3tileNode1").fadeOut()}), 0)
			setTimeout((function () {$("#3x3tileNode1").fadeIn()}), 1000)
			setTimeout((function () {$("#3x3tileNode2").fadeOut()}), 200)
			setTimeout((function () {$("#3x3tileNode2").fadeIn()}), 1200)
			setTimeout((function () {$("#3x3tileNode3").fadeOut()}), 400);
			setTimeout((function () {$("#3x3tileNode3").fadeIn()}), 1400);
			setTimeout((function () {$("#3x3tileNode4").fadeOut()}), 0);
			setTimeout((function () {$("#3x3tileNode4").fadeIn()}), 1000);
			setTimeout((function () {$("#3x3tileNode5").fadeOut()}), 200);
			setTimeout((function () {$("#3x3tileNode5").fadeIn()}), 1200);
			setTimeout((function () {$("#3x3tileNode6").fadeOut()}), 400);
			setTimeout((function () {$("#3x3tileNode6").fadeIn()}), 1400);
			setTimeout((function () {$("#3x3tileNode7").fadeOut()}), 0);
			setTimeout((function () {$("#3x3tileNode7").fadeIn()}), 1000);
			setTimeout((function () {$("#3x3tileNode8").fadeOut()}), 200);
			setTimeout((function () {$("#3x3tileNode8").fadeIn()}), 1200);
			setTimeout((function () {$("#3x3tileNode9").fadeOut()}), 400);
			setTimeout((function () {$("#3x3tileNode9").fadeIn()}), 1400);
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

	if (gridsize == 4) {
		setTimeout(tileSwitch, 1700)
	} else if (gridsize == 6) {
		setTimeout(tileSwitch, 2000)
	} else if (gridsize == 9) {
		setTimeout(tileSwitch, 2000)
	}


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
					$("#2x2tileNode1").fadeOut();
					setTimeout((function () {$("#2x2tileNode2").fadeOut()}), 200);
					setTimeout((function () {$("#2x2tileNode3").fadeOut()}), 400);
					setTimeout((function () {$("#2x2tileNode4").fadeOut()}), 600);

			} else if (gridsize == 6) {
					$("#2x3tileNode1").fadeOut();
					setTimeout((function () {$("#2x3tileNode2").fadeOut()}), 200);
					setTimeout((function () {$("#2x3tileNode3").fadeOut()}), 400);
					setTimeout((function () {$("#2x3tileNode4").fadeOut()}), 600);
					setTimeout((function () {$("#2x3tileNode5").fadeOut()}), 800);
					setTimeout((function () {$("#2x3tileNode6").fadeOut()}), 1000);

			} else if (gridsize == 9) {
					$("#3x3tileNode1").fadeOut();
					setTimeout((function () {$("#3x3tileNode2").fadeOut()}), 200);
					setTimeout((function () {$("#3x3tileNode3").fadeOut()}), 400);
					setTimeout((function () {$("#3x3tileNode4").fadeOut()}), 600);
					setTimeout((function () {$("#3x3tileNode5").fadeOut()}), 800);
					setTimeout((function () {$("#3x3tileNode6").fadeOut()}), 1000);
					setTimeout((function () {$("#3x3tileNode7").fadeOut()}), 1200);
					setTimeout((function () {$("#3x3tileNode8").fadeOut()}), 1400);
					setTimeout((function () {$("#3x3tileNode9").fadeOut()}), 1600);

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

	if (gridsize == 4) {
			$("#2x2tileNode1").fadeIn();
			$("#2x2tileNode2").fadeIn();
			$("#2x2tileNode3").fadeIn();
			$("#2x2tileNode4").fadeIn();

	} else if (gridsize == 6) {
			$("#2x3tileNode1").fadeIn();
			$("#2x3tileNode2").fadeIn();
			$("#2x3tileNode3").fadeIn();
			$("#2x3tileNode4").fadeIn();
			$("#2x3tileNode5").fadeIn();
			$("#2x3tileNode6").fadeIn();

	} else if (gridsize == 9) {
			$("#3x3tileNode1").fadeIn();
			$("#3x3tileNode2").fadeIn();
			$("#3x3tileNode3").fadeIn();
			$("#3x3tileNode4").fadeIn();
			$("#3x3tileNode5").fadeIn();
			$("#3x3tileNode6").fadeIn();
			$("#3x3tileNode7").fadeIn();
			$("#3x3tileNode8").fadeIn();
			$("#3x3tileNode9").fadeIn();

	}

	}


window.onload = function () {
	document.getElementById("letsBegin").onclick = tileSetup;
	document.getElementById("guess").onkeyup = gamePlay;
	document.getElementById("resetGame").onclick = initializeGame;
}
