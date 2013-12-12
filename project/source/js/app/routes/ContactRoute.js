define(

	[
		"Ember",
		"app/App",
		"./ContentRoute",
		"../views/ContactView",
		"ehbs!contact"
	],

	function (Ember, App, ContentRoute, View, template) {

		"use strict";

		App.ContactRoute = ContentRoute.extend({

		});

		return App.ContactRoute;
	}
);
