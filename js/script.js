/**
 * [description] カウントアップ用プラグイン
 * 実行手順1:初期値設定
 * $(セレクタ).countUp({
 *  speed:実行スピード,
 *  countMax:最大値
 * });
 *
 * 実行手順2:カウントアップ実行
 * $(セレクタ).countUp('exe');
 */
(function($) {
	var settings = { //カウントアップ実行初期値
			speed: 1000,
			countMax: 100
		},
		methods = {
			init: function(opt) {//初期設定
				return $.extend(settings, opt);
			},
			exe: function() {//カウントアップ実行
				this.animate({ i: settings.countVal }, {
					duration: settings.speed,
					step: function(a) {
						$(this).text(a | 0);
					}
				});
			}
		}

	$.fn.countUp = function(name) {

		//exe
		if (methods[name]) {
			console.log(Array.prototype.slice.call(arguments));
			return methods[name].apply(this, Array.prototype.slice.call(arguments, 1));
		} else { // init
			return methods.init.apply(this, arguments);
		}


	};
})(jQuery);

$('span').countUp({ speed: 10000, countVal: 500 });//初期値設定
$('span').countUp('exe');//実行
