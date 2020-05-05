'use strict';

(function () {
    const setup = document.querySelector('.setup');
    const setupOpen = document.querySelector('.setup-open');
    const setupClose = setup.querySelector('.setup-close');
    const userNameInput = setup.querySelector('.setup-user-name');

    const dialogHandler = setup.querySelector('.upload');

    const setupForm = setup.querySelector('.setup-wizard-form');
    const setupFormBtn = setupForm.querySelector('.setup-submit');

    const onPopupEscPress = function(evt) {
        window.utils.isEscEvent(evt, closePopup);
    };

    const openPopup = function() {
        setup.classList.remove('hidden');
        document.addEventListener('keydown', onPopupEscPress);
    };

    const closePopup = function() {
        setup.classList.add('hidden');
        document.removeEventListener('keydown', onPopupEscPress);
    };

    setupOpen.addEventListener('click', function() {
        openPopup();
    });

    setupOpen.addEventListener('keydown', function(evt) {
        window.utils.isEnterEvent(evt, openPopup);
    });

    setupClose.addEventListener('click', function() {
        closePopup();
    });

    setupClose.addEventListener('keydown', function(evt) {
        window.utils.isEscEvent(evt, closePopup);
    });

    userNameInput.addEventListener('focus', function() {
        document.removeEventListener('keydown', onPopupEscPress);
    });

    userNameInput.addEventListener('blur', function() {
        document.addEventListener('keydown', onPopupEscPress);
    });

    setupFormBtn.addEventListener('submit', function (evt) {
        window.backend.upload(new FormData(setupFormBtn), function (response) {
            setup.classList.add('hidden');
        });
        evt.preventDefault();
    });

    // Validation
    userNameInput.addEventListener('invalid', function (evt) {
        if (userNameInput.validity.tooShort) {
            userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
        } else if (userNameInput.validity.tooLong) {
            userNameInput.setCustomValidity('Имя не должно состоять превышать 25-ти символов');
        } else if (userNameInput.validity.valueMissing) {
            userNameInput.setCustomValidity('Обязательно поле');
        } else {
            userNameInput.setCustomValidity('');
        }
    });

    dialogHandler.addEventListener('mousedown', function (evt) {
        evt.preventDefault();

        let startCoords = {
            x: evt.clientX,
            y: evt.clientY
        };

        let dragged = false;

        const onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();
            dragged = true;

            let shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY
            };
            
            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };

            setup.style.top = (setup.offsetTop - shift.y) + 'px';
            setup.style.left = (setup.offsetLeft - shift.x) + 'px';
        };

        const onMouseUp = function (upEvt) {
            upEvt.preventDefault();
            
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            if (dragged) {
                const onClickPreventDefault = function (evt) {
                    evt.preventDefault();
                    dialogHandler.removeEventListener('click', onClickPreventDefault);
                };
                dialogHandler.addEventListener('click', onClickPreventDefault);
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        
    });
})();