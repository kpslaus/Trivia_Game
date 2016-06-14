var Winner = ["C", "B", "B", "A", "D", "C", "B", "A"];


$(document).ready(function(){

};

$("#btn btn-sucess").on('click', function(){
	if( Winner === true)
		.html("Congrats!")
}  	else{
	.html("You're totally buggin'")
}

	var optionOne = [ "C"]
		if( optionOne === C){
			.html("Congrats!")
		} else{
			.html("You're totally buggin'")
		});

	var optionTwo = [ "B"]
		if( optionTwo === B){
			.html("Congrats!")
		} else{
			.html("You're totally buggin'")
		};

	var optionThree = ["B"]
		if( optionThree === B){
			.html("Congrats!")
		} else{
			.html("You're totally buggin'")
		};

	var optionFour = [ "A"]
		if( optionFour === A){
			.html("Congrats!")
		} else{
			.html("You're totally buggin'")
		};

	var optionFive = [ "D"]
		if( optionFive === D){
			.html("Congrats!")
		} else{
			.html("You're totally buggin'")
		};

	var optionSix = [ "C"]
		if( optionSix === C){
			.html("Congrats!")
		} else{
			.html("You're totally buggin'")
		};

	var optionSeven = [ "C"]
		if( optionSeven === C){
			.html("Congrats!")
		} else{
			.html("You're totally buggin'")
		};

	var optionEight = [ "B"]
		if( optionEight === B){
			.html("Congrats!")
		} else{
			.html("You're totally buggin'")
		}

	var optionNine = [ "A"]
		if( optionNine === A){
			.html("Congrats!")
		} else{
			.html("You're totally buggin'")
		};

window.onload = function(){
	$("#start").click(timer. start);
	$("#lap").click(timer.lap);
},

var timer ={
	time: 0,
	lap: 1,
	reset: function(){
		timer.time = 0;
		time.lap = 1;
		$("#display").html("5:00");
	}
},
start: function(){
	intervalId = setInterval(timer.count, 1000);

},
count: function(){
	timer.time++;
	var Time = timer.timeConverter(timer.time);
	$("#display").html(Time);
},
timeConverter: function(t){
	var minutes = Math.floor(t/300);
	var seconds = t (minutes * 300);
	if (seconds < 10){
		seconds = "0" + seconds;
	}
	if (minutes === 0){
		minutes = "00";
	}else if (minutes < 300){
		minutes = "0" + minutes;
	}

	return minutes + ":" + seconds;
}
