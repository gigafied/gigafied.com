define(

	[
		"Ember",
		"EmberAnimate",
		"./routes",
		"./controllers",
		"./views",
		"./templates"
	],

	function (Ember) {

		"use strict";

		var App = Ember.Application.create("app");

		App.Router.map(function () {
			this.resource("pages", {path : "/"}, function () {
				this.route("about");
				this.route("work");
				this.route("contact");
				this.route("someTest");
			});
		});

		App.Router.reopen({
			location: 'history'
		});

		return App;
	}
);
