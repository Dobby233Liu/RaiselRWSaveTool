function ralsei_please_switch_your_face(){
	// rude blusher: ralsei
	console.log(document.getElementById("ralseifacer").src)
	if(document.getElementById("ralseifacer").src.endsWith("assets/img/ralsei_hope.png")){
		document.getElementById("ralseifacer").src = "assets/img/ralsei_blush.png"; 
	} else {
		document.getElementById("ralseifacer").src = "assets/img/ralsei_hope.png";
	}
}

var saveFile = null

function loadInputSaveFile(evt){
	var $el = $('#saveFile');
	var files = evt.target.files;
	var file = files.length > 0 ? files[0] : null;
	if (file) {
		var reader = new FileReader();
		reader.onload = function(e){
			saveFile = new DeltaruneSaveRead().ptToSaveslot(e.target.result, new DeltaruneSaveSlot())
		}
		reader.readAsText(file);
	}
}

document.getElementById('saveFile').addEventListener('change', loadInputSaveFile, false);