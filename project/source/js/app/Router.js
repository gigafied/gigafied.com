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
			this.route("about");
			this.route("work");
			this.route("contact");
		});

		App.Router.reopen({
			location: 'history'
		});

	}
);
