# GreetrJs
Mini Javascript library that displays customized greetings to the user in the language of choice. Supports Jquery & chainable methods.

#Initialize
  var greeting = G$(name, lastname, language);
  
  This function returns a greet object, which contains the user information and the language of choice.
  Supported languages are:
  
	English - "en"
	Spanish - "es"
	
	
  Any other languages will return an error.
  
#Methods

After initializing the greeting object you can use this to access the following methods.

Returns full name of user

	greeting.fullName() 

Returns a greeting string for the user<br />
	greeting.greeting(); 

Returns a formal greeting string for the user<br />
	greeting.formalGreeting();

Returns and also logs the full user's name and language of choice to the console<br />
	greeting.logMessage();

Updates the DOM element of choice<br />
The formal boolean determines whether the greeting is formal or not<br />
	greeting.updateHTML(selector, formal);

Change or set the language<br />
	greeting.setLang(language);

Edit the first name<br />
	greeting.editFirstName(newName);

Edit the last name<br />
	greeting.editLastName(newLastName)

	
