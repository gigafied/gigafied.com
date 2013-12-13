define(

	[
		"Ember",
		"app/App"
	],

	function (Ember, App) {

		"use strict";

		return Ember.View.extend({

			classNames : ["content"],

			animations : {

				animateIn : [
					{
						duration : 10,
						easing : "cubic-bezier(0.525, 0.085, 0.255, 1.030)",
						delay : 0,
						properties : {
							height : 2
						}
					},
					{
						duration : 675,
						easing : "cubic-bezier(0.525, 0.085, 0.255, 1.030)",
						delay : 0,
						properties : {
							width : "100%"
						}
					},
					{
						duration : 500,
						easing : "cubic-bezier(0.525, 0.085, 0.255, 1.030)",
						delay : 0,
						properties : {
							height : 500 // calculated in prep()
						}
					},
				],

				animateOut : [
					{
						duration : 500,
						easing : "cubic-bezier(0.525, 0.085, 0.255, 1.030)",
						delay : 0,
						properties : {
							height : 2,
							left: 0,
							right : "auto"
						}
					},
					{
						duration : 500,
						easing : "cubic-bezier(0.525, 0.085, 0.255, 1.030)",
						delay : 0,
						properties : {
							width : 0,
						}
					}
				]
			},

			prep : function (done) {
				this.animations["animateIn"][2].properties.height = this.$().height() + 30;
				this.$().css({
					height : 2,
					width : "0%",
					left : "auto",
					right : 0
				});
				done();
			},

			animateIn : function (done) {
				this._super(done);
			},

			animateOut : function (done) {
				this._super(done);
			}

		});
	}
);
