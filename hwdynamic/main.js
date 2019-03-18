$(document).ready(function(){
	$("#taiwan").click(function(){
		document.getElementById("taiwan").src = './images/whiteTaiwan.png';
		$("#earth").fadeTo(3000, 0);
		$("#taiwan").animate({width:"20%", marginTop:"-17%"}, 1500);
		$(document).ready(function(){
			$("#start").click(function(){
				document.body.style.backgroundImage = "url(./images/bg2.png)";
				document.getElementById("page1").style.display = "none";
				document.getElementById("page2").style.display = "block";
			});
		});
	});
});


$(document).ready(function(){
	$("#next").click(function(){
		document.getElementById("page2").style.display = "none";
		document.getElementById("page3").style.display = "block";
	});
});


$(document).ready(function(){
	$("#location").click(function(){
		document.getElementById("mappp").style.display = "block";
		document.getElementById("bgray1").style.display = "block";
	});
});


$(document).ready(function(){
	$("#landmark").click(function(){
		document.getElementById("rightloc").style.display = "block";
		document.getElementById("landmark").style.transform = "scale(2)";
	});
});


$(document).ready(function(){
	$("#recommendation").click(function(){
		document.getElementById("rightrec").style.display = "block";
		document.getElementById("bgray2").style.display = "block";
	});
});


$(document).ready(function(){
	$("#people").click(function(){
		document.getElementById("rightpeo").style.display = "block";
		document.getElementById("bgray3").style.display = "block";
	});
});


$(document).ready(function(){
	$("#time").click(function(){
		document.getElementById("righttim").style.display = "block";
		document.getElementById("bgray4").style.display = "block";
	});
});