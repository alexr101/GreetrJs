$(window).on("load", function(){
	var newGreeting = G$("Alex", "Padilla", "en");

	newGreeting.updateHTML("#greeting", true);

	// newGreeting.editFirstName("Pablo").editLastName("Zicarro");

	// console.log(newGreeting);

	// newGreeting.greet();
	// newGreeting.greet(true).editFirstName("Alex").greet().editLastName("Padilla").greet();

});



