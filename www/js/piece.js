define(function() {

    function Piece(image) {
        this.el = document.createElement('div');
        this.el.className = 'piece';
        this.el.style.backgroundImage = 'url("img/' + image + '")';
    }

    Piece.prototype.displace = function(x, y) {
        this.el.style.backgroundPosition = x + '% ' + y + '%';
    };

    Piece.prototype.renderTo = function(parentEl) {
        parentEl.appendChild(this.el);
    };

    return Piece;
});
