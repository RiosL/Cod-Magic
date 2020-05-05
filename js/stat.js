'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 16;
const TEXT_X = 85;
const TEXT_Y = 30;
const TEXT_HEIGHT = 50;
const BAR_X = 65;
const BAR_WIDTH = 40;
const BAR_HEIGHT = -150;

let renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.strokeStyle = ctx.fillStyle;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + GAP, y + CLOUD_HEIGHT / 2);
    ctx.lineTo(x, y + CLOUD_HEIGHT);
    ctx.lineTo(x + CLOUD_WIDTH / 2, y + CLOUD_HEIGHT - GAP);
    ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
    ctx.lineTo(x + CLOUD_WIDTH - GAP, y + CLOUD_HEIGHT / 2);
    ctx.lineTo(x + CLOUD_WIDTH, y);
    ctx.lineTo(x + CLOUD_WIDTH / 2, y + GAP);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
};

let getMaxElement = function(arr) {

    if (arr.length == 0) {
        console.log('пусстой массив');
    } else {
        let maxElement = arr[0];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxElement) {
                maxElement = arr[i];
            }
        }
        return maxElement;
    }
};

window.renderStatistics = function(ctx, players, times) {

    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'handing';
    ctx.fillText('Ура, ВЫ победили!', CLOUD_X + TEXT_X , CLOUD_Y + TEXT_Y);
    ctx.fillText('Список результатов:', CLOUD_X + TEXT_X, CLOUD_Y + TEXT_Y + FONT_GAP);

    let maxTime = Math.round(getMaxElement(times));

  
    for (let i = 0; i < players.length; i++) {
        let rgbaColor = 'rgba(' + 0 + ', '+ 0 + ', '+ (Math.random()*255) + ', ' + 1 + ')';
        ctx.fillStyle = rgbaColor;

        if (players[i] == 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        }
        
        ctx.fillText( players[i], CLOUD_X + TEXT_X * i + BAR_X, CLOUD_Y + CLOUD_HEIGHT - TEXT_Y);
        ctx.fillRect(CLOUD_X + TEXT_X * i + BAR_X, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime );
    }
};