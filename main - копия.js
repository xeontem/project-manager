//-----------------Manager The Game v0.0.1------------------------------

var params = {};
var listPlayers = [];
var listMaxRolls = [];// for players with equal dice rolls. used in chooseFirstPlayer
var npcnames = ["Artsiom","Vika","Iliya","Olya","Dima","Stephan"];
var usernames = [];
var names = [];
var current; 
var max;
var IDcounter = 0;// for numerate the players

params.players = +prompt("Enter number of players",'1');
//--------------------defer player names and delete them from nameslist----------------------------
for(var i=0; i < params.players;i++){
	usernames.push(prompt("Enter your name","Artsiom"));
};	
//----------------------------add names to usernames list--------------------------
(function merge(){
	for(var i = 0; i < usernames.length;i++){
		for(var j = 0; j < npcnames.length;j++){
			if(usernames[i].toLowerCase() == npcnames[j].toLowerCase())npcnames.splice(j,1);
		}
		names.push(usernames[i]);
	}
	while(names.length < 6) {
		var random = Math.floor(Math.random() * npcnames.length); 
		names.push(npcnames[random]);
		npcnames.splice(random,1);
	}})();	
//-------------------------DESK----------------------------------
var DESK = [
	
	{name : 'Start',
	 add : 0,
	 color : 'nocolor',
 	 rent : 20,
	 owned : true,
	 price : 200,
	 private : "start"},
	{name : 'Gran Via',
	 add : 0,
	 color : 'blue',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Office',
	 add : 0,
	 color : 'nocolor',
	 rent : 20,
	 owned : true,
	 price : 200,
	 private : "office"},
	{name : 'Plaza Mayor',
	 add : 0,
	 color : 'blue',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Income tax',
	 add : 0,
	 color : 'nocolor',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Merchant navy',
	 add : 0,
	 color : 'transport',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Havai',
	 add : 0,
	 color : 'salad',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	 {name : 'Chance',
	 add : 0,
	 color : 'nocolor',
	 rent : 20,
	 owned : true,
	 price : 200,
	 private : "chance"},
	{name : 'Taiti',
	 add : 0,
	 color : 'salad',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Fidji',
	 add : 0,
	 color : 'salad',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Interpol',
	 add : 0,
	 color : 'nocolor',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Piazza Del Popolo',
	 add : 0,
	 color : 'green',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Advertising company',
	 add : 0,
	 color : 'advert',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Saint Angello',
	 add : 0,
	 color : 'green',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Piazza Vienezzia',
	 add : 0,
	 color : 'green',
	 rent : 20,
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Railway company',
	 add : 0,
	 color : 'transport',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Traphalghar square',
	 add : 0,
	 color : 'yellow',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Office',
	 add : 0,
	 color : 'nocolor',
	 rent : 20,
	 owned : true,
	 price : 200,
	 private : "office"},
	{name : 'White hall street',
	 add : 0,
	 color : 'yellow',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Oxford street',
	 add : 0,
	 color : 'yellow',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Exchange',
	 add : 0,
	 color : 'nocolor',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Piatnitskaja street',
	 add : 0,
	 color : 'red',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Chance',
	 add : 0,
	 color : 'nocolor',
	 rent : 20,
	 owned : true,
	 price : 200,
	 private : "chance"},
	{name : 'Okhotnyj ryad',
	 add : 0,
	 color : 'red',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Tverskaja street',
	 add : 0,
	 color : 'red',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Trucking company',
	 add : 0,
	 color : 'transport',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Boulevard Madlen',
	 add : 0,
	 color : 'sappfire',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Champs Elysees',
	 add : 0,
	 color : 'sappfire',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'TV company',
	 add : 0,
	 color : 'advert',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Sen Deni',
	 color : 'sappfire',
	 add : 0,
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'You catched by interpol',
	 add : 0,
	 color : 'nocolor',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Brighton beach',
	 add : 0,
	 color : 'orange',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : '5th avenue',
	 add : 0,
	 color : 'orange',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Office',
	 add : 0,
	 color : 'nocolor',
	 rent : 20,
	 owned : true,
	 price : 200,
	 private : "office"},
	{name : 'Wall street',
	 add : 0,
	 color : 'orange',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Aero company',
	 add : 0,
	 color : 'transport',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Chance',
	 add : 0,
	 color : 'nocolor',
	 rent : 20,
	 owned : true,
	 price : 200,
	 private : "chance"},
	{name : 'Jamato',
	 add : 0,
	 color : 'brown',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Charitable Foundation',
	 add : 0,
	 color : 'nocolor',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1},
	{name : 'Minatoky',
	 add : 0,
	 color : 'brown',
	 rent : 20,
	 owned : false,
	 price : 200,
	 private : -1}];
//------------------------OFFICE---------------------------------
var OFFICE = [
	{name : "move to pos",
	 action : 0,// 0 - move to pos
	 count : 39},// minatoky
	{name : "move to pos",
	 action : 0,// 0 - move to pos
	 count : 23},// okhotnyj ryad
	{name : "get money",
	 action : 1,// 1 - get money
	 count : 50}, // give 50
	{name : "get money",
	 action : 1,// 1 - get money
	 count : -50} ];
//------------------------CHANCE---------------------------------
var CHANCE = [
	{name : "move to pos",
	 action : 0,// 0 - move to pos
	 count : 34},// 
	{name : "move to pos",
	 action : 0,// 0 - move to pos
	 count : 27},// 
	{name : "get money",
	 action : 1,// 1 - get money
	 count : 50}, // give 50
	{name : "get money",
	 action : 1,// 1 - get money
	 count : -50} ];
//-------------------------Prototype for npc methods-----------------
var npcPlayer = {
	work : function(){alert("It works")},
	//==========================detect npc==================================================
	deferNPC : function(){
		for(var i = 0; i < usernames.length;i++){
			if(usernames[i] == this.name) this.npc = false;
		}
	},
	////===================================roll dices=======================================
	rollDices : function(num){
		//if(!this.npc)alert("roll Dices");
		if(num) {this.lastRoll = num;}
		else {this.lastRoll = Math.floor(2 + Math.random() * 12);}
		console.log(`${this.name} threw ${this.lastRoll}`);// show the dices
		this.position += this.lastRoll;
		if(this.position > 39){
			this.position -= 40;
			this.cash += 200;
			console.log(`player ${this.name} has cross the start line and get 200$; ${this.cash}$ left`);
		}	
	},
	//===================================takeOffice==========================================
	takeOffice : function(num){
		var rand = num || Math.floor(Math.random() * 4);
		console.log(`player ${this.name} take Office (${rand}) : ${OFFICE[rand].name}`);
		if(OFFICE[rand].action == 0){
			this.position = OFFICE[rand].count;
			console.log(`${this.name} goes to ${this.position} (${DESK[this.position].name})`);
		}
		if(OFFICE[rand].action == 1){
			this.cash += OFFICE[rand].count;
			console.log(`${this.name} has ${this.cash}$ left`);
		}
	},
	//===================================takeChance==========================================
	takeChance : function(num){
		var rand = num || Math.floor(Math.random() * 4);
		console.log(`player ${this.name} take Chance (${rand}) : ${CHANCE[rand].name}`);
		if(CHANCE[rand].action == 0){
			this.position = CHANCE[rand].count;
			console.log(`${this.name} goes to ${this.position} (${DESK[this.position].name})`);
		}
		if(CHANCE[rand].action == 1){
			this.cash += CHANCE[rand].count;
			console.log(`${this.name} has ${this.cash}$ left`);
		}
	},
	//===================================turnPlayer==========================================
	turnPlayer : function(){
		this.rollDices();//roll Dices
		console.log(`player ${this.name} goes to pos ${this.position} (${DESK[this.position].name})`)
		//------------------------if free
		if(!DESK[this.position].owned){// if card is not private
			if(this.cash > DESK[this.position].price){
				DESK[this.position].owned = true;//change its private prop
				this.cards.push(DESK[this.position]);//--------------------------------------------------------//add card to player list of cards
				this.makeSets();//----------------------------------------testing
				this.cash -= DESK[this.position].price;
				DESK[this.position].private = this.ID;
				console.log(`player ${this.name} buys the ${DESK[this.position].name}`);
				console.log(`player ${this.name} ${this.cash}$ left`)
			} else console.log(`not enough money`);
		}
		//------------------------if office----------------------------------------------
		if(DESK[this.position].private === "office"){
			this.takeOffice();
			current++;
			if(current > listPlayers.length-1) current -= (listPlayers.length);
			return;
		}
		//------------------------if chance----------------------------------------------
		if(DESK[this.position].private === "chance"){
			this.takeChance();
			current++;
			if(current > listPlayers.length-1) current -= (listPlayers.length);
			return;
		}
		// -----------------------if start
		if(DESK[this.position].private === "start"){
			current++;
			if(current > listPlayers.length-1) current -= (listPlayers.length);
			return;	
		}
		//------------------------if owned
		if(DESK[this.position].owned && DESK[this.position].private != this.ID){
			this.cash -= DESK[this.position].rent;
			listPlayers[DESK[this.position].private].cash += DESK[this.position].rent
			console.log(`player ${this.name} pay a rent to player ${listPlayers[DESK[this.position].private].name}`);
			console.log(`player ${this.name} ${this.cash}$ left;   player ${listPlayers[DESK[this.position].private].name} ${listPlayers[DESK[this.position].private].cash}$ left`);
		}
		current++;
		if(current > listPlayers.length-1) current -= (listPlayers.length);
	},
	makeSets : function(){
		if(!this.sets.length){
			this.sets.push({color : this.cards[this.cards.length-1].color,
							cards : [this.cards[this.cards.length-1]]});
			this.cards[this.cards.length-1].add = 1;
		}	
		for (var i = 0; i<this.sets.length; i++){
			if(this.sets[i].color == this.cards[this.cards.length-1].color && !this.cards[this.cards.length-1].add){
				this.sets[i].cards.push(this.cards[this.cards.length-1]);
				this.cards[this.cards.length-1].add = 1;
			}
		}
		if(!this.cards[this.cards.length-1].add){
			this.sets.push({color : this.cards[this.cards.length-1].color,
							cards : this.cards[this.cards.length-1]});
			this.cards[this.cards.length-1].add = 1;
		}	
	}
}	
//-------------------------Prototype for user methods-----------------
var userPlayer = {
	work : function(){alert("Its works")},
	//===================================takeOffice==========================================
	takeOffice : function(num){
		var rand = num || Math.floor(Math.random() * 4);
		console.log(`player ${this.name} take Office (${rand}) : ${OFFICE[rand].name}`);
		if(OFFICE[rand].action == 0){
			this.position = OFFICE[rand].count;
			console.log(`${this.name} goes to ${this.position} (${DESK[this.position].name})`);
		}
		if(OFFICE[rand].action == 1){
			this.cash += OFFICE[rand].count;
			console.log(`${this.name} has ${this.cash}$ left`);
		}
	},
	//===================================takeChance==========================================
	takeChance : function(num){
		var rand = num || Math.floor(Math.random() * 4);
		console.log(`player ${this.name} take Chance (${rand}) : ${CHANCE[rand].name}`);
		if(CHANCE[rand].action == 0){
			this.position = CHANCE[rand].count;
			console.log(`${this.name} goes to ${this.position} (${DESK[this.position].name})`);
		}
		if(CHANCE[rand].action == 1){
			this.cash += CHANCE[rand].count;
			console.log(`${this.name} has ${this.cash}$ left`);
		}
	},
	//===================================turnPlayer==========================================
	turnPlayer : function(){
		this.rollDices();//roll Dices
		console.log(`player ${this.name} goes to pos ${this.position} (${DESK[this.position].name})`)
		//------------------------if free
		if(!DESK[this.position].owned){// if card is not private
			if(this.cash > DESK[this.position].price){
				DESK[this.position].owned = true;//change its private prop
				this.cards.push(DESK[this.position]);//add card to player list of cards
				this.cash -= DESK[this.position].price;
				DESK[this.position].private = this.ID;
				console.log(`player ${this.name} buys the ${DESK[this.position].name}`);
				console.log(`player ${this.name} ${this.cash}$ left`)
			} else console.log(`not enough money`);
		}
		//------------------------if office----------------------------------------------
		if(DESK[this.position].private === "office"){
			this.takeOffice();
			current++;
			if(current > listPlayers.length-1) current -= (listPlayers.length);
			return;
		}
		//------------------------if chance----------------------------------------------
		if(DESK[this.position].private === "chance"){
			this.takeChance();
			current++;
			if(current > listPlayers.length-1) current -= (listPlayers.length);
			return;
		}
		// -----------------------if start
		if(DESK[this.position].private === "start"){
			current++;
			if(current > listPlayers.length-1) current -= (listPlayers.length);
			return;	
		}
		//------------------------if owned
		if(DESK[this.position].owned && DESK[this.position].private != this.ID){
			this.cash -= DESK[this.position].rent;
			listPlayers[DESK[this.position].private].cash += DESK[this.position].rent
			console.log(`player ${this.name} pay a rent to player ${listPlayers[DESK[this.position].private].name}`);
			console.log(`player ${this.name} ${this.cash}$ left;   player ${listPlayers[DESK[this.position].private].name} ${listPlayers[DESK[this.position].private].cash}$ left`);
		}
		current++;
		if(current > listPlayers.length-1) current -= (listPlayers.length);
	}
}

//----------------------constructor for propetries----------------------c
function PLAYER(){
	this.position = 0;
	this.ID = IDcounter;
	this.cash = 1500;
	this.lastRoll;
	this.name = names[IDcounter];//chooseName();
	this.cards = [];
	this.sets = [];
	this.npc = true;
	IDcounter++;
}
PLAYER.prototype = npcPlayer;// point prototype with methods
//-------------------------------------------------------
function createPlayers(num){
	for (var i = 0; i < num; i++) {
		listPlayers[i] = new PLAYER();
		listPlayers[i].deferNPC();// place npc marks
		listPlayers[i].rollDices();// throw dices
	}		
}	
//----------------------------------------choose First Player---------------------------------
function chooseFirstPlayer(arr){
	max = arr[arr.length-1];
	
	for (var i = arr.length-2; i >= 0; i--) {
		if(max.lastRoll < arr[i].lastRoll){
			max = arr[i];	
		}
	}
	listMaxRolls = [];	
	console.log(`${max.name} has max value of dices : ${max.lastRoll}`);// show the dices
	for (var j = 0, i = j+1; i <= arr.length-1; i++) {
		if(arr[j].lastRoll == arr[i].lastRoll && arr[j].lastRoll == max.lastRoll){
			listMaxRolls.push(arr[j]);	

			console.log(`${arr[j].name} has same count with ${max.name} : ${max.lastRoll}`);// show the dices
			j++;
			i = j;
		}
		if(i == arr.length-1){
			j++;
			i = j; 
		}	
	}
	if(listMaxRolls.length){
		listMaxRolls.push(max);
		for(var i = 0; i < listMaxRolls.length; i++){
			listMaxRolls[i].rollDices();// throw dices again
			
		}
		chooseFirstPlayer(listMaxRolls);		
	}
}
//-----------------------------------------------------------------------------------------
createPlayers(6);// spawn npc, start the game
chooseFirstPlayer(listPlayers);
console.log(`First Player is ${max.name} : ${max.lastRoll}`);
//---------------------------------------------reset the counter---------------
for(var i=0;i< listPlayers.length;i++){
	listPlayers[i].position = 0;
}
//------------------------------------------------------------------------------
current = max.ID;//determine current player
//--------------------------turn Player---------------------------------------------
for(var i = 0;i<1000;i++){
	listPlayers[current].turnPlayer();	
}
listPlayers[0].work();
//----------------------create user-----------------------------------------------------

