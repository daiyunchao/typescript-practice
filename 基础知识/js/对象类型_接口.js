//接口是对行为的抽象,具体的实现需要具体的类去实现
;
let zhangsan = {
    name: "zhangsan",
    age: 18
};
let lisi = {
    name: 'lisi',
    age: 20 //这里的age属性可有可无
};
//可以定义可选属性,但不能多出一些属性
let wangwu = {
    name: "wangwu",
    age: 20,
    gender: '女',
};
let zhaoliu = {
    name: 'zhaoliu',
    age: 20,
    gender: 123,
};
let wangermazi = {
    id: "001",
    name: "wangermaizi",
    age: 10
};
//正确 name是可以被赋值的
wangermazi.name = 'wangermaizi001';
//错误 id属性是只读属性,不能再赋值
wangermazi.id = '002';
