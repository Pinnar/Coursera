(function (window) {
	var helloSpeaker = {};
	helloSpeaker.speak = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	var speakWord = "Hello";
	helloSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
}
	window.helloSpeaker = helloSpeaker;
})(window);


	
