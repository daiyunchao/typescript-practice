
//定义参数和返回值类型
function sum(x: number, y: number): number {
  return x + y;
}

//正确
sum(1, 2)

//错误,类型不匹配
sum('zhangsan', 12);

//错误,参数个数不匹配
sum(1, 2, 3);

//错误,参数个数不匹配
sum(1);

//匿名函数
let sum2 = function (x: number, y: number): boolean {
  return false;
}



//接口的方式定义函数的参数和返回值
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return false;
}



//可选参数 用问号表示

function sum3(x:number,y?:number):boolean{
  return x+y>0?true:false
}

//都是正确的因为y现在是可选参数
sum3(1)
sum3(1,2)


//参数默认值
function sum4(x:number,y:number=10):boolean{
  return x+y>0?true:false 
}



//剩余参数
//和ES6相同 ...rest 的方式获取剩余参数,但typeScript定义会更明显一些
function sum5(x:number,y:number,...z:any[]):boolean{
  return x+y>0?true:false 
}

//函数重载

//函数定义 定义一个输入参数number 输出也是number的函数
function total_sum(x:number):number;

//同名函数定义 定义一个输入参数string 输出也是string的函数
function total_sum(x:string):string;

//函数实现
function total_sum(x:string|number):number|string{
  if (typeof x=='number') {
    return 0;
  }
  if (typeof x=='string') {
    return '1'
  }
}


//在调用时就会出现两个函数的提示
total_sum(1);
total_sum('zhang')