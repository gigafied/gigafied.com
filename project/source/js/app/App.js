define(

	[
		"Ember"
	],

	function (Ember) {

		"use strict";


		var App = Ember.Application.create();

		App.Router.map(function () {
			this.resource("about");
			this.resource("work");
			this.resource("contact");

		});


		App.Router.reopen({
			location: 'history'
		});	

		return App;
	}
);
