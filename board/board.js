/**
 * Created by PWJ on 2018/4/27.

	棋子类
 */

(function () {



    function Board(color,size,x,y) {
    	console.log(window);

    	this.color = color;
    	this.left = parseInt(x) - parseInt(size)/2;
    	this.top = parseInt(y) - parseInt(size)/2;

    }

    Board.prototype.paint = function () {
        console.log("123");

        let div = document.createElement("div");

        div.className = "board";
        div.style.left = this.left +"px";
        div.style.top = this.top +"px";

        return div;

    };

    window.Board = Board;

})(window);