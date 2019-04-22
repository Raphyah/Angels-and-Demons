var pContainer=document.createElement("div");
pContainer.setAttribute("style","border-style:ridge;");
function createPlayers(jsonObject){
	let player = jsonObject["player"];
	pContainer.innerHTML="";
	for (let x=0;x<player.length;x++){
		let warning={level:"",hp:"",mp:"",hunger:""};
		let lWeapon="";
		let setLeftData=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		let rWeapon="";
		let setRightData=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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
			warning["hp"]="!";
		}else if (player[x].hp.value<=0){
			warning["hp"]="&#9760;";
		}
		if (player[x].mp.value>(20*player[x].mp.dice*player[x].level+player[x].mp.extra)){
			warning["mp"]="!";
		}
		if (player[x].hunger>100){
			warning["hunger"]="!";
		}else if (player[x].hunger<=0){
			warning[2]="&#127831;";
		}
		if (weaponList!=undefined){
			if (player[x].leftWeapon<=weaponList.length){
				lWeapon = weaponList[player[x].leftWeapon].name;
				let atk = weaponList[player[x].leftWeapon].atk;
				let matk = weaponList[player[x].leftWeapon].matk;
				setLeftData = [atk.normal,atk.fire,atk.water,atk.lightning,atk.ice,atk.earth,atk.wind,atk.light,atk.dark,matk.neutral,matk.fire,matk.water,matk.lightning,matk.ice,matk.earth,matk.wind,matk.light,matk.dark];
			}
			if (player[x].rightWeapon<=weaponList.length){
				rWeapon = weaponList[player[x].rightWeapon].name;
				let atk = weaponList[player[x].rightWeapon].atk;
				let matk = weaponList[player[x].rightWeapon].matk;
				setRightData = [atk.normal,atk.fire,atk.water,atk.lightning,atk.ice,atk.earth,atk.wind,atk.light,atk.dark,matk.neutral,matk.fire,matk.water,matk.lightning,matk.ice,matk.earth,matk.wind,matk.light,matk.dark];
			}
		}
		d.innerHTML=`
${player[x].name} - ${player[x].character}(${player[x].level})
<br/>
HP ${warning["hp"]}
<meter class="hp" value="${player[x].hp.value}" min="0" max="${25*player[x].hp.dice*player[x].level+player[x].hp.extra}">
	${player[x].hp.value}/${25*player[x].hp.dice*player[x].level+player[x].hp.extra}
</meter>
<br/>
MP ${warning["mp"]}
<meter class="mp" value="${player[x].mp.value}" min="0" max="${20*player[x].mp.dice*player[x].level+player[x].mp.extra}">
	${player[x].mp.value}/${20*player[x].mp.dice*player[x].level+player[x].mp.extra}
</meter>
<br/>
Fome ${warning["hunger"]}
<meter class="hunger" value="${player[x].hunger}" min="0" max="100">
	${player[x].hunger}%
</meter>
<div style="border-style:ridge;border-color:#4b0082;">
	<div>
		ATK
		<div class="right">
			M.ATK
		</div>
	</div>
	<div>
		Normal ${player[x].atk.normal}(${setLeftData[0]}(${player[x].atk.normal+setLeftData[0]+setRightData[0]})${setRightData[0]})
		<div class="right">
			(${setLeftData[9]}(${player[x].matk.neutral+setLeftData[9]+setRightData[9]})${setRightData[9]})${player[x].matk.neutral} Neutro
		</div>
	</div>
	<div>
		Fogo ${player[x].atk.fire}(${setLeftData[1]}(${player[x].atk.fire+setLeftData[1]+setRightData[1]})${setRightData[1]})
		<div class="right">
			(${setLeftData[10]}(${player[x].matk.fire+setLeftData[10]+setRightData[10]})${setRightData[10]})${player[x].matk.fire} Fogo
		</div>
	</div>
	<div>
		Água ${player[x].atk.water}(${setLeftData[2]}(${player[x].atk.water+setLeftData[2]+setRightData[2]})${setRightData[2]})
		<div class="right">
			(${setLeftData[11]}(${player[x].matk.water+setLeftData[11]+setRightData[11]})${setRightData[11]})${player[x].matk.water} Água
		</div>
	</div>
	<div>
		Eletricidade ${player[x].atk.lightning}(${setLeftData[3]}(${player[x].atk.lightning+setLeftData[3]+setRightData[3]})${setRightData[3]})
		<div class="right">
			(${setLeftData[12]}(${player[x].matk.lightning+setLeftData[12]+setRightData[12]})${setRightData[12]})${player[x].matk.lightning} Eletricidade
		</div>
	</div>
	<div>
		Gelo ${player[x].atk.ice}(${setLeftData[4]}(${player[x].atk.ice+setLeftData[4]+setRightData[4]})${setRightData[4]})
		<div class="right">
			(${setLeftData[13]}(${player[x].matk.ice+setLeftData[13]+setRightData[13]})${setRightData[13]})${player[x].matk.ice} Gelo
		</div>
	</div>
	<div>
		Terra ${player[x].atk.earth}(${setLeftData[5]}(${player[x].atk.earth+setLeftData[5]+setRightData[5]})${setRightData[5]})
		<div class="right">
			(${setLeftData[14]}(${player[x].matk.earth+setLeftData[14]+setRightData[14]})${setRightData[14]})${player[x].matk.earth} Terra
		</div>
	</div>
	<div>
		Vento ${player[x].atk.wind}(${setLeftData[6]}(${player[x].atk.wind+setLeftData[6]+setRightData[6]})${setRightData[6]})
		<div class="right">
			(${setLeftData[15]}(${player[x].matk.wind+setLeftData[15]+setRightData[15]})${setRightData[15]})${player[x].matk.wind} Vento
		</div>
	</div>
	<div>
		Luz ${player[x].atk.light}(${setLeftData[7]}(${player[x].atk.light+setLeftData[7]+setRightData[7]})${setRightData[7]})
		<div class="right">
			(${setLeftData[16]}(${player[x].matk.light+setLeftData[16]+setRightData[16]})${setRightData[16]})${player[x].matk.light} Luz
		</div>
	</div>
	<div>
		Sombra ${player[x].atk.dark}(${setLeftData[8]}(${player[x].atk.dark+setLeftData[8]+setRightData[8]})${setRightData[8]})
		<div class="right">
			(${setLeftData[17]}(${player[x].matk.dark+setLeftData[17]+setRightData[17]})${setRightData[17]})${player[x].matk.dark} Sombra
		</div>
	</div>
</div>
<div style="border-style:ridge;border-color:#4b0082;">
	<div>
		DEF
		<div class="right">
			M.DEF
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
AGI ${player[x].agi}
<br/>
EVA ${player[x].eva}
<div>
	Weapon L {${lWeapon}
	<div class="right">
		${rWeapon}} R Weapon
	</div>
</div>
		`;
		pContainer.appendChild(d);
	}
}
loadFile.JSON("script/game/json/players.json","createPlayers");
updatePlayers();
getBody.appendChild(pContainer);

function updatePlayers(){
	var windowReload;
	var counter;
	
	function updateWindow(time){
		windowReload = window.setTimeout(function(){
			loadFile.JSON("script/game/json/players.json","createPlayers");
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