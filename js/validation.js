var validation = (function(){
	// Инициализирует наш модуль
    var init = function () {
        _setUpListners();
      
    };  

   
     // Прослушивает события
    var _setUpListners = function() {
    	$('form').on('keyup', '.error', _removeError);
    	$('form').on('change', '.error', _removeError);
    };
    //удаляем класс с ошибкой, красный бордер
    var _removeError = function () {
    	$(this).removeClass('error');
    	$('#dis').removeAttribute("disabled");
    }
    // Создает тултипы
    var _createQtip = function (element, position) {
		// позиция тултипа
		if (position === 'right') {
			position = {
				my: 'left center', 
				at: 'right center'
			};
		}else{
			position = {
				my: 'right center', 
				at: 'left center',
			};
		};
		//инициализация тултипа
		element.qtip({
			content: {
				text: function() {
					return $(this).attr('qtip-content');
				}
			},
			show: {
				event: 'show',
				effect: function(offset) {
		            $(this).slideDown(100);
		        }
			},
			hide: {
				event: 'keyup hideTooltip change',
				effect: function(offset) {
		            $(this).slideUp(100); 
		        }
			},
			position:position,
			style: {
				classes: 'qtip-rounded qtip-myclass',
			}
		}).trigger('show');
    };

    // Универсальная функция
    var validateForm =  function(form) {
    	 // Проверяет, чтобы все поля формы были не пустыми. Если пустые - вызывает тултипы
    	var elements = form.find('input,textarea').not('input[type="file"], input[type="hidden"]'),
    		valid = true;

    	//Пройдемся по всем елементам формы
    	$.each(elements, function(index, val){
    		var element = $(val),
    			val = element.val(),
    			pos = element.attr('qtip-position');
    	//если поле пустое создаем тултип, добавляем класс ошибки и присваеваем значение валидации false
	    	if (val.length === 0) {
	    	 	_createQtip(element,pos);
	    	 	element.addClass('error');
	    		valid = false;
				console.log('валид false');
				console.log(element);
	    		
	    	}
    	});
    	//возвращаем результат проверки валидации формы
    	return valid;
    };

    //на очистку форму reset
    var clearFormReset = function (form) {
		var 
			form = $(this),
			elements =form.find('input,textarea');
			elements.trigger('hideTooltip').removeClass('error'); //у всех полей формы убираем тултипы и убираем класс ошибки
		$('#serv-msg').slideUp();
		$('#dis').removeAttribute("disabled");
	};

     // Возвращает объект (публичные методы)
    return {
        init: init,
        validateForm: validateForm, //валидация формы, универсальная функция
	    clearFormReset: clearFormReset  //на очистку форму reset
    };

})();

validation.init();
