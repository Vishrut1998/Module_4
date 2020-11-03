(function(window){

	var speakerWord="Good Bye";
	var byeSpeaker = function(name){
		console.log(speakerWord + " " + name);

	}
	window.byeSpeaker = byeSpeaker;

})(window);