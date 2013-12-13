define(

	[
		"Ember",
		"app/App"
	],

	function (Ember, App) {

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
