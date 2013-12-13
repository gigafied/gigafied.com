define(

	[
		"Ember",
		"app/App",
		"./LogoView",
		"./NavView"
	],

	function (Ember, App) {

		"use strict";

		App.HeaderView = Ember.View.extend({
			tagName : "header",
			templateName : "header/header"

		});

		return App.HeaderView;
	}
);
