function sayHello() {
		alert("He is my lovely brother Noam!");
}
function submit() {
		alert("Let's submit data to restore at Remote Server!");
}

function startTime() {
		var today=new Date();
		var h=today.getHours();
		var m=today.getMinutes();
		var s=today.getSeconds();
		m = checkTime(m);
		s = checkTime(s);
		document.getElementById('clckTxt').innerHTML = h+":"+m+":"+s;
		var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
		if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
		return i;
}

function myBackgroundFunction() {
		//alert(document.body.style.backgroundImage);
		//alert(document.body.style.backgroundImage.name);
		//alert(document.body.style.background);
		//alert(document.body.style.backgroundColor);
		//alert(document.body.styleSheets);
		//alert(window.width.sizeToContent);
}
	
function pic1()
        {
            document.getElementById("img").src = "img/NoamBrother.jpg";
        }
function pic2()
        {
            document.getElementById("img").src ="img/MaiParents.jpg";
        }

