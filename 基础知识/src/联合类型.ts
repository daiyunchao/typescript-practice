//联合类型的意思就是 这个变量 可能有多种类型的情况 比如
let count:string|number;
count =10;
count="10箱"

//以上两种都可以正确的赋值, 但如果我将count赋值成其他的类型值

//错误,count可以是 string 或是number 但不能是其他的类型
count=false;


//当我们将联合类型用到函数中时
function getLength(something:string|number):number{

  //这里会报错,它认为当something是:string类型时没有length属性
  //好方便
  return something.length;
}

//再看看下面的例子
//这个例子就没问题,因为toString是string和number的共同属性
function getLength2(something:string|number):string{
  return something.toString();
}


