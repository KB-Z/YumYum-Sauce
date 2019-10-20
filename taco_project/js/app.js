$(() => {


let tacoArray = [];

  $.ajax ({
    url: 'http://taco-randomizer.herokuapp.com/random/'
  }).then((data) => {tacoArray.push(data);
    console.log(tacoArray);
    tacoArray.map(() => {
      console.log(tacoArray);
    })
    // $taco = $('<div>').addClass('tacoFun')
    // $taco.html(
    //   data
    // );

  });
  // $('body').append($taco);



});
