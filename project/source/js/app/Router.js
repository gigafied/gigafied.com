define(

	[
		"Ember",
		"app/App",
		"./routes/AboutRoute",
		"./routes/ContactRoute",
		"./routes/WorkRoute"
	],

	function (Ember, App, AboutRoute, ContactRoute, WorkRoute) {

		"use strict";

		App.Router.map(function () {
			this.resource("about");
			this.resource("work");
			this.resource("contact");
		});

		App.Router.reopen({
			location: 'history'
		});

	}
);
