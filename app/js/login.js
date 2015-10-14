var login = (function(){

	var init = function () {
		_setUpListners();
	
	};

	var _setUpListners = function() {
	 $('#login').on('submit', _submitForm);
	};

	var _submitForm = function(e) {
		console.log('submit form');
		e.preventDefault();

		var form = $(this),
			url ='login.php',
			box = $('#serv-msg'),
			defObj = _ajaxForm(form, url);
		if (defObj) {
			console.log('ajax true');
			//что-то будем делать с ответом с сервера defObj
			defObj.done(function(ans){
				console.log(ans)
				//ajax выполен, вернул значение ans
				if (ans.status === 'OK') { 
					console.log('ok')
					console.log(ans.text)
					box.slideUp();
					window.location.href="/my-work.html"
					// window.location.href="http://dz/app/index.html"
				}else{
					box.text(ans.text).slideDown();
					console.log(ans.text)
				}
			})
		}else {
			console.log('defObj false')
			// box.text('Каптча не введена!').addClass('error').removeClass('success').show();
		}
	}
	

//функция ajax для отправки данных из формы на сервер
  var _ajaxForm = function (form, url) {
	

    if (!validation.validateForm(form)) return false;
    // Если false то код ниже не произодет никгда

    var data = form.serialize(),
        result = $.ajax({
                 url: url,
                 type: 'POST',
                 dataType: 'json',
                 data: data,
                 }).fail(function(ans) {
                 
                 form.find('.error-mes').text('На сервере произошла ошибка').show();
                 form.find('.success-mes').hide();
                 });
        
    return result;
  };

	return {
		init: init
	};

})();

login.init();