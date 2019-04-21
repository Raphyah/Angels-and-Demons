var eContainer=document.createElement("div");
eContainer.setAttribute("style","border-style:ridge;");
function createEnemies(jsonObject){
	let enemy = jsonObject["enemy"];
	eContainer.innerHTML="";
	for (let x=0;x<enemy.length;x++){
		let d=document.createElement("div");
		d.setAttribute("style","border-style:ridge;border-color:#90d;");
		d.innerHTML=`
${enemy[x].name}
		`;
		eContainer.appendChild(d);
	}
}
loadFile.JSON("https://raphyah.github.io/angels-and-demons/script/game/json/enemies.json","createEnemies");
updateEnemies();
getBody.appendChild(eContainer);

function updateEnemies(){
	var windowReload;
	var counter;
	
	function updateWindow(time){
		windowReload = window.setTimeout(function(){
			loadFile.JSON("https://raphyah.github.io/angels-and-demons/script/game/json/enemies.json","createEnemies");
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
