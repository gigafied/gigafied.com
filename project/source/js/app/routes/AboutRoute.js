define(

	[
		"Ember",
		"app/App",
		"./ContentRoute",
		"../views/AboutView",
		"ehbs!about"
	],

	function (Ember, App, ContentRoute, View, template) {

		"use strict";

		App.AboutRoute = ContentRoute.extend({

		});

		return App.AboutRoute;
	}
);
