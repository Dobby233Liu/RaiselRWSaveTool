var ralseiFacer = document.getElementById("ralseifacer");

function ralsei_please_switch_your_face(){
	// rude blusher: ralsei
	if(ralseiFacer.src == "./assets/img/ralsei_hope.png"){
		ralseiFacer.src = "./assets/img/ralsei_blush.png"; 
	} else {
		ralseiFacer.src = "./assets/img/ralsei_hope.png";
	}
}