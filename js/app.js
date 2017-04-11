$(document).foundation();

$('div.color-grid').each(function() {

  var color = $(this).find('.color').attr('data-color');

  $(this).find('.swatch').addClass(color);

  for (i = 1; i < 9; i++) {
    $('<div class="color"><span class="swatch ' + color + '-l' + i + '">&#10004;</span></div>').prependTo(this);
    $('<div class="color"><span class="swatch ' + color + '-d' + i + '">&#10004;</span></div>').appendTo(this);
  }

});
