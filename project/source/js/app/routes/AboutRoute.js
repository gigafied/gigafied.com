define(

	[
		"Ember",
		"app/App",
		"ehbs!about"
	],

	function (Ember, App, template) {

		"use strict";

		App.AboutRoute = Ember.Route.extend({

		});

		return App.AboutRoute;
	}
);
