/**
 * Created by PWJ on 2018/4/26.
 */


function judgeFuc(args,boardSize){
	let  newArgs = args.sort();
	let i = 0;

	for(let m=0;m<newArgs.length-1;m++){
		if(i < 5){
		  if(newArgs[m - 1]-newArgs[m] === boardSize){
		  		i++;
		  }else{
		  	i = 0;
		  }
		}
		return false;
	}

	return true;
};



(function(){

	//棋子大小
	let boardSize = 40;
	//棋盘网格 15*15
	let boardGridx = 15;
	let boardGridy = 15;
	//确定黑白子
     let isBlack = true;


	function Gobang(dom) {
    	this.dom = dom;
    	this.board = [];
	}

	Gobang.prototype.start = function(){
		this.render();
	}

	Gobang.prototype.render = function(){
		for(let m=0;m<boardGridx;m++){
			for(let n =0;n<boardGridy;n++){
				let board = new Board("transparent",boardSize,m*boardSize,n*boardSize);
				this.addBoard(board);
			}

		}
	};

	Gobang.prototype.addBoard = function(board){
		let div = board.paint();
		this.dom.appendChild(div);

		div.onclick = ()=>{
            if(board.color !== "transparent"){return false;}

            if(isBlack){
                div.style.backgroundColor = "black";
                board.color = "black";
            }else{
                div.style.backgroundColor = "white";
                board.color = "white";
            }
            isBlack = !isBlack;
            this.whoWin(board);
		};
	}


	Gobang.prototype.whoWin = function(board){
		
		let winArgs = [];
		let args = this.board.filter(index=>{
			return index.color === board.color ;
		});

		this.board.push(board);
		if(args.length < 4){return false;}

		let x = board.left;
		let y = board.top;

		let argsX = [] // X轴 Y相同;
		let argsY = [] // Y轴 X相同;
        let argsE = [] // 一三象限   X Y相等 
        let argsO = [] // 二四象限   X Y相导 

		for(let index of args){
			let x1 =  index.left;
			let y1 =  index.top;
			if( x === x1){
				argsX.push(y1);
			}else if(y === y1){
				argsY.push(x1);
			}else if( x - x1 === y - y1 ){
				argsE.push(x1);
			}else if(x-x1 === -(y-y1)){
				argsO.push(x1);
			}
		}

		if(argsX.length < 4 && argsY.length < 4 && argsE.length < 4 && argsO.length < 4 ){
			return false;
		}else{
			if(argsX.length >= 4){
				argsX.push(y);
			}
			if(argsE.length >= 4){
				argsE.push(x);
			}
			if(argsY.length >= 4){
				argsY.push(x);
			}
			if(argsO.length >= 4){
				argsO.push(x);
			}
		}

		if(judgeFuc(argsX,boardSize) || judgeFuc(argsY,boardSize) || judgeFuc(argsE,boardSize) || judgeFuc(argsO,boardSize)){
			this.winEvent();
		}
       
	};


	Gobang.prototype.winEvent = function(){	
		if(isBlack){
			alert("白方胜,游戏重新开始");
		}else{
			alert("黑方胜,游戏重新开始");
		}

		for(let index of this.board){
			console.log(index);
			index.remove();
		}

		this.board = [];
		isBlack = true;
	};


	window.Gobang = Gobang;
})(window)

	

