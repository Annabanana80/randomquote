// var url = "http://random-quote-generator.herokuapp.com/api/quotes/random";
// var newQuote = function(json) {
//   $("#quote").html(JSON.stringify(json.quote));
//   $(".blockquote-footer").html(JSON.stringify(json.author).replace(/\"/g, ""));
// };
// $('#twitter').click(function(){
//       window.open('https://twitter.com/intent/tweet?text='+ $('#quote').html() + $('.blockquote-footer').html());;
//     });
// $(document).ready(function() {
//   $.getJSON(url, newQuote, "json");
  

//   $("#getQuote").click(function() {
//     $.getJSON(url, newQuote, "json");
//     var randomColor='rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
//     $('body').css('background-color',randomColor);
//     $('h1').css('color',randomColor);
//     $('p').css('color',randomColor);
//     $('#quote').css('color',randomColor);
//     $('#author').css('color',randomColor);
//     $('button').css('background-color',randomColor);
  

//   });
// });
//Had to rewrite as the herokuapp was shut down
$(document).ready(function(){
  function randQuote(){
    $.ajax({
      url:'https://andruxnet-random-famous-quotes.p.mashape.com/',
      type: 'POST',
      dataType: 'json',
      success:function(json){
        $("#quote").html(json.quote);
        $(".blockquote-footer").html(json.author);
      },
      beforeSend:function(xhr){
        xhr.setRequestHeader("X-Mashape-Key", "yjSdsNkGk6mshE03Fn4dyAjuMQZxp192cnojsnqsuHp5HksVsz");
      }
    });
  }
  randQuote();
  $('#getQuote').click(function(){
    randQuote();
    var randomColor='rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    $('body').css('background-color',randomColor);
    $('h1').css('color',randomColor);
    $('p').css('color',randomColor);
    $('#quote').css('color',randomColor);
    $('#author').css('color',randomColor);
    $('button').css('background-color',randomColor);
  });
  $('#twitter').click(function(){
      window.open('https://twitter.com/intent/tweet?text='+ $('#quote').html() + $('.blockquote-footer').html());;
    });
});