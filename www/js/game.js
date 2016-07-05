define(function(require) {
    var baseImages = [ 'super_boy.png', 'super_girl.png' ]; 
    var _ = require('_');
    var image = _.sample(baseImages);

    var Piece = require('piece');

    var pieces = [];

    for(var x = 0; x < 5; x++) {
        for(var y = 0; y < 5; y++) {
            var piece = new Piece(image);
            piece.displace(x * 20, y * 20);
            pieces.push(piece);
        }
    }

    var randomPieces = _.shuffle(pieces);

    var board = document.getElementById('board');

    var first = null, second = null;

    var onClickPiece = function(ev) {
        if(first == null) {
            first = ev.target;
        } else {
            second = ev.target.style.backgroundPosition;
            ev.target.style.backgroundPosition = first.style.backgroundPosition;
            first.style.backgroundPosition = second;
            first = second = null;
        }
    };

    randomPieces.forEach(function(piece) {
        piece.renderTo(board);
        piece.el.addEventListener('click', onClickPiece, false);
    });
});

