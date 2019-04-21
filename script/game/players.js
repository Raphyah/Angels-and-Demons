var pContainer=document.createElement("div");
pContainer.setAttribute("style","border-style:ridge;");
function createPlayers(jsonObject){
	let player = jsonObject["player"];
	pContainer.innerHTML="";
	for (let x=0;x<player.length;x++){
		let warning=["","",""];
		let d=document.createElement("div");
		if (player[x].hide!=undefined){
			if (player[x].hide==true){
				continue;
			}else{
				d.setAttribute("style","border-style:ridge;border-color:#90d;");
			}
		}else{
			d.setAttribute("style","border-style:ridge;border-color:#90d;");
		}
		if (player[x].hp.value>(25*player[x].hp.dice*player[x].level+player[x].hp.extra)){
			warning[0]="!";
		}else if (player[x].hp.value<=0){
			warning[0]="&#9760;";
		}
		if (player[x].mp.value>(20*player[x].mp.dice*player[x].level+player[x].mp.extra)){
			warning[1]="!";
		}
		if (player[x].hunger>100){
			warning[2]="!";
		}else if (player[x].hunger<=0){
			warning[2]="&#127831;";
		}
		d.innerHTML=`
${player[x].name} - ${player[x].character}
<br/>
HP ${warning[0]}
<meter class="hp" value="${player[x].hp.value}" min="0" max="${25*player[x].hp.dice*player[x].level+player[x].hp.extra}">
	${player[x].hp.value}/${25*player[x].hp.dice*player[x].level+player[x].hp.extra}
</meter>
<br/>
MP ${warning[1]}
<meter class="mp" value="${player[x].mp.value}" min="0" max="${20*player[x].mp.dice*player[x].level+player[x].mp.extra}">
	${player[x].mp.value}/${20*player[x].mp.dice*player[x].level+player[x].mp.extra}
</meter>
<br/>
Fome ${warning[2]}
<meter class="hunger" value="${player[x].hunger}" min="0" max="100">
	${player[x].hunger}%
</meter>
<div style="border-style:ridge;border-color:#4b0082;">
	<div>
		Atk
		<div class="right">
			M.Atk
		</div>
	</div>
	<div>
		Normal ${player[x].atk.normal}
		<div class="right">
			${player[x].matk.neutral} Neutro
		</div>
	</div>
	<div>
		Fogo ${player[x].atk.fire}
		<div class="right">
			${player[x].matk.fire} Fogo
		</div>
	</div>
	<div>
		Água ${player[x].atk.water}
		<div class="right">
			${player[x].matk.water} Água
		</div>
	</div>
	<div>
		Eletricidade ${player[x].atk.lightning}
		<div class="right">
			${player[x].matk.lightning} Eletricidade
		</div>
	</div>
	<div>
		Gelo ${player[x].atk.ice}
		<div class="right">
			${player[x].matk.ice} Gelo
		</div>
	</div>
	<div>
		Terra ${player[x].atk.earth}
		<div class="right">
			${player[x].matk.earth} Terra
		</div>
	</div>
	<div>
		Vento ${player[x].atk.wind}
		<div class="right">
			${player[x].matk.wind} Vento
		</div>
	</div>
	<div>
		Luz ${player[x].atk.light}
		<div class="right">
			${player[x].matk.light} Luz
		</div>
	</div>
	<div>
		Sombra ${player[x].atk.dark}
		<div class="right">
			${player[x].matk.dark} Sombra
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
		Normal ${player[x].def.normal}
		<div class="right">
			${player[x].mdef.neutral} Neutro
		</div>
	</div>
	<div>
		Fogo ${player[x].def.fire}
		<div class="right">
			${player[x].mdef.fire} Fogo
		</div>
	</div>
	<div>
		Água ${player[x].def.water}
		<div class="right">
			${player[x].mdef.water} Água
		</div>
	</div>
	<div>
		Eletricidade ${player[x].def.lightning}
		<div class="right">
			${player[x].mdef.lightning} Eletricidade
		</div>
	</div>
	<div>
		Gelo ${player[x].def.ice}
		<div class="right">
			${player[x].mdef.ice} Gelo
		</div>
	</div>
	<div>
		Terra ${player[x].def.earth}
		<div class="right">
			${player[x].mdef.earth} Terra
		</div>
	</div>
	<div>
		Vento ${player[x].def.wind}
		<div class="right">
			${player[x].mdef.wind} Vento
		</div>
	</div>
	<div>
		Luz ${player[x].def.light}
		<div class="right">
			${player[x].mdef.light} Luz
		</div>
	</div>
	<div>
		Sombra ${player[x].def.dark}
		<div class="right">
			${player[x].mdef.dark} Sombra
		</div>
	</div>
</div>
		`;
		pContainer.appendChild(d);
	}
}
loadFile.JSON("https://raphyah.github.io/angels-and-demons/script/game/json/players.json","createPlayers");
updatePlayers();
getBody.appendChild(pContainer);

function updatePlayers(){
	var windowReload;
	var counter;
	
	function updateWindow(time){
		windowReload = window.setTimeout(function(){
alert("update");
			loadFile.JSON("https://raphyah.github.io/angels-and-demons/script/game/json/players.json","createPlayers");
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
