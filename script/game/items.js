var iContainer=document.createElement("div");
iContainer.setAttribute("style","border-style:ridge;");
function createItems(jsonObject){
	let item = jsonObject["item"];
	iContainer.innerHTML="";
	for (let x=0;x<item.length;x++){
		let d=document.createElement("div");
		d.setAttribute("style","border-style:ridge;border-color:#90d;");
		d.innerHTML=`
${item[x].name}
		`;
		iContainer.appendChild(d);
	}
}
loadFile.JSON("script/game/json/items.json","createItems");
updateItems();
getBody.appendChild(iContainer);

function updateItems(){
	var windowReload;
	var counter;
	
	function updateWindow(time){
		windowReload = window.setTimeout(function(){
			loadFile.JSON("script/game/json/items.json","createItems");
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