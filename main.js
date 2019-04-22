var getHead = document.head;
var getBody = document.body;

var playerList;
var npcList;
var petList;
var weaponList;
var armorList;
var itemList;
var skillList;
var enemyList;

var globalReloadTime=0;
var current=0;
function next(){
	current++;
	globalReloadTime+=0.5;
	if (current==1)loadFile.SCRIPT("https://raphyah.github.io/angels-and-demons/script/game/npcs.js","body","next");
	if (current==2)loadFile.SCRIPT("https://raphyah.github.io/angels-and-demons/script/game/pets.js","body","next");
	if (current==3)loadFile.SCRIPT("https://raphyah.github.io/angels-and-demons/script/game/weapons.js","body","next");
	if (current==4)loadFile.SCRIPT("https://raphyah.github.io/angels-and-demons/script/game/armors.js","body","next");
	if (current==5)loadFile.SCRIPT("https://raphyah.github.io/angels-and-demons/script/game/items.js","body","next");
	if (current==6)loadFile.SCRIPT("https://raphyah.github.io/angels-and-demons/script/game/skills.js","body","next");
	if (current==7)loadFile.SCRIPT("https://raphyah.github.io/angels-and-demons/script/game/enemies.js","body","next");
	if (current==8)loadFile.SCRIPT("https://raphyah.github.io/angels-and-demons/script/game/notes.js","body");
}

loadFile.SCRIPT("https://raphyah.github.io/angels-and-demons/script/game/players.js","body","next");
loadFile.STYLE("https://raphyah.github.io/angels-and-demons/style/main.css");
