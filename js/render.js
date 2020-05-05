'use strict';

(function() {
    const userDialog = document.querySelector('.setup');
    const similarListElement = document.querySelector('.setup-similar-list');
    const similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

    let renderWizard = function (wizard) {
        const wizardElement = similarWizardTemplate.cloneNode(true);

        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

        return wizardElement;
    };

    window.render = function (wizards) {
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < window.utils.WizardsProps.QIANTITY; i++) {
            fragment.appendChild(renderWizard(wizards[i]));
        }


        similarListElement.innerHTML = '';
        similarListElement.appendChild(fragment);
        userDialog.querySelector('.setup-similar').classList.remove('hidden');
 
    };
})();
        //Mock
    // const WIZARD_NAMES = ['Хуан Себастьян', 'Кристоф', 'Люпита', 'Вашингтон'];
    // const WIZARD_SECOND_NAMES = ['да Марья', 'Нионго', 'Мирабелла', 'Ирвинг'];
    // const wizards = [
    //     {
    //         name: window.utils.getRandElement(WIZARD_NAMES) + ' ' + window.utils.getRandElement(WIZARD_SECOND_NAMES),
    //         coatColor: 'rgb(241, 43, 107)',
    //         eyesColor: 'blue'
    //     },
    //     {
    //         name: window.utils.getRandElement(WIZARD_NAMES) + ' ' + window.utils.getRandElement(WIZARD_SECOND_NAMES),
    //         coatColor: 'rgb(215, 210, 55)',
    //         eyesColor: 'red'
    //     },
    //     {
    //         name: window.utils.getRandElement(WIZARD_NAMES) + ' ' + window.utils.getRandElement(WIZARD_SECOND_NAMES),
    //         coatColor: 'rgb(101, 137, 164)',
    //         eyesColor: 'yellow'
    //     },
    //     {
    //         name: window.utils.getRandElement(WIZARD_NAMES) + ' ' + window.utils.getRandElement(WIZARD_SECOND_NAMES),
    //         coatColor: 'rgb(127, 127, 127)',
    //         eyesColor: 'green'
    //     }
    // ];
