$(document).ready(function(){
	var game = {
 		players: [],
  		addPlayer: function(){
  			playerConstructor('newUser')
  		}
	};

function playerConstructor(name){
    player = {};
    player.name = name;
    player.hand = [];
    player.addCard = function(card){
    player.hand.push(card);
  };
  	return player;
};


})

