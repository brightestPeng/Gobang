/**
 * Created by PWJ on 2018/4/27.

	棋子类
 */

(function () {

    function Board(color,size,x,y) {
    	this.color = color;
    	this.left = parseInt(x) - parseInt(size)/2;
    	this.top = parseInt(y) - parseInt(size)/2;
        this.dom = null;
    }

    Board.prototype.paint = function () {

        let div = document.createElement("div");

        div.className = "board";
        div.style.left = this.left +"px";
        div.style.top = this.top +"px";
        div.style.backgroundColor = this.color;

        this.dom = div;
        return div;
    };


    Board.prototype.remove = function(){

        console.log(this);

        this.color = "transparent";
        this.dom.style.backgroundColor = "transparent";

        console.log(this.dom);
    }

    window.Board = Board;

})(window);