'use strict';

(function () {
    let wizards = [];

    let coatColor;
    let eyesColor;

    const getRank = function (wizard) {
        let rank = 0;

        if (wizard.colorCoat === coatColor) {
            rank += 2;
        }
        if (wizard.colorEyes === eyesColor) {
            rank += 1;
        }

        return rank;
    };

    const namesComparator = function (left, right) {
        if (left > right) {
            return 1;
        } else if (left < right) {
            return -1;
        } else {
            return 0;
        }
    };

    const updateWizards = function () {
        window.render(wizards.sort(function (left, right) {
            let rankDiff = getRank(right) - getRank(left);
            if (rankDiff === 0) {
                rankDiff = namesComparator(left.name, right.name);
            }
            return rankDiff;
            }));
    };

    window.wizard.onCoatChange = function (color) {
        coatColor = color;
        window.debounce(updateWizards);
    };
    window.wizard.onEyesChange = function (color) {
        eyesColor = color;
        window.debounce(updateWizards);
    };

    const successHandler = function (data) {
        wizards = data;
        updateWizards();
    };
    
    const errorHandler = function (errorMessage) {
        var errorContainer = document.createElement('div');
        errorContainer.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
        errorContainer.style.position = 'absolute';
        errorContainer.style.left = 0;
        errorContainer.style.right = 0;
        errorContainer.style.fontSize = '30px';

        errorContainer.textContent = errorMessage;
        errorContainer.classList.add('error');

        document.body.appendChild(errorContainer);
    };
    window.backend.load(successHandler, errorHandler);
}());