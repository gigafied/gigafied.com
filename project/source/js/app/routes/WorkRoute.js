define(

	[
		"Ember",
		"app/App",
		"./ContentRoute",
		"../views/WorkView",
		"ehbs!work"
	],

	function (Ember, App, ContentRoute, View, template) {

		"use strict";

		App.WorkRoute = ContentRoute.extend({

		});

		return App.WorkRoute;
	}
);
