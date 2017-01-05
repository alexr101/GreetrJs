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

	greeting.fullName();
Returns a string containing the full name of user<br/>

----------
	greeting.greeting();
Returns a string containing a personalized greeting to the user  

----------
	greeting.formalGreeting();
Returns a string containing a personalized formal greeting to the user

----------
	greeting.logMessage();
Returns string containing and also console logs the user's full name and language of choice

----------
	greeting.updateHTML(selector, formal);
	
Updates a DOM element with a personalized greeting text to the user. It includes a second parameter to determine whether the greeting should be formal.

  **selector**(required)<br/>
  String. Accepts a CSS Id selector. Jquery is supported. Including the "#" symbol is optional.

  **formal**(required)<br/>
  Boolean. Determines whether the greeting returned will be formal or casual. True will return formal.

----------
	greeting.setLang(language);
Change or set the language for the user object

  **language**(required)<br/>
  String. Determines new user language. (See Supported Languages section for a list of accepted parameters).

----------
	greeting.editFirstName(newName);
Set up a new first name for the user object
	
  **newName**(required)<br/>
  String. Determines a new user first name.
  
----------
	greeting.editLastName(newLastName);
Set up a new last name for the user object

  **lastName**(required)<br/>
  String. Determines a new user last name.

	
