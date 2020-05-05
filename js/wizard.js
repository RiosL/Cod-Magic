'use strict';

(function () {

  const wizardCoat = document.querySelector('.wizard-coat');
  const wizardCoatColor = document.querySelector('input[name="coat-color"]');
  const wizardEyes = document.querySelector('.wizard-eyes');
  const wizardEyesColor = document.querySelector('input[name="eyes-color"]');
  const wizardFireball = document.querySelector('.setup-fireball-wrap');
  const wizardFireballColor = document.querySelector('input[name="fireball-color"]');

  const getRandomElement = function (array) {
      let randomElementIndex = Math.floor(Math.random() * array.length);
      return array[randomElementIndex];
    };

  const wizard = {
      onEyesChange: function (color) {
        return color;
      },
      onCoatChange: function (color) {
        return color;
      },
      onFireballChange: function (color) {
          return color;
      }
    };

  wizardCoat.addEventListener('click', function () {
      let newColor = getRandomElement(window.utils.WizardsProps.COAT_COLORS);
      wizardCoat.style.fill = newColor;
      wizardCoatColor.value = wizardCoat.style.fill;
      wizard.onCoatChange(wizardCoatColor.value);
  });
  wizardEyes.addEventListener('click', function () {
      let newColor = getRandomElement(window.utils.WizardsProps.EYES_COLORS);
      wizardEyes.style.fill = newColor;
      wizardEyesColor.value = wizardEyes.style.fill;
      wizard.onEyesChange(wizardEyesColor.value);
  });
  wizardFireball.addEventListener('click', function () {
      let newColor = getRandomElement(window.utils.WizardsProps.FIREBALL_COLORS);
      wizardFireball.style.background = newColor;
      wizardFireballColor.value = wizardFireball.style.background;
      wizard.onFireballChange(wizardFireballColor.value);
  });

  document.querySelector('.setup-wizard-form').addEventListener('submit', function (evt) {
    evt.preventDefault();
    const wizardCopy = document.querySelector('svg').cloneNode(true);

    wizardCopy.querySelector('#wizard-coat').style.fill = wizardCoat.style.fill;
    wizardCopy.querySelector('#wizard-eyes').style.fill = wizardEyes.style.fill;


    const wizardBase64Right = window.svg2base64(wizardCopy);

    // Чтобы развернуть мага, его надо подвинуть на его ширину, а затем отразить
    wizardCopy.querySelector('#wizard').setAttribute('transform', 'translate(62, 0) scale(-1, 1)');
    const wizardBase64Left = window.svg2base64(wizardCopy);

    window.restartGame(wizardBase64Right, wizardBase64Left);
  });

  window.wizard = wizard;

}());