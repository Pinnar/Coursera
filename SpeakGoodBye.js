(function (window) {
	var byeSpeaker = {};
	byeSpeaker.speak = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	var speakWord = "Good Bye";
	byeSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
}
	window.byeSpeaker = byeSpeaker;
})(window);	

