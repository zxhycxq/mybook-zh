/**
 * Created by JieYi on 2017/2/20.
 * 二月
 */
class Point {
    constructor (x,y){
        this.x=x;
        this.y =y;
    }
    toString(){
        return '('+this.x+','+this.y+')';
    }
    click(){
        console.log(123);
    }
}

class Bar {
    doStuff() {
        console.log('stuff');
    }
}
 
var b = new Bar();
b.doStuff() // "stuff"


/*我是注释*/
//我是注释2

class Paa{
    constructor (){
        this.x=x;
        this.y=y;
    }
}

class aaa extends Paa{
    constructor(x,y,color){
        super(x, y);
        this.color = color;
    }
}
var args=[1,2,3,5];

function sum(...args){
 for (var prop in args) {
    console.log(arg);
 }
}

