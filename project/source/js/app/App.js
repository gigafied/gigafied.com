define(

	[
		"Ember"
	],

	function (Ember, Router) {

		"use strict";

        var App = Ember.Application.create();
        App.deferReadiness();

		require(['app/Router'], function (Router) {
			App.advanceReadiness();
		});

		return App;
	}
);
