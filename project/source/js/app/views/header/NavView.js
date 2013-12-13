define(

	[
		"Ember",
		"app/App"
	],

	function (Ember, App) {

		"use strict";

		App.NavView = Ember.View.extend({

			tagName: "nav",
			classNames : [],
			templateName : "header/nav",

			animations : {

				animateIn : [
					{
						duration : 750,
						easing : "cubic-bezier(0.525, 0.085, 0.255, 1.030)",
						delay : 250,
						properties : {
							opacity : 1,
							"transform" : "translate3d(0, 0, 0)"
						}
					}

				],

				animateOut : [
					{
						duration : 500,
						easing : "cubic-bezier(0.525, 0.085, 0.255, 1.030)",
						delay : 0,
						properties : {
							opacity : 0,
							"transform" : "translate3d(150px, 0, 0)"
						}
					}
				]
			},

			prep : function (done) {
				this.$().css(this.animations.animateOut[0].properties);
				done();
			}

		});

		return App.NavView;
	}
);
