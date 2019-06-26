// // ES6的Class
// class Animal {
//   name = ""

//   //静态方法
//   static isAnimal(a) {
//     return a instanceof Animal
//   }
//   constructor(name) {
//     this.name = name;
//   }

//   //get set 寄存器
//   get name() {
//     return this.name;
//   }

//   set name(name) {
//     this.name = name;
//   }
//   asyHi() {
//     return `Hi MyName is ${this.name}`;
//   }
// }

// let san = new Animal('zhangsan');
// san.asyHi();

// class Cat extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   asyHi() {
//     return super.asyHi();
//   }
// }



// TypeScript中的Class
//修饰符 public private protected 意思和C#中含有完全相同

//public属性的name 可以被访问到,并且可以被修改
class Animal {
  public name: string;
  public constructor(name) {
    this.name = name;
  }
}

let a = new Animal('zhangsan');
a.name = "12";


class Animal2 {
  private name: string;
  public constructor(name) {
    this.name = name;
  }
}

let _b = new Animal2('lisi');
//不能直接访问私有属性
_b.name



class Cat extends Animal {
  constructor(name) {
    super(name);
    //因为name是public的所以可以被子类访问到
    this.name
  }
}

class Cat2 extends Animal2 {
  constructor(name) {
    super(name);
    //不能访问,因为name在父类中是private的
    this.name;
  }
}


class Animal3 {
  protected name;
  constructor(name) {
    this.name = name;
  }
}

let c3 = new Animal3('wangwu');
//protected在实例中也是无法访问的
c3.name;


class Cat3 extends Animal3 {
  constructor(name) {
    super(name);
    //在子类中可以访问 protected的属性
    this.name;
  }
}



//抽象类
// 定义和C#相同

abstract class Animal4 {
  public name: string;
  constructor(name) {
    this.name = name;
  }

  public abstract sayHi(): void;
}

//错误 抽象类不能被实例化
let a_a = new Animal4()


//只能被继承
class Cat4 extends Animal4 {

  //如果继承了抽象类,则一定要实现抽象类中的抽象方法
  sayHi() {

  }
}


//给变量添加类的类型

class Animal5 {
  public name: string;
  constructor(name) {
    this.name = name;
  }
  public sayHi() {

  }
}

//将变量abc赋类型 Animal5 
let abc:Animal5;

//如果我将一个其他类型的实例赋值给abc则会出现错误
abc=new Animal('zhangsan');

//正确 类型匹配
abc= new Animal5('lisi')