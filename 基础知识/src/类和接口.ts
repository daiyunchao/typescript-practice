//定义形状
interface Person {
  name: string,
  age: number
}

let _i_zhang: Person = {
  name: "zhangsan",
  age: 19
}



// 接口是对功能的抽象
//报警功能
interface Alarm {
  //只是行为的定义,而不去实现他
  alter();
}


interface Light{
  lightOn();
  lightOff();
}
//门
class Door {

}

//安全门 继承来自Door 并实现 Alarm接口
//如果实现了接口,就必须实现接口中的方法
class SecurityDoor extends Door implements Alarm {
  alter(){
    console.log("this is SecurityDoor alter");
  }
}


//车也实现了Alarm接口
class Car implements Alarm{
  alter(){
    console.log("this is car alter");
  }
}

//多接口实现
class Car2 implements Alarm,Light{
  alter(){
    console.log("this is car2 alter");
  };

  lightOn(){
    console.log("car lighton");
    
  }
  lightOff(){
    console.log("car lightoff");
    
  }
}

// 接口继承接口

interface Light2 extends Alarm{
  lightOn();
  lightOff();
}

