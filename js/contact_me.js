var contactMe = (function(){
	// инициализация модуля
	var init = function () {
		_setUpListners();
	};
	//слежка за событиями
	var _setUpListners = function() {
	 $('#feedback-form').on('submit', _submitForm); //по submit вызываем функцию _submitForm
	 $('form').on('reset', validation.clearFormReset); //убираем тултипы и крассы ошибки после Reset
	};

	//сабмит формы, выполняем ajax запрос на сервер и работаем с ответом с сервера
	var _submitForm = function(e) {
		e.preventDefault();
		var form = $(this),
			url ='./actions/send_mail.php', //адресс куда мы отправляем ajax
			box = $('#serv-msg'),
			defObject = _ajaxForm(form, url); //форма и url передаем в ajax

		console.log(defObject);
		if (defObject) {
			console.log(defObject);
			defObject.done(function (ans) {
				var mes = ans.mes,
					status = ans.status;

				if (ans.status === 'OK') {
					console.log(mes);
					box.text(mes).addClass('success').removeClass('error').show();
					$('#dis').setAttribute("disabled");

				} else {
					console.log(mes);
					box.text(mes).addClass('error').removeClass('success').show();


				}
			});
		}
	};

    var _ajaxForm = function (form, url) {
	    if (!validation.validateForm(form)) return false; 


		// Если false то код ниже не произодет никгда
	    var data = form.serialize(),
	    	box = $('#serv-msg');

		return  $.ajax({
			url: url,
			type: 'POST',
			dataType: 'JSON',
			data: data,
			}).fail(function(ans) {
			box.text('Письмо не отправлено! Проблемы с сервером.').addClass('error').removeClass('success').show();
		});
	    
    };

	return {
		init: init
	};

})();

contactMe.init();