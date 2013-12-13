define(

	[
		"Ember",
		"EmberAnimate"
	],

	function (Ember) {

		"use strict";

        var App = Ember.Application.create();
        App.deferReadiness();

		require(['app/Router', "app/Controllers", "app/Views", "app/Templates"], function (Router) {
			App.advanceReadiness();
		});

		return App;
	}
);
