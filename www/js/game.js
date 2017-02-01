define(function(require) {

    if(AdMob) {
        var config = require('config');

        AdMob.createBanner({
            adId: config.admobAdId,
            position: AdMob.AD_POSITION.TOP_CENTER,
            autoShow: true,
            isTesting: config.admobTesting 
        });
    }

    var baseImages = [ 'super_boy.png', 'super_girl.png' ]; 
    var _ = require('_');
    var image = _.sample(baseImages);

    var Piece = require('piece');

    var pieces = [];

    var docUtils = require('docutils');
    var w = docUtils.width(),
        h = docUtils.height(),
        w5 = w/5,
        h5 = h/5;

    for(var x = 0; x < 5; x++) {
        for(var y = 0; y < 5; y++) {
            var piece = new Piece(image);
            piece.displace(x * w5, y * h5);
            pieces.push(piece);
        }
    }

    var randomPieces = _.shuffle(pieces);

    var board = document.getElementById('board');

    var first = null, second = null;

    var onClickPiece = function(ev) {
        if(first == null) {
            first = ev.target;
            first.className = 'piece selected';
        } else {
            second = ev.target.style.backgroundPosition;
            ev.target.style.backgroundPosition = first.style.backgroundPosition;
            first.style.backgroundPosition = second;
            first.className = 'piece';
            first = second = null;
        }
    };

    randomPieces.forEach(function(piece) {
        piece.renderTo(board);
        piece.el.addEventListener('click', onClickPiece, false);
    });
});

