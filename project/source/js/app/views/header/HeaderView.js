define(

	[
		"./LogoView",
		"./NavView"
	],

	function () {

		"use strict";

		return Ember.View.extend({
			tagName : "header",
			templateName : "header/header"

		});
	}
);
