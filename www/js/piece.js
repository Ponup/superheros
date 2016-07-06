define(function(require) {

    function Piece(image) {
        this.el = document.createElement('div');
        this.el.className = 'piece';
        this.el.style.backgroundImage = 'url("img/' + image + '")';

        var docUtils = require('docutils');
        this.el.style.backgroundSize = docUtils.width() + 'px ' + docUtils.height() + 'px';
    }

    Piece.prototype.displace = function(x, y) {
        this.el.style.backgroundPosition = x + 'px ' + y + 'px';
    };

    Piece.prototype.renderTo = function(parentEl) {
        parentEl.appendChild(this.el);
    };

    return Piece;
});
