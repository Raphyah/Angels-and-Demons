var wContainer=document.createElement("div");
wContainer.setAttribute("style","border-style:ridge;");
function createWeapons(jsonObject){
	let weapon = jsonObject["weapon"];
	weaponList=weapon;
	wContainer.innerHTML="";
	for (let x=0;x<weapon.length;x++){
		let d=document.createElement("div");
		d.setAttribute("style","border-style:ridge;border-color:#90d;");
		d.innerHTML=`
${weapon[x].name}
		`;
		wContainer.appendChild(d);
	}
}
loadFile.JSON("script/game/json/weapons.json","createWeapons");
updateWeapons();
getBody.appendChild(wContainer);

function updateWeapons(){
	var windowReload;
	var counter;
	
	function updateWindow(time){
		windowReload = window.setTimeout(function(){
			loadFile.JSON("script/game/json/weapons.json","createWeapons");
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