// ECMAScript 内置对象
// Boolean Error Date RegExp
//这里的Boolean是对象 不同于 boolean
let b = new Boolean(1);
//普通类型 非引用类型
let b2 = false;
let error = new Error("this is error message");
let date = new Date(new Date().getTime());
let reg = /a-z/;
// BOM和DOM的内置对象
// Document HTMLElement Event NodeList MouseEvent
let body = document.body;
let divs = document.querySelectorAll('div');
document.addEventListener('click', function (e) {
});
// 用TypeScript写NodeJs
// Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：
// npm install @types/node --save-dev
