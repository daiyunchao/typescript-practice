//接口是对行为的抽象,具体的实现需要具体的类去实现


// 用于约束object的项目
// 可以理解成 自定义类型
// 比如下面的例子, 我自定义了一个person类型,使用我类型的变量必须满足我的属性要求
interface Person {
  name: string,
  age: number
};

let zhangsan: Person = {
  name: "zhangsan",
  age: 18
}


//可选属性,那我声明的类型没那么严格的时候,就出现了可选属性

interface Person2 {
  name: string,//必选属性
  age?: number//可选属性
}

let lisi: Person2 = {
  name: 'lisi',
  age: 20//这里的age属性可有可无
}

//可以定义可选属性,但不能多出一些属性

let wangwu: Person2 = {
  name: "wangwu",
  age: 20,
  gender: '女',//报错,gender在interface中未定义
}

//如何解决这个问题呢?

interface Person3 {
  name: string,
  age?: number,//定义可选属性
  [proName: string]: any,//定义任意名称的属性,赋值也是任意类型
}

let zhaoliu:Person3={
  name:'zhaoliu',
  age:20,
  gender:123,//正确
}


//只读属性
interface Person4{
  readonly id:string,
  name:string,
  age:number
}

let wangermazi:Person4={
  id:"001",
  name:"wangermaizi",
  age:10
}

//正确 name是可以被赋值的
wangermazi.name='wangermaizi001';

//错误 id属性是只读属性,不能再赋值
wangermazi.id='002'



