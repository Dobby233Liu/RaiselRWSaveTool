var ralseiFacer = document.getElementById("ralseifacer");

function ralsei_please_switch_your_face(){
	if(ralseiFacer.src == "./assets/img/raisel_hope.png"){
		ralseiFacer.src = "./assets/img/raisel_blush.png"; 
	} else {
		ralseiFacer.src = "./assets/img/raisel_hope.png";
	}
}