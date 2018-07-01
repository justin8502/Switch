//Function to generate base array
var generaterand = function() {
	var arr = [1,2,3,4,5,6,7,8,9];
	for(var i = (arr.length-1); i > -1; i--) {
		var rand = Math.floor((Math.random() * i) + 1);
		var temp = arr[i];
		arr[i] = arr[rand]
		arr[rand] = temp;
	}
	return arr;
};
//Function to check if the tiles are first element in color array
//A little inefficient, but was unable to find a way to loop thru div classes
var checkall = function(color) {
	if($('.one').hasClass(color[0])){
		if($('.two').hasClass(color[0])){
			if($('.three').hasClass(color[0])){
				if($('.four').hasClass(color[0])){
					if($('.five').hasClass(color[0])){
						if($('.six').hasClass(color[0])){
							if($('.seven').hasClass(color[0])){
								if($('.eight').hasClass(color[0])){
									if($('.nine').hasClass(color[0])){
										return true;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return false;
};
//Check if the tiles are on the 0th step
var ifvictory = function(seq, colors) {
	var victory = true;
		for(var i = 0; i < seq.length; i++){
			if(seq[i][0] != 0) {
				victory = false;
			}
		}
		$('.debugbox').text(checkall(colors));
	return victory;
}
//See if array is useable
var getusable = function(arr, num) {
	return arr.slice(0, num);
}
//Generate random number within bounds
var generatewithin = function(num) {
	var counter = Math.random();
	if(counter > 0.66){
		return (num+1);
	} else if (counter < 0.33) {
		if((num-1) < 0) {
			return 0;
		} else {
		return (num-1);
		}
	} else {
		return num;
	}
};
//Fill array with sequences
var fillit = function(diff){
	var temp = [];
	for(var k = 0; k < ((diff*2)+1); k++){
		if(Math.random() > 0.5){ 
			temp.push((Math.floor(Math.random() * (diff-1)))+1);
		} else {
		
		}
	}
	temp.push(0);
	return temp;
};

var main = function () {

	//DEFAULTS
	var victory = false;
	var tagger;
	var firsttime = true;
	var inplay = false;
	var diff = 3;
	var numbof = generatewithin(diff);
	var array = getusable(generaterand(),numbof);
	var colors = ["blue", "green", "red", "purple"];
	var seq = [[]];
	for(var k = 0; k < numbof; k++){
		seq[k] = fillit(diff);
	}
	//END DEFAULTS	
	//Set color to be darkened when mouseover
	$('.tile').mouseover(function () {
		if($(this).css("opacity") == 0.5){
			$(this).css("opacity", 1);
			$(this).removeClass('willfade');
		}
	});
	//Reset color when mouse leaves
	$('.tile').mouseleave(function () {
		if($(this).css("opacity") == 1){
			$(this).css("opacity", 0.5);
			$(this).addClass('willfade');
		}
	});
	$('.tile').click(function () {
		inplay = true;
		$('.willfade').fadeOut(500, function() { 
			for(var i = 0; i < array.length; i++){
				switch(array[i]){
					case 1:
						if(!$('.one').hasClass("willfade")){
							tagger = 1;
							break;
						} else {
							$('.one').removeClass('blue');
							$('.one').removeClass('red');
							$('.one').removeClass('green');
							$('.one').removeClass('purple');
							var placement = seq[i][0];
							$('.one').addClass(colors[placement]);
							break;
						}
					case 2:
						if(!$('.two').hasClass("willfade")){
							tagger = 2;
							break;
						} else {
							$('.two').removeClass('blue');
							$('.two').removeClass('red');
							$('.two').removeClass('green');
							$('.two').removeClass('purple');
							var placement = seq[i][0];
							$('.two').addClass(colors[placement]);
							break;
						}
					case 3:
						if(!$('.three').hasClass("willfade")){
							tagger = 3;
							break;
						} else {
							$('.three').removeClass('blue');
							$('.three').removeClass('red');
							$('.three').removeClass('green');
							$('.three').removeClass('purple');
							var placement = seq[i][0];
							$('.three').addClass(colors[placement]);
							break;
						}
					case 4:
						if(!$('.four').hasClass("willfade")){
							tagger = 4;
							break;
						} else {
							$('.four').removeClass('blue');
							$('.four').removeClass('red');
							$('.four').removeClass('green');
							$('.four').removeClass('purple');
							var placement = seq[i][0];
							$('.four').addClass(colors[placement]);
							break;
						}
					case 5:
						if(!$('.five').hasClass("willfade")){
							tagger = 5;
							break;
						} else {
							$('.five').removeClass('blue');
							$('.five').removeClass('red');
							$('.five').removeClass('green');
							$('.five').removeClass('purple');
							var placement = seq[i][0];
							$('.five').addClass(colors[placement]);
							break;
						}
					case 6:
						if(!$('.six').hasClass("willfade")){
							tagger = 6;
							break;
						} else {
							$('.six').removeClass('blue');
							$('.six').removeClass('red');
							$('.six').removeClass('green');
							$('.six').removeClass('purple');
							var placement = seq[i][0];
							$('.six').addClass(colors[placement]);
							break;
						}			
					case 7:
						if(!$('.seven').hasClass("willfade")){
							tagger = 7;
							break;
						} else {
							$('.seven').removeClass('blue');
							$('.seven').removeClass('red');
							$('.seven').removeClass('green');
							$('.seven').removeClass('purple');
							var placement = seq[i][0];
							$('.seven').addClass(colors[placement]);
							break;
						}
					case 8:
						if(!$('.eight').hasClass("willfade")){
							tagger = 8;
							break;
						} else {
							$('.eight').removeClass('blue');
							$('.eight').removeClass('red');
							$('.eight').removeClass('green');
							$('.eight').removeClass('purple');
							var placement = seq[i][0];
							$('.eight').addClass(colors[placement]);
							break;
						}
					case 9:
						if(!$('.nine').hasClass("willfade")){
							tagger = 9;
							break;
						} else {
							$('.nine').removeClass('blue');
							$('.nine').removeClass('red');
							$('.nine').removeClass('green');
							$('.nine').removeClass('purple');
							var placement = seq[i][0];
							$('.nine').addClass(colors[placement]);
							break;
						}
				}

			}
				victory = checkall(colors);
				if(victory && !(firsttime)) {
					$('.victory').addClass('infront1');
						var winval = parseInt($('.current').text());
						var oldval = parseInt($('.best').text());
					if(oldval === 0 || (oldval > winval)){
						$('.best').text(winval);
					}
				}
		}).fadeIn(500);

		if (firsttime){
		} else {
		for(var i = 0; i < seq.length; i++){
			if(array[i] === tagger) {

			} else {
			var temp = seq[i];
			var first = temp[0];
			for(var k = 0; k < temp.length-1; k++){
				temp[k] = temp[k+1];
			}
			temp[temp.length-1] = first;
			seq[i] = temp;
			}
		}
		}

		firsttime = false;

		var val = parseInt($('.current').text());
		$('.current').text(val + 1);
		tagger = 0;
	});
	$('.difficulty').click(function () {
		if(inplay){
		} else {
		$('.difficulty').removeClass('active');
		$(this).addClass('active');
		var active = ($(this).text()).charAt(9);
			switch(active){
				case 'A' :
					tagger = 0;
					firsttime = true;
					inplay = false;
					diff = 2;
					numbof = generatewithin(diff);
					array = getusable(generaterand(),numbof);
					seq = [[]];
					for(var k = 0; k < numbof; k++){
						seq[k] = fillit(diff);
					}
					break;
				case 'E' :
					tagger = 0;
					firsttime = true;
					inplay = false;
					diff = 3;
					numbof = generatewithin(diff);
					array = getusable(generaterand(),numbof);
					seq = [[]];
					for(var k = 0; k < numbof; k++){
						seq[k] = fillit(diff);
					}
					break;
				case 'H' :
					tagger = 0;
					firsttime = true;
					inplay = false;
					diff = 4;
					numbof = generatewithin(diff);
					array = getusable(generaterand(),numbof);
					seq = [[]];
					for(var k = 0; k < numbof; k++){
						seq[k] = fillit(diff);
					}
					break;
	
			}
		}
	});
	$('.colorb').click(function () {
		$('.colorp').removeClass('activec');
		$(this).addClass('activec');
		colors = ["blue", "green", "red", "purple"];
		$('.frame').children().fadeOut(300, function() { 
			$('.frame').children().removeClass('blue');
			$('.frame').children().removeClass('green');
			$('.frame').children().removeClass('red');
			$('.frame').children().removeClass('purple');
			$('.frame').children().addClass('blue');
			if(!firsttime){
			for(var i = 0; i < array.length; i++){
				switch(array[i]){
					case 1:
						$('.one').removeClass('blue');
						var placement = seq[i][0];
						$('.one').addClass(colors[placement]);
						break;
					case 2:
						$('.two').removeClass('blue');
						var placement = seq[i][0];
						$('.two').addClass(colors[placement]);
						break;
					case 3:
						$('.three').removeClass('blue');
						var placement = seq[i][0];
						$('.three').addClass(colors[placement]);
						break;
					case 4:
						$('.four').removeClass('blue');
						var placement = seq[i][0];
						$('.four').addClass(colors[placement]);
						break;
					case 5:
						$('.five').removeClass('blue');
						var placement = seq[i][0];
						$('.five').addClass(colors[placement]);
						break;
					case 6:
						$('.six').removeClass('blue');
						var placement = seq[i][0];
						$('.six').addClass(colors[placement]);
						break;			
					case 7:
						$('.seven').removeClass('blue');
						var placement = seq[i][0];
						$('.seven').addClass(colors[placement]);
						break;
					case 8:
						$('.eight').removeClass('blue');
						var placement = seq[i][0];
						$('.eight').addClass(colors[placement]);
						break;
					case 9:
						$('.nine').removeClass('blue');
						var placement = seq[i][0];
						$('.nine').addClass(colors[placement]);
						break;	
				}
			}
			}
		}).fadeIn(300);
	});
	$('.colorg').click(function () {
		$('.colorp').removeClass('activec');
		$(this).addClass('activec');
		colors = ["green", "red", "purple", "blue"];
		$('.frame').children().fadeOut(500, function() { 
			$('.frame').children().removeClass('blue');
			$('.frame').children().removeClass('green');
			$('.frame').children().removeClass('red');
			$('.frame').children().removeClass('purple');
			$('.frame').children().addClass('green');
			if(!firsttime){
			for(var i = 0; i < array.length; i++){
				switch(array[i]){
					case 1:
						$('.one').removeClass('green');
						var placement = seq[i][0];
						$('.one').addClass(colors[placement]);
						break;
					case 2:
						$('.two').removeClass('green');
						var placement = seq[i][0];
						$('.two').addClass(colors[placement]);
						break;
					case 3:
						$('.three').removeClass('green');
						var placement = seq[i][0];
						$('.three').addClass(colors[placement]);
						break;
					case 4:
						$('.four').removeClass('green');
						var placement = seq[i][0];
						$('.four').addClass(colors[placement]);
						break;
					case 5:
						$('.five').removeClass('green');
						var placement = seq[i][0];
						$('.five').addClass(colors[placement]);
						break;
					case 6:
						$('.six').removeClass('green');
						var placement = seq[i][0];
						$('.six').addClass(colors[placement]);
						break;			
					case 7:
						$('.seven').removeClass('green');
						var placement = seq[i][0];
						$('.seven').addClass(colors[placement]);
						break;
					case 8:
						$('.eight').removeClass('green');
						var placement = seq[i][0];
						$('.eight').addClass(colors[placement]);
						break;
					case 9:
						$('.nine').removeClass('green');
						var placement = seq[i][0];
						$('.nine').addClass(colors[placement]);
						break;	
				}
			}
			}
		}).fadeIn(500);
	});
	$('.colorr').click(function () {
		$('.colorp').removeClass('activec');
		$(this).addClass('activec');
		colors = ["red", "purple", "blue", "green"];
		$('.frame').children().fadeOut(500, function() { 
			$('.frame').children().removeClass('blue');
			$('.frame').children().removeClass('green');
			$('.frame').children().removeClass('red');
			$('.frame').children().removeClass('purple');
			$('.frame').children().addClass('red');
			if(!firsttime){
			for(var i = 0; i < array.length; i++){
				switch(array[i]){
					case 1:
						$('.one').removeClass('red');
						var placement = seq[i][0];
						$('.one').addClass(colors[placement]);
						break;
					case 2:
						$('.two').removeClass('red');
						var placement = seq[i][0];
						$('.two').addClass(colors[placement]);
						break;
					case 3:
						$('.three').removeClass('red');
						var placement = seq[i][0];
						$('.three').addClass(colors[placement]);
						break;
					case 4:
						$('.four').removeClass('red');
						var placement = seq[i][0];
						$('.four').addClass(colors[placement]);
						break;
					case 5:
						$('.five').removeClass('red');
						var placement = seq[i][0];
						$('.five').addClass(colors[placement]);
						break;
					case 6:
						$('.six').removeClass('red');
						var placement = seq[i][0];
						$('.six').addClass(colors[placement]);
						break;			
					case 7:
						$('.seven').removeClass('red');
						var placement = seq[i][0];
						$('.seven').addClass(colors[placement]);
						break;
					case 8:
						$('.eight').removeClass('red');
						var placement = seq[i][0];
						$('.eight').addClass(colors[placement]);
						break;
					case 9:
						$('.nine').removeClass('red');
						var placement = seq[i][0];
						$('.nine').addClass(colors[placement]);
						break;	
				}
			}
			}
		}).fadeIn(500);
	});
	$('.colorpur').click(function () {
		$('.colorp').removeClass('activec');
		$(this).addClass('activec');
		colors = ["purple", "blue", "green", "red"];
		$('.frame').children().fadeOut(500, function() { 
			$('.frame').children().removeClass('blue');
			$('.frame').children().removeClass('green');
			$('.frame').children().removeClass('red');
			$('.frame').children().removeClass('purple');
			$('.frame').children().addClass('purple');
			if(!firsttime){
			for(var i = 0; i < array.length; i++){
				switch(array[i]){
					case 1:
						$('.one').removeClass('purple');
						var placement = seq[i][0];
						$('.one').addClass(colors[placement]);
						break;
					case 2:
						$('.two').removeClass('purple');
						var placement = seq[i][0];
						$('.two').addClass(colors[placement]);
						break;
					case 3:
						$('.three').removeClass('purple');
						var placement = seq[i][0];
						$('.three').addClass(colors[placement]);
						break;
					case 4:
						$('.four').removeClass('purple');
						var placement = seq[i][0];
						$('.four').addClass(colors[placement]);
						break;
					case 5:
						$('.five').removeClass('purple');
						var placement = seq[i][0];
						$('.five').addClass(colors[placement]);
						break;
					case 6:
						$('.six').removeClass('purple');
						var placement = seq[i][0];
						$('.six').addClass(colors[placement]);
						break;			
					case 7:
						$('.seven').removeClass('purple');
						var placement = seq[i][0];
						$('.seven').addClass(colors[placement]);
						break;
					case 8:
						$('.eight').removeClass('purple');
						var placement = seq[i][0];
						$('.eight').addClass(colors[placement]);
						break;
					case 9:
						$('.nine').removeClass('purple');
						var placement = seq[i][0];
						$('.nine').addClass(colors[placement]);
						break;	
				}
			}
			}
		}).fadeIn(500);
	});
	$('.newgame').mouseover(function () {
		$(this).addClass('activen');
	});
	$('.newgame').mouseleave(function () {
		$(this).removeClass('activen');
	});
	$('.newgame').click(function () {
			$('.victory').removeClass('infront1');
			$('.frame').children().fadeOut(500, function () {
			$('.frame').children().removeClass('blue');
			$('.frame').children().removeClass('green');
			$('.frame').children().removeClass('red');
			$('.frame').children().removeClass('purple');
			$('.frame').children().addClass(colors[0]);
		}).fadeIn(500);
	$('.current').text(0);
	tagger = 0;
	firsttime = true;
	inplay = false;
	numbof = generatewithin(diff);
	array = getusable(generaterand(),numbof);
	seq = [[]];
	for(var k = 0; k < numbof; k++){
		seq[k] = fillit(diff);
	}
	});
};

$(document).ready(main);