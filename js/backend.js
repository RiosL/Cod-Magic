'use strict';

(function () {
    const Url = {
        DOWNLOAD: 'https://javascript.pages.academy/code-and-magick/data',
        UPLOAD: 'https://javascript.pages.academy/code-and-magick/'
    };

    const ServerCode = {
        SUCCESS: 200,
        BAD_REQUEST: 400,
        NOT_FOUND: 404,
        ENTERNAL_ERROR: 500
    };

    let loadData = function (onSuccess, onError) {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('load', function () {
            switch (xhr.status) {
              case ServerCode.SUCCESS:
                onSuccess(xhr.response);
                break;
              case ServerCode.BAD_REQUEST:
                onError('Произошла ошибка сервера: неверный запрос');
                break;
              case ServerCode.NOT_FOUND:
                onError('Произошла ошибка сервера: запрашиваемый ресурс не найден');
                break;
              case ServerCode.ENTERNAL_ERROR:
                onError('Произошла внутренняя ошибка сервера');
                break;
              default:
                onError('Произошла ошибка сервера: ' + xhr.status + ' ' + xhr.statusText);
            }
        });

        xhr.addEventListener('error', function () {
            onError('Произошла ошибка соединения');
        });

        xhr.addEventListener('timeout', function () {
            onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
        });
        
        xhr.timeout = 10000;

        xhr.open('GET', Url.DOWNLOAD);
        xhr.send();
    };

    let uploadData = function (data, onSuccess) {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('load', function () {
            onSuccess(xhr.response);
        });

        xhr.open('POST', Url.UPLOAD);
        xhr.send(data);
    };

    window.backend = {
        load: loadData,
        upload: uploadData
    };

})();