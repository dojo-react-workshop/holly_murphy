$(document).ready(function(){

	var nameArr=["Willy the Goblin", "Big Daddy", "Father Christmas"]
	var placeArr=["the soup kitchen", "Disneyland", "the White House"]
	var actionArr=["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]


	var customName = document.getElementById('customname');
	//var randomize = document.querySelector('.randomize');
	var story = document.querySelector('.story');

	function randomValueFromArray(array){
	  return array[Math.floor(Math.random()*array.length)];
	}

	$('.randomize').click(function(){
		  if(customName.value != '') {
    		var name = customName.value;
  		  }else{
  		  	name = randomValueFromArray(nameArr)
    		console.log(nameArr)
  		  }

		  if(document.getElementById("uk").checked) {
		    var weight = Math.round(300);
		    var temperature =  Math.round(94);
		    var weight_des = 'liters'
		    var temp_des = 'celcius'
		  }else{
		  	var weight =  Math.round(300)*2.2046;
		  	var temperature = ((Math.round(94)*9)/5)+32;
		  	var weight_des = 'pounds'
		    var temp_des = 'farenheit'
		  }


 		  story.textContent = `It was ${temperature} ${temp_des} outside, so 
 		  	${name} went for a walk. When they
 		  	 got to ${randomValueFromArray(placeArr)}, 
 		  	they stared in horror for a few moments, then ${randomValueFromArray(actionArr)}.
 		  	 Bob saw the whole thing, but he was not surprised — 
 		  	 ${name} weighs ${weight} ${weight_des}, and it was a hot day.`;
  		  story.style.visibility = 'visible';
	});
})