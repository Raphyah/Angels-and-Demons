var npcsContainer=document.createElement("div");
npcsContainer.setAttribute("style","border-style:ridge;");
function createNPCs(jsonObject){
	let npc = jsonObject["npc"];
	npcsContainer.innerHTML="";
	for (let x=0;x<npc.length;x++){
		let d=document.createElement("div");
		d.setAttribute("style","border-style:ridge;border-color:#90d;");
		d.innerHTML=`
${npc[x].name}
<br/>
HP
<meter class="hp" value="${npc[x].hp.value}" min="0" max="${npc[x].hp.max}">
	${npc[x].hp.value}/${npc[x].hp.max}
</meter>
<br/>
MP
<meter class="mp" value="${npc[x].mp.value}" min="0" max="${npc[x].mp.max}">
	${npc[x].mp.value}/${npc[x].mp.max}
</meter>
<br/>
Fome
<meter class="hunger" value="${npc[x].hunger}" min="0" max="100">
	${npc[x].hunger}%
</meter>
<div style="border-style:ridge;border-color:#4b0082;">
	<div>
		Atk
		<div class="right">
			M.Atk
		</div>
	</div>
	<div>
		Normal ${npc[x].atk.normal}
		<div class="right">
			${npc[x].matk.neutral} Neutro
		</div>
	</div>
	<div>
		Fogo ${npc[x].atk.fire}
		<div class="right">
			${npc[x].matk.fire} Fogo
		</div>
	</div>
	<div>
		Água ${npc[x].atk.water}
		<div class="right">
			${npc[x].matk.water} Água
		</div>
	</div>
	<div>
		Eletricidade ${npc[x].atk.lightning}
		<div class="right">
			${npc[x].matk.lightning} Eletricidade
		</div>
	</div>
	<div>
		Gelo ${npc[x].atk.ice}
		<div class="right">
			${npc[x].matk.ice} Gelo
		</div>
	</div>
	<div>
		Terra ${npc[x].atk.earth}
		<div class="right">
			${npc[x].matk.earth} Terra
		</div>
	</div>
	<div>
		Vento ${npc[x].atk.wind}
		<div class="right">
			${npc[x].matk.wind} Vento
		</div>
	</div>
	<div>
		Luz ${npc[x].atk.light}
		<div class="right">
			${npc[x].matk.light} Luz
		</div>
	</div>
	<div>
		Sombra ${npc[x].atk.dark}
		<div class="right">
			${npc[x].matk.dark} Sombra
		</div>
	</div>
</div>
<div style="border-style:ridge;border-color:#4b0082;">
	<div>
		Def
		<div class="right">
			M.Def
		</div>
	</div>
	<div>
		Normal ${npc[x].def.normal}
		<div class="right">
			${npc[x].mdef.neutral} Neutro
		</div>
	</div>
	<div>
		Fogo ${npc[x].def.fire}
		<div class="right">
			${npc[x].mdef.fire} Fogo
		</div>
	</div>
	<div>
		Água ${npc[x].def.water}
		<div class="right">
			${npc[x].mdef.water} Água
		</div>
	</div>
	<div>
		Eletricidade ${npc[x].def.lightning}
		<div class="right">
			${npc[x].mdef.lightning} Eletricidade
		</div>
	</div>
	<div>
		Gelo ${npc[x].def.ice}
		<div class="right">
			${npc[x].mdef.ice} Gelo
		</div>
	</div>
	<div>
		Terra ${npc[x].def.earth}
		<div class="right">
			${npc[x].mdef.earth} Terra
		</div>
	</div>
	<div>
		Vento ${npc[x].def.wind}
		<div class="right">
			${npc[x].mdef.wind} Vento
		</div>
	</div>
	<div>
		Luz ${npc[x].def.light}
		<div class="right">
			${npc[x].mdef.light} Luz
		</div>
	</div>
	<div>
		Sombra ${npc[x].def.dark}
		<div class="right">
			${npc[x].mdef.dark} Sombra
		</div>
	</div>
</div>
		`;
		npcsContainer.appendChild(d);
	}
}
loadFile.JSON("script/game/json/npcs.json","createNPCs");
updateNPCs();
getBody.appendChild(npcsContainer);

function updateNPCs(){
	var windowReload;
	var counter;
	
	function updateWindow(time){
		windowReload = window.setTimeout(function(){
			loadFile.JSON("script/game/json/npcs.json","createNPCs");
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