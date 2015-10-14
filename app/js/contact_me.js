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
			url ='contactme.php', //адресс куда мы отправляем ajax
			defObj = _ajaxForm(form, url); //форма и url передаем в ajax
		console.log('submit формы');
		if (defObj) {
			console.log('defObj true');
			defObj.done(function(ans){
				//ajax выполен, вернул значение ans
				if (ans.status === 'OK') { 
					console.log(ans.text);
				}else{
					console.log(ans.text);
				}
			})
		}else {
			console.log('валидация не пройдена');
		}
	};

	//функция ajax для отправки данных из формы на сервер
    var _ajaxForm = function (form, url) {
	    if (!validation.validateForm(form)) return false; 
	    //проверка формы на валидацию
	    console.log('ajax');
	    // Если false то код ниже не произодет никгда
	    var data = form.serialize(), //сериализуем форму для отправки в виде
	 	//присваеваем значение которое вернет ajax
	 		 result = $.ajax({ 
		                url: url, 
		                type: 'POST',
		                dataType: 'json',  //тип передаваемых данных
		                data: data,		   //передаваеммые данные с формы
		                }).fail(function(ans) {
			        		//в случаи если ajax не удался выводим ошибку
			               console.log('ajax failed');
				        });
	    return result;
	    
    };

	return {
		init: init
	};

})();

contactMe.init();