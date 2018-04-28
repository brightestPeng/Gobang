/**
 * Created by PWJ on 2018/4/26.
 */

(function(){

	//棋子大小
	let boardSize = 40;
	//棋盘网格 15*15
	let boardGridx = 15;
	let boardGridy = 15;

	function Gobang(dom) {
    	this.dom = dom;

    	console.log(this);
	}

	Gobang.prototype.start = function(){

		this.render();
	}

	Gobang.prototype.render = function(){
		for(let m=0;m<boardGridx;m++){

			for(let n =0;n<boardGridy;n++){
				let board = new Board("transpant",40,m*40,n*40);
				this.addBoard(board);
			}

		}
	};

	Gobang.prototype.addBoard = function(board){
		console.log(board.paint());
		console.log(this.dom);
		this.dom.appendChild(board.paint());
	}

	window.Gobang = Gobang;
})(window)

	

