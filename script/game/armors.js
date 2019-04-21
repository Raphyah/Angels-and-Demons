var aContainer=document.createElement("div");
aContainer.setAttribute("style","border-style:ridge;");
function createArmors(jsonObject){
	let armor = jsonObject["armor"];
	aContainer.innerHTML="";
	for (let x=0;x<armor.length;x++){
		let d=document.createElement("div");
		d.setAttribute("style","border-style:ridge;border-color:#90d;");
		d.innerHTML=`
${armor[x].name}
		`;
		aContainer.appendChild(d);
	}
}
loadFile.JSON("script/game/json/armors.json","createArmors");
updateArmors();
getBody.appendChild(aContainer);

function updateArmors(){
	var windowReload;
	var counter;
	
	function updateWindow(time){
		windowReload = window.setTimeout(function(){
			loadFile.JSON("script/game/json/armors.json","createArmors");
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