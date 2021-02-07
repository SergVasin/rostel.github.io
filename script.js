jQuery(document).ready(function() {
		jQuery(".eTimer").eTimer({
			etType: 1, etDate: "20.01.2021.0.0", etTitleText: "", etTitleSize: 20, etShowSign: 1, etSep: ":", etFontFamily: 'Montserrat', etTextColor: "white", etPaddingTB: 15, etPaddingLR: 15, etBackground: "#ff4f12", etBorderSize: 0, etBorderRadius: 2, etBorderColor: "white",  etLastUnit: 4, etNumberFontFamily: 'Montserrat', etNumberSize: 60, etNumberColor: "#555", etNumberPaddingTB: 0, etNumberPaddingLR: 8, etNumberBackground: "#fefefe", etNumberBorderSize: 0, etNumberBorderRadius: 5, etNumberBorderColor: "white", etNumberShadow: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
		});
	});


$(document).ready(function() {
 $(".popup__polit").hide("fast");
 $(".polit__btn-default").click(function(){
  $(".overlay").hide(800);
  $(".popup__polit").show("slow");
});
 $(".polit__close-btn").click(function(){
  $(".popup__polit").hide("slow");
});

});


$(document).ready(function() {
 $(".orange__form-color").hide("fast");
 $(".orange__btn-default").click(function(){
  $(".overlay").hide(800);
  $(".orange__form-color").show("slow");
});
 $(".orange__close-btn").click(function(){
  $(".orange__form-color").hide("slow");
});

});


$(document).ready(function() {
 $(".purple__form-color").hide("fast");
 $(".purple__btn-default").click(function(){
  $(".overlay").hide(800);
  $(".purple__form-color").show("slow");
});
 $(".purple__close-btn").click(function(){
  $(".purple__form-color").hide("slow");
});

});

$(document).ready(function() {
 $(".region").hide();
 $(".city__btn-default").click(function(){
  $(".overlay").hide();
  $(".region").show();
});
 $(".city__close-btn").click(function(){
  $(".region").hide();
});

});


$(document).ready(function() {
 $(".popup__tel").hide();
 $(".tel__btn-default").click(function(){
  $(".overlay").hide();
  $(".popup__tel").show();
});
 $(".tel__close-btn").click(function(){
  $(".popup__tel").hide();
});

});




$( document ).ready(function() {
    $( '[href = "#tat"]' ).click(function() {        
        $('#tat').addClass("region__show");
        })
});


$(document).mouseup(function (e){ 
          var div = $('[href = "#tat"]'); 
	if (!div.is(e.target) 
	          && div.has(e.target).length === 0) { 
		$('#tat').removeClass("region__show"); 
		}
	});

$( document ).ready(function() {
    $( '[href = "#ud"]' ).click(function() {        
        $('#ud').addClass("region__show");
        })
});


$(document).mouseup(function (e){ 
          var div = $('[href = "#ud"]'); 
	if (!div.is(e.target) 
	          && div.has(e.target).length === 0) { 
		$('#ud').removeClass("region__show"); 
		}
	});


$(document).ready(function(){
  

  $(".btn__nav").on("click", function() {
    var target = $(this).data("target");
    $(target).toggleClass("nav__add--open");
  })



});

 $(document).ready(function () {
        $('form').submit(function () {
            var formID = $(this).attr('id'); // Получение ID формы
            var formNm = $('#' + formID);
            $.ajax({
                type: 'POST',
                url: 'index.php', // Обработчик формы отправки
                data: formNm.serialize(),
                success: function (data) {
                    // Вывод текста результата отправки в текущей форме
                    $(formNm).html(data);
                }
            });
            return false;
        });
    });