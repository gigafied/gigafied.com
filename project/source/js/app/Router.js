define(

	[
		"Ember",
		"./routes/AboutRoute",
		"./routes/ContactRoute",
		"./routes/WorkRoute"
	],

	function (Ember, AboutRoute, ContactRoute, WorkRoute) {

		"use strict";

		var App;

		return {

			init : function (app) {

				App = app;

				App.Router.map(function () {
					this.resource("about");
					this.resource("work");
					this.resource("contact");
				});

				App.Router.reopen({
					location: 'history'
				});

			}
		}

	}
);
