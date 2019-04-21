var nContainer=document.createElement("div");
nContainer.setAttribute("style","border-style:ridge;");
function createNotes(jsonObject){
	let note = jsonObject["note"];
	nContainer.innerHTML="";
	for (let x=0;x<note.length;x++){
		let d=document.createElement("div");
		d.setAttribute("style","border-style:ridge;border-color:#90d;");
		if(x===0){
			d.innerHTML=`
${note[x]}
			`;
		}else{
			d.innerHTML=`
Day ${x} - ${note[x]}
			`;
		}
		nContainer.appendChild(d);
	}
}
loadFile.JSON("script/game/json/notes.json","createNotes");
updateNotes();
getBody.appendChild(nContainer);

function updateNotes(){
	var windowReload;
	var counter;
	
	function updateWindow(time){
		windowReload = window.setTimeout(function(){
			loadFile.JSON("script/game/json/notes.json","createNotes");
		}, 1000*time);
		counter = window.setInterval(function(){
			if (time > 0){
				time --;
			}else{
				window.clearTimeout(windowReload);
				window.clearInterval(counter);
				updateWindow(globalReloadTime);
			}
		}, 1000);
	}updateWindow(globalReloadTime);
}