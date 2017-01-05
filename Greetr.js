//Safe code
(function(global, $){

	var Greetr = function(firstName, lastName, language){

		return new Greetr.init(firstName, lastName, language );
	};

	var supportedLangs = ["en", "es"];

	var greetings = {
		en: "Hello",
		es: "Hola"
	};

	var formalGreetings = {
		en: "Greetings",
		es: "Saludos"
	};

	var logMessages = {
		en: "Logged in",
		es: "Inicio sesion"
	}

	Greetr.utility = {

		isId: function(selector){

			if(selector.includes("#")){
				return true;
			} else {
				return false;
			}
		},

		toggleId: function(selector){

			if(Greetr.utility.isId(selector)){
				selector = selector.replace("#", "");
			} else {
				selector = selector = "#" + selector;
			}

			return selector;
		}
	}

	//Place all your methods and properties to have cleaner code
	Greetr.prototype = {
		
		fullName: function(){
			return this.firstName + " " + this.lastName;
		},

		validateLanguage: function(){
			if( !supportLangs.indexOf(this.language) ){
				throw "Language not supported yet...";
			}
		},

		greeting: function(){
			return greetings[this.language] + ", " + this.fullName() + "!";
		},

		formalGreeting: function(){
			return formalGreetings[this.language] + ", " + this.fullName() + "!";
		},

		messageText: function(formal){
			if(formal){
				return this.formalGreeting();
			} else {
				return this.greeting();
			}
		},

		greet: function(formal){

			var msg = this.messageText(formal);

			//IE won't output unless the console is open
			if(console){
				console.log(msg);
			}

			return this;
		},

		logMessage: function(){

			if(console){
				console.log(logMessages[this.language] + ", " + this.fullName());
			}

			return this;
		},

		updateHTML: function(selector, formal){

			if(window.jQuery){

				if(!Greetr.utility.isId(selector)){
					selector = Greetr.utility.toggleId(selector);
				}

				$(selector).html(this.messageText(formal));

			} else {

				if(Greetr.utility.isId(selector)){
					selector = Greetr.utility.toggleId(selector);
				}

				document.getElementById(selector).innerHTML = this.messageText(formal);
			}
			
		},

		setLang: function(language){

			this.language = language;

			this.validateLanguage();
			
			return this;
		},

		editFirstName: function(newName){

			this.firstName = newName;

			return this;
		},

		editLastName: function(newLastName){

			this.lastName = newLastName;

			return this;
		}
	};

	Greetr.init = function(firstName, lastName, language){
		
		//points to the "new" object created in Greetr
		var self = this;
		self.firstName = firstName || "Missing First Name";
		self.lastName = lastName || "Missing Last Name";
		self.language = language || "en";
	};

	Greetr.init.prototype = Greetr.prototype;

	global.Greetr = global.G$ = Greetr;

	return global;

})(window, jQuery);

