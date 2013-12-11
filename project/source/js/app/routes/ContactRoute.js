define(

	[
		"Ember",
		"app/App",
		"ehbs!contact"
	],

	function (Ember, App, template) {

		"use strict";

		App.ContactRoute = Ember.Route.extend({

		});

		return App.ContactRoute;
	}
);
