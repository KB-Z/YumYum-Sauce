$(() => {


  tacoTask = '';
  window.onscroll = function() {myFunction()};
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }


  const summonTaco = (event) => {
    tacoTask = $(event.target).attr('id');
    // console.log(tacoTask);
    // tacoQuantity = $('#number').val();
    // console.log(tacoQuantity);

    $.ajax ({
      url: `https://taco-randomizer.herokuapp.com/${tacoTask}/`
    }).then((data) => {
      // console.log(data);
      event.stopImmediatePropagation();
      baseLayer = data.base_layer.name;
      condiment = data.condiment.name;
      mixIn = data.mixin.name;
      seasoning = data.seasoning.name;
      shell = data.shell.name;
      $taco = $('<div>').addClass('taco');//.addClass(tacoTask);
      $taco.html(
        `<span>Base Layer: ${baseLayer}</span><br>
        <span>Condiment: ${condiment}</span><br>
        <span>Mix-in: ${mixIn}</span><br>
        <span>Seasoning: ${seasoning}</span><br>
        <span>Shell: ${shell}</span><br>
        <button id='${tacoTask}' class='another'>'nother one!</button>`
      );
      $('.another').off('click'); // holy crap - if this wasn't the most obvious but hassle filled find...
      if ($(event.target).attr('class') === 'another') {
        $('section').append($taco);
        $('.another').on('click', summonTaco);
      } else {
        $('section').empty();
        $('section').append($taco);
        $('.another').on('click', summonTaco);
      }

    });
  };
  $('.findTaco').on('click', summonTaco);

});
