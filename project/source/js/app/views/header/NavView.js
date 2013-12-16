define(

	[
		"Ember"
	],

	function (Ember) {

		"use strict";

		return Ember.View.extend({

			isView : true,

			tagName: "nav",
			classNames : [],
			templateName : "header/nav",

			animations : {

				animateIn : [
					{
						duration : 750,
						easing : "cubic-bezier(0.525, 0.085, 0.255, 1.030)",
						delay : 500,
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
							"transform" : "translate3d(0, -25px, 0)"
						}
					}
				]
			},

			prep : function (done) {
				this.$().css(this.animations.animateOut[0].properties);
				done();
			}

		});
	}
);
