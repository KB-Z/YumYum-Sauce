$(() => {

  $.ajax ({
    url: 'http://taco-randomizer.herokuapp.com/random/'
  }).then((data) => {
    console.log(data);
    $data = data;
    $taco = $('<div>').addClass('tacoFun').text($data);
    $('body').append($taco);
  })



})
