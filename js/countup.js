/**
 * [description] カウントアップ用プラグイン
 * 実行手順1:初期値設定
 * $(セレクタ).countUp({
 *  speed:実行スピード,
 *  countMax:最大値,

 * });
 *
 * 実行手順2:カウントアップ実行
 * $(セレクタ).countUp('exe');
 */
(function($) {
	var settings = { //カウントアップ実行初期値
			speed: 1000,
			countMax: 100,
			fadeIn: false
		},
		methods = {
			init: function(opt) { //初期設定
				return this.each(function() {
					settings = $.extend({}, settings, opt);
				});
			},
			exe: function() { //カウントアップ実行
				if (settings.fadeIn) { this.css({ opacity: 0 }); }
				return this.animate({ opacity: 1, now: settings.countMax }, {
					duration: settings.speed,
					step: function(now, tween) {
						$(this).text(now | 0);
					}
				});
			}
		}

	$.fn.countUp = function(name) {
		if (methods[name]) { //exe
			return methods[name].apply(this, Array.prototype.slice.call(arguments, 1));
		} else { // init
			return methods.init.apply(this, arguments);
		}
	};
})(jQuery);