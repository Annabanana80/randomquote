var url = "https://random-quote-generator.herokuapp.com/api/quotes/random";
var newQuote = function(json) {
  $("#quote").html(JSON.stringify(json.quote));
  $(".blockquote-footer").html(JSON.stringify(json.author).replace(/\"/g, ""));
};
$('#twitter').click(function(){
      window.open('https://twitter.com/intent/tweet?text='+ $('#quote').html() + $('.blockquote-footer').html());;
    });
$(document).ready(function() {
  $.getJSON(url, newQuote, "json");
  

  $("#getQuote").click(function() {
    $.getJSON(url, newQuote, "json");
    var randomColor='rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    $('body').css('background-color',randomColor);
    $('h1').css('color',randomColor);
    $('p').css('color',randomColor);
    $('#quote').css('color',randomColor);
    $('#author').css('color',randomColor);
    $('button').css('background-color',randomColor);
  

  });
});

