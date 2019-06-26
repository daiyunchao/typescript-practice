// js中的基础类型有 boolean string number null undefined 和 es6的symbol
// 布尔类型的变量声明
let isDone = false;
//错误 boolean 是基础类型 而 new Boolean会返回一个boolean的对象
//let isDone2:boolean =new Boolean(true);
//正确 Boolean返回一个简单类型
let isDone2 = Boolean(1);
//Number类型
//10进制
let decLiteral = 10;
//16进制
let hexLiteral = 0xf00d;
//2进制
let binaryLiteral = 0b0101;
//8进制
let octalLiteral = 0o744;
//NaN
let notNumber = NaN;
//正负无穷
let infinityNumber = Infinity;
let infinityNumber2 = -Infinity;
//String类型
//普通字符串
let myName = "Zhangsan";
//字符串模版
let myName2 = `Lisi`;
//空值
//什么都不返回的函数
function sayHello() {
}
let unusable = undefined;
//错误,不能讲void类型赋值成 非 null /undefined的值
//unusable=19;
//正确:null值可以赋到一个void类型的变量上
unusable = null;
//Null and Undefined
let nullvar = null;
//定义null类型的变量可以被undefined/null赋值
nullvar = undefined;
nullvar = null;
//错误:不能被具体的值赋值
// nullvar=19;
let undefinedvar = undefined;
undefinedvar = null;
undefinedvar = undefined;
//可以将一个undefined的值赋给 字符串变量 数值 bool值 同理
let strName = undefinedvar;
//但不能将void的值赋到一个字符串变量上 数值 bool值 同理
// strName=unusable;
