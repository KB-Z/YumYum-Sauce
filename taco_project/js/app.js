$(() => {

  tacoTask = '';

  const summonTaco = (event) => {
    // $('section').empty();
    tacoTask = $(event.target).attr('id');
    console.log(tacoTask);
    // tacoQuantity = $('#number').val();
    // console.log(tacoQuantity);

    $.ajax ({
      url: `http://taco-randomizer.herokuapp.com/${tacoTask}/`
    }).then((data) => {
      console.log(data);
      baseLayer = data.base_layer.name;
      condiment = data.condiment.name;
      mixIn = data.mixin.name;
      seasoning = data.seasoning.name;
      shell = data.shell.name;
      $taco = $('<div>').addClass('taco');//.addClass(tacoTask);
      $taco.html(
        `<span>Base Layer: ${baseLayer}</span><br><br>
        <span>Condiment: ${condiment}</span><br><br>
        <span>Mix-in: ${mixIn}</span><br><br>
        <span>Seasoning: ${seasoning}</span><br><br>
        <span>Shell: ${shell}</span><br><br>
        <button id='${tacoTask}' class='another'>'nother one!</button>`
      );
      $('section').append($taco);
      $('.another').on('click', summonTaco);

    });
  };
  $('button').on('click', summonTaco);

});
