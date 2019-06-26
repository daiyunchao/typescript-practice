function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
//上面例子会报错 因为something是联合类型,我们只能访问something的共同属性
// 如何解决这个问题呢
//断言 something为字符串时 才使用something的length属性
//语法1 <类型>变量
function getLength2(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
//语法2 变量 as 类型
function getLength3(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
