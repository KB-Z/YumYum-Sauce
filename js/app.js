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

  // var myObjectJson = JSON.stringify(myObject);
  //  localStorage.setItem("trish", myObjectJson);
  const storeTaco = (event) => {
    if ($(event.target).attr('class') === 'add') {
      tacoId = $(event.target).parent().attr('id');
      console.log(tacoId);
      var jsonTaco = JSON.stringify($taco)
      localStorage.setItem(`${tacoId}`, `${jsonTaco}`);
      var unJsonTaco = localStorage.getItem(`${tacoId}`);
      var freshTaco = JSON.parse(unJsonTaco);
      console.log(freshTaco);
    } if ($(event.target).attr('class') === 'clear') {
      localStorage.clear();
    } if ($(event.target).attr('class') === 'remove') {
      localStorage.removeItem(`${tacoId}`);
      location.reload();
    }
  };
  $('.clear').on('click', storeTaco);
    i = 0;

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
      i++;
      $taco = $('<div>').addClass('taco').attr('id', i);//.addClass(tacoTask);
      $taco.html(
        `<span class="tacoText">Base Layer:&nbsp;</span><span> ${baseLayer}</span><br>
        <span class="tacoText">Condiment:&nbsp;</span><span> ${condiment}</span><br>
        <span class="tacoText">Mix-in:&nbsp;</span><span> ${mixIn}</span><br>
        <span class="tacoText">Seasoning:&nbsp;</span><span> ${seasoning}</span><br>
        <span class="tacoText">Shell:&nbsp;</span><span> ${shell}</span><br>
        <button id='${tacoTask}' class='another'>'nother one!</button><button class='add'>Save me for later!</button>`
      );
      $('.another').off('click'); // holy crap - if this wasn't the most obvious but hassle filled find...
      $('.add').off('click');
      if ($(event.target).attr('class') === 'another') {
        $('section').append($taco);
        $('.another').on('click', summonTaco);
        $('.add').on('click', storeTaco);
      } else {
        $('section').empty();
        $('section').append($taco);
        $('.another').on('click', summonTaco);
        $('.add').on('click', storeTaco);
      }

    });
  };
  $('.findTaco').on('click', summonTaco);

});
