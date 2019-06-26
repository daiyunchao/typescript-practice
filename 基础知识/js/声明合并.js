// 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型：
function reverse(x) {
    return x;
}
//我认为泛型也是一种重载
function reverse2(x) {
    return x;
}
reverse2(10);
reverse2('zhangsan');
class A {
    lightOn() {
    }
    lightOff() {
    }
}
//类的合并 类可以合并?
class AA {
}
class AA {
}
