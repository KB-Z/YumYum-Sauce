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
      baseLayer = data.base_layer.name;
      condiment = data.condiment.name;
      mixIn = data.mixin.name;
      seasoning = data.seasoning.name;
      shell = data.shell.name;
      $taco = $('<div>').addClass('taco');
      $taco.html(
        `<span>Base Layer: ${baseLayer}</span><br><br>
        <span>Condiment: ${condiment}</span><br><br>
        <span>Mix-in: ${mixIn}</span><br><br>
        <span>Seasoning: ${seasoning}</span><br><br>
        <span>Shell: ${shell}</span><br><br>
        <button class='another'>Nother One!</button>`
      );
      $('section').append($taco);

    });
  };
  $('button').on('click', summonTaco);

});
