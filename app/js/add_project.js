var myWork = (function(){

	var init = function () {
		_setUpListners();
		};

	var _setUpListners = function() {
		$('#add-new-project').on('submit', _submitForm);
		
	};



var _submitForm = function(e) {
	e.preventDefault();
	var form = $(this),
		url ='add_project.php',
		defObj = _ajaxForm(form, url);

	if(defObj) {
		defObj.done(function(ans){
			var successBox =form.find('.success-mes'),
				errorBox = form.find('.error-mes');
			if (ans.status === 'OK') {
				errorBox.hide();
				successBox.show();
			}else{
				successBox.hide();
				errorBox.show();
			}
		})
	}
};

//функция ajax для отправки данных из формы на сервер
var _ajaxForm = function (form, url) {
	var successBox =form.find('.success-mes'),
		errorBox = form.find('.error-mes');

	if (!validation.validateForm(form)) return false;
	// Возвращает false, если не проходит валидацию
	// Если false то код ниже не произодет никгда
	var data = form.serialize(), // собираем данные из формы в объект data
	    result = $.ajax({
	             url: url,
	             type: 'POST',
	             dataType: 'json',
	             data: data,
	             }).fail(function(){
				errorBox.text('На сервере произошла ошибка').show();
	    		successBox.hide();
	  			  });

	return result;
};

	return {
		init: init
	};

})();

myWork.init();