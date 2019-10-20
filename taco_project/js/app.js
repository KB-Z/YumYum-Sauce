$(() => {

  tacoTask = '';

  const summonTaco = (event) => {
    $('section').empty();
    tacoTask = $(event.target).attr('class');
    console.log(tacoTask);
    // tacoQuantity = $('#number').val();
    // console.log(tacoQuantity);

    $.ajax ({
      url: `http://taco-randomizer.herokuapp.com/${tacoTask}/`
    }).then((data) => {
      console.log(data);
      baseLayer = data.base_layer;
      condiment = data.condiment;
      mixIn = data.mixin;
      seasoning = data.seasoning;
      shell = data.shell;
      $taco = $('<div>').addClass('taco');
      $taco.html(
        `<span>Base Layer: ${baseLayer}</span>
        <span>Condiment: ${condiment}</span>
        <span>Mix-in: ${mixIn}</span>
        <span>Seasoning: ${seasoning}</span>
        <span>Shell: ${shell}</span>
        <button class='another'>Nother One!</button>`
      );
      $('section').append($taco);

    });
  };
  $('button').on('click', summonTaco);

});
