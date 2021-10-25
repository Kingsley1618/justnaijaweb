


myIndex = 0

function myFunc() {
myArray = ["black", ""];
	document.getElementById("test").style.backgroundColor = myArray[myIndex];


	myIndex++;

	if (myIndex > 1) {
		myIndex = 0;
	}

	if (document.getElementById("test").style.backgroundColor == "black") {
document.getElementById("test").style.color = "white";

document.getElementById("dispBlock").style.display = "none";
document.getElementById("disp").style.display = "block";

	} else {
		document.getElementById("test").style.color = "black";
	}


}

var a = setInterval(myFunc,3000);


myIn = 0
function myF() {
myArr = ["", "black"];
	document.getElementById("testClass").style.backgroundColor = myArr[myIn];
	

	myIn++;

	if (myIn > 1) {
		myIn = 0;
	}


	if (document.getElementById("testClass").style.backgroundColor == "black") {
document.getElementById("testClass").style.color = "white";
document.getElementById("disp").style.display = "none";
document.getElementById("dispBlock").style.display = "block";

	} else {
		document.getElementById("testClass").style.color = "black";
	}

}

var b = setInterval(myF,3000);



function myPerf() {
document.getElementById("testClass").onclick = function() {
	document.getElementById("testClass").style.backgroundColor = "black";
	document.getElementById("testClass").style.color = "white";
	document.getElementById("disp").style.display = "none";
document.getElementById("dispBlock").style.display = "block";
if(document.getElementById("testClass").style.backgroundColor == "black") {
	document.getElementById("test").style.backgroundColor = "";
	document.getElementById("test").style.color = "black";
	clearInterval(a);
	clearInterval(b);

}

}


}



myPerf();



function myPer() {
document.getElementById("test").onclick = function() {
	document.getElementById("test").style.backgroundColor = "black";
	document.getElementById("test").style.color = "white";
	document.getElementById("dispBlock").style.display = "none";
document.getElementById("disp").style.display = "block";
if(document.getElementById("test").style.backgroundColor == "black") {
	document.getElementById("testClass").style.backgroundColor = "";
	document.getElementById("testClass").style.color = "black";
	clearInterval(a);
	clearInterval(b);
}

}
}


myPer();









document.getElementById("disp").ontouchmove = function() {
	clearInterval(a);
	clearInterval(b);
}


document.getElementById("dispBlock").ontouchmove = function() {
	clearInterval(a);
	clearInterval(b);
}












myNumb = 0
function myTo() {



	var myA = ["black" , "", ""];

	document.getElementById("topic").style.backgroundColor = myA[myNumb];
	myNumb++;

	if (myNumb > 2) {
		myNumb = 0;
	}

	if (document.getElementById("topic").style.backgroundColor == "black") {
		document.getElementById("topic").style.color = "white";
		document.getElementById("first").style.display = "block";
		document.getElementById("second").style.display = "none";
		document.getElementById("third").style.display = "none";
	} else {
		document.getElementById("topic").style.color = "black";
	}
}


var d = setInterval(myTo,3000);

myNum = 0
function myT() {
	var myAr = ["" , "black", ""];

	document.getElementById("music").style.backgroundColor = myAr[myNum];
	myNum++;

	if (myNum > 2) {
		myNum = 0;
	}

	if (document.getElementById("music").style.backgroundColor == "black") {
		document.getElementById("music").style.color = "white";
		document.getElementById("first").style.display = "none";
		document.getElementById("second").style.display = "block";
		document.getElementById("third").style.display = "none";
	} else {
		document.getElementById("music").style.color = "black";
	}
}


var e = setInterval(myT,3000);


myNu = 0
function myTop() {
	var myArrr = ["" , "", "black"];

	document.getElementById("video").style.backgroundColor = myArrr[myNu];
	myNu++;

	if (myNu > 2) {
		myNu = 0;
	}


	if (document.getElementById("video").style.backgroundColor == "black") {
		document.getElementById("video").style.color = "white";
		document.getElementById("first").style.display = "none";
		document.getElementById("second").style.display = "none";
		document.getElementById("third").style.display = "block";
	} else {
		document.getElementById("video").style.color = "black";
	}
}


var f = setInterval(myTop,3000);











function fun() {

	document.getElementById("music").onclick = function() {
		document.getElementById("music").style.backgroundColor = "black";
		document.getElementById("music").style.color = "white";
document.getElementById("first").style.display = "none";
		document.getElementById("second").style.display = "block";
		document.getElementById("third").style.display = "none";


		if (document.getElementById("music").style.backgroundColor == "black") {
			document.getElementById("topic").style.backgroundColor = "";
			document.getElementById("topic").style.color = "black";
			document.getElementById("video").style.backgroundColor = "";
			document.getElementById("video").style.color = "black";

			clearInterval(d);
clearInterval(e);
clearInterval(f);
}
		}

	}


fun();







function fu() {
	document.getElementById("video").onclick = function() {
		document.getElementById("video").style.backgroundColor = "black";

		document.getElementById("video").style.color = "white";

document.getElementById("first").style.display = "none";

		document.getElementById("second").style.display = "none";

		document.getElementById("third").style.display = "block";

		if (document.getElementById("video").style.backgroundColor == "black") {
			document.getElementById("music").style.backgroundColor = "";

			document.getElementById("music").style.color = "black";

			document.getElementById("topic").style.backgroundColor = "";

			document.getElementById("topic").style.color = "black";

			clearInterval(d);
clearInterval(e);

clearInterval(f);
}
		}
	}


fu();


function funct() {

	document.getElementById("topic").onclick = function() {
		document.getElementById("topic").style.backgroundColor = "black";
		document.getElementById("topic").style.color = "white";

document.getElementById("first").style.display = "block";

		document.getElementById("second").style.display = "none";

		document.getElementById("third").style.display = "none";

		if (document.getElementById("topic").style.backgroundColor == "black") {
			document.getElementById("music").style.backgroundColor = "";

			document.getElementById("music").style.color = "black";

			document.getElementById("video").style.backgroundColor = "";

			document.getElementById("video").style.color = "black";

			clearInterval(d);

clearInterval(e);

clearInterval(f);
}
		}
	}




funct();























document.getElementById("searches").onclick = function() {
	
	$("#form").fadeIn("slow");
	document.getElementById("sear").focus();
	
}

document.getElementById("rem").onclick = function() {
	$("#form").fadeOut("slow");
}

document.getElementById("check").onclick = function() {
if (document.getElementById("check").checked) {
	document.body.style.backgroundImage = "url('rBEeyF6qdm-AGSZOAACJEZVt_-8433.jpg')";

	document.body.style.backgroundAttachment = "fixed";

	document.body.style.backgroundRepeat = "no-repeat";

	document.body.style.backgroundSize = "cover";
} else {
	document.body.style.backgroundImage = "";
}
}

var number = parseInt(document.getElementById("nu").innerHTML);
document.getElementById("heart").onclick = function() {




	document.getElementById("hear").style.color = "red";

	document.getElementById("nu").innerHTML = number + 1;
}


document.getElementById("comme").onclick = function() {
	document.getElementById("textArea").focus();
}





document.getElementById("ellip").onclick = function() {
	if (document.getElementById("show").style.display == "none"){
	document.getElementById("show").style.display = "block";
	document.getElementById("hide").style.display = "none";
} 


}


document.getElementById("times").onclick = function() {
	if (document.getElementById("hide").style.display == "none"){
		document.getElementById("hide").style.display = "block";
		document.getElementById("show").style.display = "none";
	}
}

var digit = parseInt(document.getElementById("receive").innerHTML);

document.getElementById("like").onclick = function() {
	document.getElementById("receive").innerHTML = digit + 1;
document.getElementById("like").textContent = "liked";
document.getElementById("like").style.color = "blue";

document.getElementById("like").style.fontWeight = "bold";

}



var dig = parseInt(document.getElementById("receivee").innerHTML);

document.getElementById("likee").onclick = function() {
	document.getElementById("receivee").innerHTML = dig + 1;
document.getElementById("likee").textContent = "liked";
document.getElementById("likee").style.color = "blue";

document.getElementById("likee").style.fontWeight = "bold";

}




var digitt = parseInt(document.getElementById("receiveee").innerHTML);

document.getElementById("likeee").onclick = function() {
	document.getElementById("receiveee").innerHTML = digitt + 1;

document.getElementById("likeee").textContent = "liked";

document.getElementById("likeee").style.color = "blue";

document.getElementById("likeee").style.fontWeight = "bold";

}






document.getElementById("reply").onclick = function() {
	document.getElementById("textArea").focus();
}






document.getElementById("replyy").onclick = function() {
	document.getElementById("textArea").focus();
}








document.getElementById("replyyy").onclick = function() {
	document.getElementById("textArea").focus();

}




var prev = 1200;
var previous = 1500;

window.onscroll = function() {
	if (window.pageYOffset > previous) {
		$("#na").slideUp();


	} else {
		$("#na").slideDown();
	}

	if (window.pageYOffset > prev) {
		document.getElementById("icons").setAttribute("class", "flex-column d-none");
	} else {
		document.getElementById("icons").setAttribute("class", "flex-column d-flex");
	}


	
		
	

}



function icon() {
	document.getElementById("firstIcon").onmouseenter = function() {
		document.getElementById("firstIcon").style.width = "60px";

	}
}
icon();



function iconn() {
	document.getElementById("secIcon").onmouseenter = function() {
		document.getElementById("secIcon").style.width = "60px";
		
	}
}
iconn();




function iconnn() {
	document.getElementById("thirdIcon").onmouseenter = function() {
		document.getElementById("thirdIcon").style.width = "60px";
		
	}
}
iconnn();





function iconnnn() {
	document.getElementById("fourthIcon").onmouseenter = function() {
		document.getElementById("fourthIcon").style.width = "60px";
		
	}
}
iconnnn();

function iconnnnn() {
	document.getElementById("fifthIcon").onmouseenter = function() {
		document.getElementById("fifthIcon").style.width = "60px";
		
	}
}
iconnnnn();









function font() {
	document.getElementById("firstIcon").onmouseout = function() {
		document.getElementById("firstIcon").style.width = "30px";

	}
}
font();



function fontt() {
	document.getElementById("secIcon").onmouseout = function() {
		document.getElementById("secIcon").style.width = "30px";
		
	}
}
fontt();




function fonttt() {
	document.getElementById("thirdIcon").onmouseout = function() {
		document.getElementById("thirdIcon").style.width = "30px";
		
	}
}
fonttt();





function fontttt() {
	document.getElementById("fourthIcon").onmouseout = function() {
		document.getElementById("fourthIcon").style.width = "30px";
		
	}
}
fontttt();

function fonttttt() {
	document.getElementById("fifthIcon").onmouseout = function() {
		document.getElementById("fifthIcon").style.width = "30px";
		
	}
}
fonttttt();













//touchstart events//

function zoom() {
	document.getElementById("firstIcon").ontouchstart = function() {
		document.getElementById("firstIcon").style.width = "60px";

	}
}
zoom();



function zoomm() {
	document.getElementById("secIcon").ontouchstart = function() {
		document.getElementById("secIcon").style.width = "60px";
		
	}
}
zoomm();




function tou() {
	document.getElementById("thirdIcon").ontouchstart = function() {
		document.getElementById("thirdIcon").style.width = "60px";
		
	}
}
tou();





function touc() {
	document.getElementById("fourthIcon").ontouchstart = function() {
		document.getElementById("fourthIcon").style.width = "60px";
		
	}
}
touc();

function touch() {
	document.getElementById("fifthIcon").ontouchstart = function() {
		document.getElementById("fifthIcon").style.width = "60px";
		
	}
}
touch();





//touchend events//









function flash() {
	document.getElementById("firstIcon").ontouchend = function() {
		document.getElementById("firstIcon").style.width = "30px";

	}
}
flash();



function flashh() {
	document.getElementById("secIcon").ontouchend = function() {
		document.getElementById("secIcon").style.width = "30px";
		
	}
}
flashh();




function flashhh() {
	document.getElementById("thirdIcon").ontouchend = function() {
		document.getElementById("thirdIcon").style.width = "30px";
		
	}
}
flashhh();





function flashhhh() {
	document.getElementById("fourthIcon").ontouchend = function() {
		document.getElementById("fourthIcon").style.width = "30px";
		
	}
}
flashhhh();

function flashhhhh() {
	document.getElementById("fifthIcon").ontouchend = function() {
		document.getElementById("fifthIcon").style.width = "30px";
		
	}
}
flashhhhh();






