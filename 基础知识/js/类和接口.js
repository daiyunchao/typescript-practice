let _i_zhang = {
    name: "zhangsan",
    age: 19
};
//门
class Door {
}
//安全门 继承来自Door 并实现 Alarm接口
//如果实现了接口,就必须实现接口中的方法
class SecurityDoor extends Door {
    alter() {
        console.log("this is SecurityDoor alter");
    }
}
//车也实现了Alarm接口
class Car {
    alter() {
        console.log("this is car alter");
    }
}
//多接口实现
class Car2 {
    alter() {
        console.log("this is car2 alter");
    }
    ;
    lightOn() {
        console.log("car lighton");
    }
    lightOff() {
        console.log("car lightoff");
    }
}
