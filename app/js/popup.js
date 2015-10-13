var myModule = (function(){

  //инициализация метода
  var init = function () {
    _setUpListners();
  };

  //отслеживание событий
  var _setUpListners = function() {
    //отобразить модуль
      $('#my-popup').bind('click',_showPop);
    //слежка за изменением имени 
    $('#fileupload').on('change', _changeNameFile);
  };

  //работа с модальным окном
  var _showPop = function(e){
    e.preventDefault(); // отменяет стандартное поведение елемента

    var divPopup =$('#element_to_pop_up'),
        form = divPopup.find('.form');

    divPopup.bPopup({
        speed: 650,
        transition: 'slideIn',
        transitionClose: 'slideBack',
        modalColor: '#696662',
        onClose: function() {
          _clearFormPopUp(form);
        }
    });
  };
  //изменение имя файла в отображении
  var _changeNameFile = function () {
    var input = $(this), // инпут type="file"
        name = input[0].files[0].name; // имя загруженного файла
    $('#filename')
      .val(name) 
      .trigger('hideTooltip')
      .removeClass('error'); 

 
  };
  var _clearFormPopUp = function (form) {
    var
      elements =form.find('input,textarea');
      elements.trigger('hideTooltip').removeClass('error');
      $('#add-new-project')[0].reset();
      form.find('.error-mes').hide();
      form.find('.success-mes').hide();
  };
  //публичные методы и то что возвращает модуль
  return {
        init:init
  }
})();

myModule.init();

