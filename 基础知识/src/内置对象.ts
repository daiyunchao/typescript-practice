// ECMAScript 内置对象
// Boolean Error Date RegExp

//这里的Boolean是对象 不同于 boolean
let b: Boolean = new Boolean(1);

//普通类型 非引用类型
let b2: boolean = false;

let error: Error = new Error("this is error message");

let date: Date = new Date(new Date().getTime());

let reg: RegExp = /a-z/;


// BOM和DOM的内置对象
// Document HTMLElement Event NodeList MouseEvent

let body:HTMLElement=document.body;
let divs:NodeList=document.querySelectorAll('div');
document.addEventListener('click',function(e:MouseEvent){

})


// 用TypeScript写NodeJs
// Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：
// npm install @types/node --save-dev