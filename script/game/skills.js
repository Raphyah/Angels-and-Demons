var sContainer=document.createElement("div");
sContainer.setAttribute("style","border-style:ridge;");
function createSkills(jsonObject){
	let skill = jsonObject["skill"];
	sContainer.innerHTML="";
	for (let x=0;x<skill.length;x++){
		let d=document.createElement("div");
		d.setAttribute("style","border-style:ridge;border-color:#90d;");
		d.innerHTML=`
${skill[x].name}
		`;
		sContainer.appendChild(d);
	}
}
loadFile.JSON("https://raphyah.github.io/angels-and-demons/script/game/json/skills.json","createSkills");
updateSkills();
getBody.appendChild(sContainer);

function updateSkills(){
	var windowReload;
	var counter;
	
	function updateWindow(time){
		windowReload = window.setTimeout(function(){
			loadFile.JSON("https://raphyah.github.io/angels-and-demons/script/game/json/skills.json","createSkills");
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
