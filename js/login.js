var login = (function(){

	var init = function () {
		_setUpListners();
	
	};

	var _setUpListners = function() {
	 $('#login').on('submit', _submitForm);
	};

	var _submitForm = function(e) {
		
		e.preventDefault();

		var form = $(this),
			url ='./actions/auth.php',
			box = $('#serv-msg'),
			defObject = _ajaxForm(form, url);

		if (defObject) {
			defObject.done(function (ans) {
				var mes = ans.mes,
					status = ans.status;

				if (status === 'OK') {

					box.slideUp();
					window.location.href = "/";
				} else {
					box.text(mes).slideDown();

				}
			});
		}
		};
	
  var _ajaxForm = function (form, url) {
		if (!validation.validateForm(form)) return false;
    var data = form.serialize();

		return  $.ajax({
			type: 'POST',
			url: url,
			dataType: 'JSON',
			data: data,
		}).fail(function(ans) {
                 form.find('.error-mes').text('На сервере произошла ошибка').show();
                 form.find('.success-mes').hide();
                 });

  };

	return {
		init: init
	};

})();

login.init();