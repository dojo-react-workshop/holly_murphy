function personConstructor(name){
	var person={
	name:name,
	distance_traveled:0,
	say_name: function(){
		alert(this.name)
	},
	say_something:function(param){
		alert(`${this.name} says '${param}'`)
	},
	walk:function(){
		this.distance_traveled += 3
		alert(`${this.name} is walking`)
	},
	run:function(){
		this.distance_traveled += 10
		alert(`${this.name} is running`)
	},
	crawl:function(){
		this.distance_traveled += 1
		alert(`${this.name} is running`)
	}
}
	return person
}

function ninjaConstructor(name){
	var ninja={
	name:name,
	cohort:0,
	belt_level:"yellow",
	levelUp:function(){
		if(this.belt_level === "yellow"){
			this.belt_level = "black"
		}
	  }
	}
	return ninja
}

