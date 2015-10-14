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
		// $("input[type=submit]").attr('disabled','disabled');
		var form = $(this),
			url ='contactme.php', //адресс куда мы отправляем ajax
			box = $('#serv-msg'),
			defObj = _ajaxForm(form, url); //форма и url передаем в ajax
			
		console.log(box);
		if (defObj) {
			defObj.done(function(ans){
				//ajax выполен, вернул значение ans
				if (ans.status === 'OK') { 
					box.text(ans.text).addClass('success').removeClass('error').show();

				}else{
					box.text(ans.text).addClass('error').removeClass('success').show();
					
				}
			})
		}else {
			box.text('Каптча не введена!').addClass('error').removeClass('success').show();
		}
	};

	//функция ajax для отправки данных из формы на сервер
    var _ajaxForm = function (form, url) {
	    if (!validation.validateForm(form)) return false; 
	    //проверка формы на валидацию
	    
	    console.log('ajax');
	    // Если false то код ниже не произодет никгда
	    var data = form.serialize(), //сериализуем форму для отправки в виде
	    	box = $('#serv-msg'),
	 	//присваеваем значение которое вернет ajax
	 		 result = $.ajax({ 
		                url: url, 
		                type: 'POST',
		                dataType: 'json',  //тип передаваемых данных
		                data: data,		   //передаваеммые данные с формы
		                }).fail(function(ans) {
			        		//в случаи если ajax не удался выводим ошибку
			               box.text('Письмо не отправлено! Проблемы с сервером.').addClass('error').removeClass('success').show();
				        });

	    return result;
	    
    };

	return {
		init: init
	};

})();

contactMe.init();