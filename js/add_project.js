var myWork = (function(){

	var init = function () {
		$('#fileupload').fileupload({
			url: './actions/upload.php',
			dataType: 'json',
			success: function(data){
				$('#fileurl, #filename').val(data.name).trigger('hideTooltip').removeClass('has-error');
			}
		});
		_setUpListners();
		},

	 _setUpListners = function() {
		$('#add-new-project').on('submit', _addProject);
		
	 },



 _addProject = function(e) {
	e.preventDefault();
	var form = $(this),
		url ='./actions/add_project.php',
		defObj = _ajaxForm(form, url);

	if(defObj) {
		defObj.done(function(ans){
			var mes = ans.mes,
				status = ans.status;
			var successBox =form.find('.success-mes'),
				errorBox = form.find('.error-mes');
			if (ans.status === 'OK') {
				errorBox.hide();
				successBox.show();
				console.log(mes);
			}else{
				successBox.hide();
				errorBox.show();
				console.log(mes);
			}
		})
	}
 },


 _ajaxForm = function (form, url) {
	if (!validation.validateForm(form)) return false;

	var successBox =form.find('.success-mes'),
		errorBox = form.find('.error-mes'),
		data = form.serialize();
	return  $.ajax({
		url: url,
		type: 'POST',
		dataType: 'JSON',
		data: data,
		}).fail(function(){
		errorBox.text('На сервере произошла ошибка').show();
		successBox.hide();
	});
};

	return {
		init: init
	};

})();

myWork.init();