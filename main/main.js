module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.Elements()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
	// 构造函数
  constructor(input) {
    this.data = input;
  }
  
  // 求序列最小值的函数
  minimum() {
    var min = Number.POSITIVE_INFINITY;
    for(var i = 0; i < this.data.length; i++){
    	if(this.data[i] < min)
    	min = this.data[i];
    }
    return min;
  }

  // 求序列最大值的函数
  maximum() {
    var max = Number.NEGATIVE_INFINITY;
    for(var i = 0; i < this.data.length; i++){
    	if(this.data[i] > max)
    	max = this.data[i];
    }
    return max;
  }
  
  // 求序列元素个数的函数
  Elements(){
  	return this.data.length;
  }
  
   // 求序列平均值的函数
   average() {
    var ave = 0.0;
    for(var i = 0; i < this.data.length; i++){
    	ave = ave + this.data[i];
    }
    ave = ave / this.data.length;
    return ave.toFixed(2);;
  }
}
