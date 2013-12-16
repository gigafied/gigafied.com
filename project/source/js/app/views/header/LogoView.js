define(

	[
		"Ember",
		"app/utils/Tweener"
	],

	function (Ember, Tweener) {

		"use strict";

		var controller = Ember.Object.create({
			lbracket : "",
			rbracket : "",
			giga : "",
			fied : ""
		});

		return Ember.View.extend({

			tagName: "h1",
			classNames : ["logo"],
			templateName : "header/logo",
			controller : controller,

			animations : {

				animateIn : [
					{
						duration : 500,
						easing : "cubic-bezier(0.525, 0.085, 0.255, 1.030)",
						delay : 0,
						properties : {
							opacity : 1,
							"transform" : "translate3d(0, 40px, 0)"
						}
					},
					{
						duration : 500,
						easing : "cubic-bezier(0.525, 0.085, 0.255, 1.030)",
						delay : 0,
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
							"transform" : "translate3d(0, 40px, 0)"
						}
					}
				]
			},

			prep : function (done) {
				this.$().css(this.animations.animateOut[0].properties);
				done();
			},

			animateIn : function (done) {

				var self = this;
				this._super();
				window.setTimeout(function (){
					self.animateText("giga", "giga", 50, function () {
					});

					self.animateText("lbracket", "{", 25, done);
					self.animateText("fied", "fied", 100, done);
					self.animateText("rbracket", "}", 125, done);

				}, 100);

			},

			animateText : function (prop, val, duration, done) {

				var i,
					next,
					chars,
					tween,
					length,
					onUpdate,
					onComplete,
					tweenDuration,
					randomCharacter;

				i = -1;
				chars = [];
				length = val.length;
				tweenDuration = duration / length;

				randomCharacter = function (len) {

					var r = [],
						chars = "abcdefghijklmnopqrstuvwxyz";

					len = len || 1
					while (len -- ) {
						r.push(chars.charAt(Math.floor(Math.random() * chars.length)));
					}

					return r.join("");
				}

				onUpdate = function () {
					chars[i] = randomCharacter();
					controller.set(prop, chars.join(""));
				}

				next = function () {

					if (i >= 0) {
						chars[i] = val.charAt(i);
					}

					i ++;

					if (i >= length) {
						controller.set(prop, val);
						done();
						return;
					} 

					tween = new Tweener.Tween({i : 0})
						.to({i : 100}, duration)
						.easing(Tweener.Easing.Circular.InOut)
						.onUpdate(onUpdate)
						.onComplete(next)
						.start();				
				}

				chars = randomCharacter(length).split("");

				next();
			}

		});
	}
);
