define(
	[
		"Tween"
	],

	function (Tween) {

		var update = function () {
			window.requestAnimationFrame(update);
			Tween.update();
		};

		window.requestAnimationFrame(update);
		return Tween;
	}
)