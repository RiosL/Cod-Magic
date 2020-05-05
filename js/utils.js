'use strict';

window.utils = (function () {
    const ENTER_KEYCODE = 13;
    const ESC_KEYCODE = 27;

    return {
        WizardsProps: {
            QIANTITY: 4, //кол-во отображаемых похожих магов
            COAT_COLORS: [
                'rgb(101, 137, 164)',
                'rgb(241, 43, 107)',
                'rgb(146, 100, 161)',
                'rgb(56, 159, 117)',
                'rgb(215, 210, 55)',
                'rgb(0, 0, 0)'
            ],
            EYES_COLORS: [
                'black',
                'red',
                'blue',
                'yellow',
                'green'
            ],
            FIREBALL_COLORS: [
                '#ee4830',
                '#30a8ee',
                '#5ce6c0',
                '#e848d5',
                '#e6e848'
              ]
        },

        isEnterEvent: function (evt, action) {
            if (evt.keyCode == ENTER_KEYCODE) {
                action();
            }
        },
        isEscEvent: function (evt, action) {
            if (evt.keyCode == ESC_KEYCODE) {
                action();
            }
        },

        getRandElement: function(arr) {
            let rand = Math.floor(Math.random() * arr.length);
            return arr[rand];
        },

        getRandomNum : function(min,max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

    };
})();
