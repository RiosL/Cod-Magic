'use strict';

(function () {
  const DATA_URI_PREFIX = 'data:image/svg+xml; charset=utf-8;base64,';

  window.svg2base64 = function (svgElement) {
    // превратить элемент в тексте
    const xml = new this.XMLSerializer().serializeToString(svgElement);

    //закодировть текст в base64 форму
    const svg64 = window.btoa(xml);

    // добавить заголовок
    return DATA_URI_PREFIX + svg64;
  };
})();