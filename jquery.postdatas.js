/*
 * jQuery Postdatas Plugin
 * @version: 0.3 (12/02/2011)
 * @requires jQuery v1.2.2 or later
 * @author : Rémi Goyard
 * @see : http://demos.mimiz.fr/jquery/postdatas
 *
 * 
 *
 */
(function($) {
	$.postdatas = function(options){
		var settings=$.extend({
			url:"",
			datas:[]
		}, options);

		var form = $("<form>");
		form.attr({
			action:settings.url,
			method:"POST"
		}).css({
			display:'none'
		});
		for(i=0;i<settings.datas.length;i++){
			$('<input type="hidden" name="'+settings.datas[i].name+'" value="'+settings.datas[i].value+'" />').appendTo(form);
		}
		form.appendTo('body');
		form.submit();
	};
})(jQuery);