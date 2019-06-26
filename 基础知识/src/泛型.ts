// 在定义时不指定具体的类型,而是在使用时才具体的指定类型

//普通的函数定义,使用的是任何类型any
function createArray(length: number, default_value: any): Array<any> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = default_value;
  }
  return result;
}

createArray(3, 'x');

//上面的例子有一个问题,如果保证 返回的 数组类型和default_value的类型是相同的定义呢?

//泛型改写
function createArray2<T>(length: number, default_value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = default_value;
  }
  return result;
}

//清楚的知道我返回的肯定是一个string的数组
let arr_str = createArray2<string>(10, 'x');

//报错类型不匹配
let arr_num = createArray2<string>(10, 10);

//正确,类型匹配
let arr_num2 = createArray2<number>(10, 5);
//并不会
for (let index = 0; index < arr_str.length; index++) {
  const element = arr_str[index];

  //并不会保存,因为string有length属性
  console.log(element.length);

}


for (let index = 0; index < arr_num2.length; index++) {
  const element = arr_num2[index];

  //报错了,因为此时清楚的知道 element是number类型,而number类型是没有length属性的
  console.log(element.length);

}




//多个泛型参数

function getInfo<T, U>(a: T, b: U): T {
  return a;
}

getInfo<number, string>(10, 'zfc');


//约束泛型

//例子:
//因为我的参数arg是泛型,所以编辑器也不知道arg是否有length属性
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length);
  return arg;
}

//如何解决上面的问题呢?

//为泛型添加约束的条件
interface lengthWith {
  length: number
};

//传入的类型基础接口lengthWith,达到约束变量的作用
function loggingIdentity2<T extends lengthWith>(arg: T): T {
  console.log(arg.length);
  return arg;
}

//满足条件,string是有length属性的
loggingIdentity2<string>('zhangsan');

//错误,number类型没有length属性
loggingIdentity2<number>(19);


//在接口中定义泛型

interface IcreateArray {
  <T>(length: number, default_value: T): Array<T>;
}

let createArray3: IcreateArray;
createArray3 = function <T>(length: number, default_value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = default_value;
  }
  return result;
}



//泛型类

class GenericNumber<T>{
  add(x: T, y: T): T {
    return x;
  }
}

let myGenericNumber = new GenericNumber<number>();



//泛型的默认值:
function createArray4<T = string>(length: number, default_value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = default_value;
  }
  return result;
}